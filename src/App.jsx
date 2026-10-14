import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Menu, Waves, X } from 'lucide-react';
import Discover from './chapters/Discover.jsx';
import Explore from './chapters/Explore.jsx';
import Understand from './chapters/Understand.jsx';
import Decide from './chapters/Decide.jsx';
import Act from './chapters/Act.jsx';

const chapters = [
  { id: 'descubre', label: 'Descubre', Component: Discover },
  { id: 'explora', label: 'Explora', Component: Explore },
  { id: 'comprende', label: 'Comprende', Component: Understand },
  { id: 'decide', label: 'Decide', Component: Decide },
  { id: 'actua', label: 'Actúa', Component: Act },
];

function initialChapter() {
  const id = window.location.hash.replace('#', '');
  const found = chapters.findIndex(chapter => chapter.id === id);
  return found < 0 ? 0 : found;
}

export default function App() {
  const [current, setCurrent] = useState(initialChapter);
  const [menuOpen, setMenuOpen] = useState(false);
  const [skipMotion, setSkipMotion] = useState(false);
  const contentRef = useRef(null);
  const touchStart = useRef(null);
  const previousChapter = useRef(current);
  const { Component } = chapters[current];

  function goTo(index) {
    const next = Math.max(0, Math.min(chapters.length - 1, index));
    if (next === current) return;
    window.location.hash = chapters[next].id;
    setCurrent(next);
    setMenuOpen(false);
    contentRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  useEffect(() => {
    function onHash() { const next = initialChapter(); setCurrent(next); setMenuOpen(false); window.scrollTo(0, 0); }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => { document.title = `${chapters[current].label} | Los Cóbanos`; }, [current]);
  useEffect(() => {
    if (previousChapter.current !== current) document.getElementById('chapter-title')?.focus({ preventScroll: true });
    previousChapter.current = current;
  }, [current]);
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') { setMenuOpen(false); return; }
      if (!event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); goTo(current + 1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(current - 1); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current]);

  function onTouchStart(event) {
    if (event.target.closest('button, a, input')) { touchStart.current = null; return; }
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }
  function onTouchEnd(event) {
    if (!touchStart.current) return;
    const dx = event.changedTouches[0].clientX - touchStart.current.x;
    const dy = event.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 1.7) goTo(current + (dx < 0 ? 1 : -1));
    touchStart.current = null;
  }

  return <div className={`experience antialiased ${skipMotion ? 'no-motion' : ''}`}>
    <a className="skip-link" href="#main-content">Saltar al contenido</a>
    <header className="global-header"><div className="global-header-inner">
      <button className="brand" onClick={() => goTo(0)} aria-label="Volver a Descubre"><Waves size={25} /><span>LOS CÓBANOS<small>Una costa que necesita nuestra atención</small></span></button>
      <span className="header-chapter">{String(current + 1).padStart(2, '0')} / 05 · {chapters[current].label}</span>
      <div className="header-actions"><button className="motion-toggle" aria-pressed={skipMotion} onClick={() => setSkipMotion(!skipMotion)}>{skipMotion ? 'Activar transiciones' : 'Saltar animaciones'}</button><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="chapter-menu" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
    </div></header>
    {menuOpen && <nav id="chapter-menu" className="chapter-menu" aria-label="Capítulos"><div className="chapter-menu-inner"><span className="micro-label">EXPLORA LA HISTORIA</span>{chapters.map((chapter, index) => <button key={chapter.id} className={index === current ? 'active' : ''} aria-current={index === current ? 'page' : undefined} onClick={() => goTo(index)}><span>0{index + 1}</span>{chapter.label}<ArrowRight size={20} /></button>)}<p>Atajo de teclado: Alt + ← / → · En móvil, desliza horizontalmente para cambiar de capítulo.</p></div></nav>}
    <main id="main-content" ref={contentRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div key={chapters[current].id} className="chapter-enter"><Component goTo={goTo} /></div>
    </main>
    <nav className="chapter-controls" aria-label="Navegación de capítulos"><button onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Capítulo anterior"><ArrowLeft size={19} /><span>Anterior</span></button><div className="progress-track" role="progressbar" aria-label="Progreso de capítulos" aria-valuemin="1" aria-valuemax="5" aria-valuenow={current + 1}><span style={{ width: `${(current + 1) * 20}%` }} /></div><span className="progress-count">0{current + 1} / 05</span><button onClick={() => goTo(current + 1)} disabled={current === 4} aria-label="Capítulo siguiente"><span>Siguiente</span><ArrowRight size={19} /></button></nav>
  </div>;
}
