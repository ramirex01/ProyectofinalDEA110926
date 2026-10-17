import { useEffect, useState } from 'react';
import { ArrowUp, Menu, Waves, X } from 'lucide-react';
import Hero from './sections/Hero.jsx';
import Context from './sections/Context.jsx';
import Diagnosis from './sections/Diagnosis.jsx';
import Impacts from './sections/Impacts.jsx';
import Comparator from './sections/Comparator.jsx';
import Simulator from './sections/Simulator.jsx';
import Solutions from './sections/Solutions.jsx';
import Indicators from './sections/Indicators.jsx';
import References from './sections/References.jsx';

const links = [
  ['inicio', 'Inicio'], ['los-cobanos', 'Los Cóbanos'], ['diagnostico', 'Diagnóstico'],
  ['impactos', 'Impactos'], ['soluciones', 'Soluciones'], ['indicadores', 'Indicadores'],
  ['referencias', 'Referencias'],
];

export default function App() {
  const [active, setActive] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-90px 0px -55% 0px', threshold: [0, .2, .5] });
    links.forEach(([id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => {
    const onKey = event => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return <div className="site antialiased">
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header"><div className="container header-inner">
      <a href="#inicio" className="brand" onClick={() => setMenuOpen(false)} aria-label="Los Cóbanos, volver al inicio"><Waves size={25} aria-hidden="true" /><span>LOS CÓBANOS<small>Educación ambiental · UES</small></span></a>
      <nav className="desktop-nav" aria-label="Navegación principal">{links.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>
      <button className="mobile-menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div>{menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegación móvil">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>}</header>
    <main id="contenido"><Hero /><Context /><Diagnosis /><Impacts /><Comparator /><Simulator /><Solutions /><Indicators /><References /></main>
    {showTop && <a className="back-top" href="#inicio" aria-label="Volver al inicio"><ArrowUp size={20} /></a>}
  </div>;
}
