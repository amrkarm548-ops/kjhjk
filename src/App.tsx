import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, Check, ChevronLeft, ChevronRight, ImagePlus, Menu, Printer, X } from 'lucide-react';
import { lectures } from './data';
import { CoverPage, fileNameOf, makeBlocks, MeasurePage, paginate, PAPER_HEIGHT, PAPER_WIDTH, ReadingPage, type BlockMetric, type BookPage } from './components/BookContent';

/** Selectors for the real, visible pages only (the hidden measuring page uses the same classes). */
const PAGE_BODIES = '.page-stage .reading-paper .page-body';
const PAGE_BLOCKS = '.page-stage .reading-paper [data-block-id]';
const PAGE_IMAGES = '.page-stage .reading-paper img';

/** Usable height of a page body: 1123 − padding 80 − header 39 − gap 27 − footer 35 − gap 17. Re-read from the DOM at runtime. */
const DEFAULT_BODY_HEIGHT = 925;
/** Tiny safety margin for sub-pixel rounding only — real overflow is corrected per page, not by shrinking every page. */
const SAFETY = 3;
/** Upper bound on overflow-correction rounds so a block taller than a page can never loop forever. */
const MAX_FIX_ROUNDS = 15;

/**
 * flow = distance from this block's top to the next block's top (own height + the gap after it, margins collapsed)
 * box  = own border-box height — what has to fit when the block is the last one on a page
 * img  = image height inside a figure block, so a figure can be shrunk to fill the end of a page
 */
function measureBlocks(container: HTMLElement): Map<string, BlockMetric> {
  const metrics = new Map<string, BlockMetric>();
  const elements = Array.from(container.querySelectorAll<HTMLElement>(':scope > [data-block-id]'));
  elements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const next = elements[index + 1];
    const box = Math.ceil(rect.height);
    const flow = next
      ? Math.ceil(next.getBoundingClientRect().top - rect.top)
      : Math.ceil(rect.height + parseFloat(getComputedStyle(element).marginBottom || '0'));
    const image = element.classList.contains('entry-figures') ? element.querySelector('img') : null;
    metrics.set(element.dataset.blockId!, { flow, box, img: image ? Math.floor(image.getBoundingClientRect().height) : undefined });
  });
  return metrics;
}

const sameMetrics = (a: Map<string, BlockMetric> | null, b: Map<string, BlockMetric>) =>
  !!a && a.size === b.size && [...b].every(([id, value]) => {
    const old = a.get(id);
    return !!old && old.flow === value.flow && old.box === value.box && old.img === value.img;
  });

export default function App() {
  const blocks = useMemo(makeBlocks, []);
  const measureRef = useRef<HTMLDivElement>(null);
  const readerRef = useRef<HTMLDivElement>(null);
  const fixRounds = useRef(0);
  const lastHeights = useRef<Map<string, BlockMetric> | null>(null);
  const [heights, setHeights] = useState<Map<string, BlockMetric> | null>(null);
  const [bodyHeight, setBodyHeight] = useState(DEFAULT_BODY_HEIGHT);
  const [breaks, setBreaks] = useState<Set<string>>(() => new Set());
  const pages = useMemo<BookPage[]>(
    () => (heights ? paginate(blocks, heights, bodyHeight - SAFETY, breaks) : []),
    [blocks, heights, bodyHeight, breaks],
  );
  const [auditComplete, setAuditComplete] = useState(false);
  const [auditIssue, setAuditIssue] = useState('');
  const [scale, setScale] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [slotsOpen, setSlotsOpen] = useState(false);

  // 1) Measure every block with the real fonts and images. Re-measure whenever a font or image finishes loading.
  useLayoutEffect(() => {
    const container = measureRef.current;
    if (!container) return;
    let cancelled = false;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (cancelled) return;
        const next = measureBlocks(container);
        if (sameMetrics(lastHeights.current, next)) return;
        lastHeights.current = next;
        // Fresh measurements invalidate earlier per-page corrections.
        fixRounds.current = 0;
        setBreaks(new Set());
        setHeights(next);
      });
    };

    measure();
    document.fonts.ready.then(measure);
    document.fonts.addEventListener('loadingdone', measure);
    const images = Array.from(container.querySelectorAll('img'));
    images.forEach((image) => { image.addEventListener('load', measure); image.addEventListener('error', measure); });
    const observer = new ResizeObserver(measure);
    observer.observe(container);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      document.fonts.removeEventListener('loadingdone', measure);
      images.forEach((image) => { image.removeEventListener('load', measure); image.removeEventListener('error', measure); });
      observer.disconnect();
    };
  }, [blocks]);

  // 2) Check the rendered pages. A page that still overflows pushes only its overflowing block to the next page —
  //    the other pages keep their full height, so no empty bands appear at the bottom of pages.
  useEffect(() => {
    if (!pages.length) return;
    let cancelled = false;
    setAuditComplete(false);

    const inspect = () => {
      if (cancelled) return;

      const firstBody = document.querySelector<HTMLElement>(PAGE_BODIES);
      if (firstBody && Math.abs(firstBody.clientHeight - bodyHeight) > 1) {
        setBodyHeight(firstBody.clientHeight);
        return;
      }

      const newBreaks: string[] = [];
      let unfixable = 0;
      document.querySelectorAll<HTMLElement>(PAGE_BODIES).forEach((body) => {
        if (body.scrollHeight <= body.clientHeight + 1) return;
        const bottom = body.offsetTop + body.clientHeight;
        const items = Array.from(body.querySelectorAll<HTMLElement>(':scope > [data-block-id]'));
        const index = items.findIndex((item) => item.offsetTop + item.offsetHeight > bottom + 1);
        if (index <= 0) { unfixable += 1; return; }
        // Never strand a heading at the bottom: move it together with its block.
        const previous = items[index - 1];
        const headingAbove = previous.classList.contains('section-block') || previous.classList.contains('entry-subheading');
        const target = headingAbove && index - 1 > 0 ? items[index - 1] : items[index];
        newBreaks.push(target.dataset.blockId!);
      });

      if (newBreaks.length && fixRounds.current < MAX_FIX_ROUNDS) {
        fixRounds.current += 1;
        setBreaks((previous) => new Set([...previous, ...newBreaks]));
        return;
      }

      const visibleBlocks = Array.from(document.querySelectorAll<HTMLElement>(PAGE_BLOCKS));
      const contentComplete = visibleBlocks.length === blocks.length && new Set(visibleBlocks.map((item) => item.dataset.blockId)).size === blocks.length;
      const imagesReady = Array.from(document.querySelectorAll<HTMLImageElement>(PAGE_IMAGES)).every((image) => image.complete);
      setAuditIssue(!contentComplete ? 'لم يكتمل توزيع كل الفقرات على الصفحات.' : unfixable ? 'في بلوك أطول من صفحة كاملة.' : '');
      setAuditComplete(contentComplete && imagesReady && !newBreaks.length && !unfixable);
    };

    const frame = requestAnimationFrame(() => requestAnimationFrame(inspect));
    const images = Array.from(document.querySelectorAll<HTMLImageElement>(PAGE_IMAGES));
    images.forEach((image) => { image.addEventListener('load', inspect); image.addEventListener('error', inspect); });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      images.forEach((image) => { image.removeEventListener('load', inspect); image.removeEventListener('error', inspect); });
    };
  }, [pages, bodyHeight, blocks]);

  useEffect(() => {
    if (!readerRef.current) return;
    const resize = () => setScale(Math.min(1, Math.max(0.25, (readerRef.current!.clientWidth - 28) / PAPER_WIDTH)));
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(readerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!pages.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length) setCurrentPage(Number(visible[visible.length - 1].target.getAttribute('data-page-number')));
    }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });
    document.querySelectorAll('.page-stage .paper').forEach((paper) => observer.observe(paper));
    return () => observer.disconnect();
  }, [pages]);

  useEffect(() => {
    if (!guideOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setGuideOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [guideOpen]);

  const totalPages = pages.length + 1;
  const activeLecture = pages[currentPage - 2]?.lecture.number ?? 1;
  const imageSlots = useMemo(() => {
    const found: { need: string; file: string; page: number; en: string; ar: string }[] = [];
    pages.forEach((page, index) => {
      page.blocks.forEach((block) => {
        if (block.kind === 'entry' && block.entry.kind === 'figures') {
          block.entry.figures.forEach((item) => {
            if (item.need) found.push({ need: item.need, file: fileNameOf(item.src), page: index + 2, en: item.en, ar: item.ar });
          });
        }
      });
    });
    return found;
  }, [pages]);

  const progress = currentPage / totalPages;
  const motivation = progress <= 0.15
    ? 'بداية قوية — خد أول نقطة بتركيز.'
    : progress <= 0.4
      ? 'أنت ماشي كويس، المعلومة بتتجمع واحدة واحدة.'
      : progress <= 0.7
        ? 'استمر، اللي فاضل أقل مما فات.'
        : progress <= 0.95
          ? 'قربت تخلص — ماتسبش آخر شوية.'
          : 'أحسنت! وصلت للنهاية.';

  const findChapterPage = (lectureNumber: number) => {
    const index = pages.findIndex((page) => page.blocks.some((block) => block.kind === 'chapter' && block.lecture.number === lectureNumber));
    return index === -1 ? 1 : index + 2;
  };

  const findSectionPage = (lectureNumber: number, sectionNumber: number) => {
    const index = pages.findIndex((page) => page.blocks.some((block) => block.kind === 'section' && block.lecture.number === lectureNumber && block.section.number === sectionNumber));
    return index === -1 ? findChapterPage(lectureNumber) : index + 2;
  };

  const goToPage = (pageNumber: number) => {
    document.getElementById(`page-${Math.min(totalPages, Math.max(1, pageNumber))}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const startPrint = async () => {
    setGuideOpen(false);
    await document.fonts.ready;
    await Promise.all(Array.from(document.querySelectorAll<HTMLImageElement>('.paper img')).map((image) => image.decode().catch(() => undefined)));
    // Give the dialog time to close before the browser snapshots the page.
    setTimeout(() => window.print(), 150);
  };

  return (
    <div className="app-shell" dir="ltr">
      {menuOpen && <button className="mobile-backdrop" aria-label="إغلاق الفهرس" onClick={() => setMenuOpen(false)} />}
      <aside className={`sidebar${menuOpen ? ' sidebar-open' : ''}`} dir="rtl">
        <div className="sidebar-top">
          <button className="sidebar-brand" onClick={() => goToPage(1)} aria-label="العودة إلى الغلاف">
            <span className="brand-symbol">+</span><span>تمريضيانو<span className="brand-period">.</span></span>
          </button>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="إغلاق"><X size={20} /></button>
          <p className="sidebar-eyebrow">NURSING EDUCATION SERIES</p>
          <h2>محاضرة ١ باثولوجي<br />التنكس والتكلس وموت الخلايا</h2>
          <p className="sidebar-subtitle">English / الترجمة / الشرح</p>
        </div>

        <div className="sidebar-scroll">
          <p className="nav-label">الفهرس / CONTENTS</p>
          {lectures.map((lecture) => (
            <button key={lecture.number} className={`chapter-link${activeLecture === lecture.number && currentPage !== 1 ? ' active' : ''}`} onClick={() => goToPage(findChapterPage(lecture.number))}>
              <span className="chapter-link-number">0{lecture.number}</span>
              <span><strong>{lecture.ar}</strong><small>{lecture.en}</small></span>
            </button>
          ))}
          <div className="sidebar-section-list">
            <p className="nav-label">داخل المحاضرة {activeLecture.toString().padStart(2, '0')}</p>
            {lectures[activeLecture - 1].sections.map((section) => (
              <button key={section.number} onClick={() => goToPage(findSectionPage(activeLecture, section.number))}>
                <span>{String(section.number).padStart(2, '0')}</span>{section.ar}
              </button>
            ))}
          </div>
        </div>

        <div className="sidebar-bottom">
          <div className="progress-caption"><span>تقدم القراءة</span><span>{String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}</span></div>
          <div className="progress-track"><span style={{ width: `${(currentPage / totalPages) * 100}%` }} /></div>
          <p className="audit-line">{auditComplete ? <Check size={14} /> : <BookOpen size={14} />}{auditComplete ? `تم فحص حدود ${totalPages} صفحة` : 'جاري فحص الصفحات'}</p>
          <p className="motivation" dir="rtl">{motivation}</p>
        </div>
      </aside>

      <div className="workspace" dir="rtl">
        <header className="toolbar">
          <div className="toolbar-heading">
            <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="فتح الفهرس"><Menu size={21} /></button>
            <span className="toolbar-overline">تمريضيانو / STUDY NOTES</span>
            <strong>محاضرة ١ باثولوجي — علم الأمراض والاستجابة الخلوية</strong>
          </div>
          <div className="toolbar-actions">
            <div className="page-control" aria-label="التنقل بين الصفحات">
              <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1} aria-label="الصفحة السابقة"><ChevronRight size={17} /></button>
              <span><b>{String(currentPage).padStart(2, '0')}</b><i>/</i>{String(totalPages).padStart(2, '0')}</span>
              <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages} aria-label="الصفحة التالية"><ChevronLeft size={17} /></button>
            </div>
            {imageSlots.length > 0 && (
              <button className="slots-button" onClick={() => setSlotsOpen(true)} aria-label={`${imageSlots.length} أماكن صور فارغة`}>
                <ImagePlus size={17} /><span>صور ({imageSlots.length})</span>
              </button>
            )}
            <button className="download-button" onClick={() => setGuideOpen(true)} disabled={!auditComplete} aria-label="طباعة أو حفظ الملزمة PDF">
              <Printer size={17} /><span>طباعة / حفظ PDF</span>
            </button>
          </div>
        </header>

        <main className="reader" ref={readerRef}>
          <div className="reader-intro" dir="rtl">
            <div className="legend">
              <span><b className="lg-en">English</b> للامتحان</span>
              <span><b className="lg-ar">الترجمة</b> للفهم</span>
              <span><b className="lg-eg">الشرح</b> للتثبيت</span>
            </div>
            <span>للحفظ PDF: زر الطباعة ← Save as PDF</span>
          </div>
          <div className="page-stage" style={{ width: PAPER_WIDTH * scale, height: PAPER_HEIGHT * scale }}>
            <div className="page-scale" style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}><CoverPage /></div>
          </div>
          {pages.map((page, index) => (
            <div className={`page-stage${index === pages.length - 1 ? ' final-stage' : ''}`} style={{ width: PAPER_WIDTH * scale, height: PAPER_HEIGHT * scale }} key={`page-${index + 2}`}>
              <div className="page-scale" style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}><ReadingPage page={page} number={index + 2} /></div>
            </div>
          ))}
          {auditIssue && <div className="layout-warning" dir="rtl">{auditIssue}</div>}
          <div className="reader-end" dir="rtl">
            <div className="end-badge">أحسنت</div>
            <p>خلصت الملزمة كاملة. راجع الجمل الإنجليزية قبل الامتحان — الترجمة والشرح هيأكدوا المعلومة.</p>
            <span>تمريضيانو.</span>
          </div>
        </main>

        {/* Same place in the document as the real pages, so the same CSS applies while measuring. */}
        <MeasurePage ref={measureRef} blocks={blocks} />
      </div>

      {slotsOpen && (
        <div className="export-overlay" role="dialog" aria-modal="true" aria-labelledby="slots-title" dir="rtl" onClick={() => setSlotsOpen(false)}>
          <div className="export-panel slots-panel" onClick={(event) => event.stopPropagation()}>
            <button className="guide-close" onClick={() => setSlotsOpen(false)} aria-label="إغلاق"><X size={18} /></button>
            <div className="export-icon"><ImagePlus size={24} /></div>
            <h3 id="slots-title">أماكن الصور الفارغة</h3>
            <p>ارفع كل صورة باسم الملف المكتوب في مجلد <code>public/images/</code> وهتظهر مكانها تلقائياً.</p>
            <ol className="slot-list">
              {imageSlots.map((slot) => (
                <li key={slot.file}>
                  <button className="slot-page" onClick={() => { setSlotsOpen(false); goToPage(slot.page); }}>
                    صفحة {String(slot.page).padStart(2, '0')}
                  </button>
                  <div className="slot-info">
                    <b>{slot.ar} <span>/ {slot.en}</span></b>
                    <p>{slot.need}</p>
                    <code>{slot.file}</code>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {guideOpen && (
        <div className="export-overlay" role="dialog" aria-modal="true" aria-labelledby="print-guide-title" dir="rtl" onClick={() => setGuideOpen(false)}>
          <div className="export-panel print-guide" onClick={(event) => event.stopPropagation()}>
            <button className="guide-close" onClick={() => setGuideOpen(false)} aria-label="إغلاق"><X size={18} /></button>
            <div className="export-icon"><Printer size={24} /></div>
            <h3 id="print-guide-title">إعدادات الطباعة في Microsoft Edge</h3>
            <p>اضبط الإعدادات دي مرة واحدة عشان الملزمة تطلع زي الموقع بالظبط:</p>
            <ol className="guide-steps">
              <li><b>Printer / الطابعة</b><span>Save as PDF أو طابعتك</span></li>
              <li><b>Paper size / حجم الورق</b><span>A4</span></li>
              <li><b>Margins / الهوامش</b><span>None (بدون)</span></li>
              <li><b>Scale / المقاس</b><span>Default أو 100</span></li>
              <li><b>Background graphics</b><span>فعّلها ✓</span></li>
              <li><b>Headers and footers</b><span>اقفلها</span></li>
            </ol>
            <p className="guide-note">الإعدادات دي موجودة تحت «More settings / إعدادات أخرى».</p>
            <button className="guide-print" onClick={startPrint}><Printer size={17} />اطبع الآن</button>
          </div>
        </div>
      )}
    </div>
  );
}
