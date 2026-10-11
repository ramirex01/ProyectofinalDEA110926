import React from 'react';
import { ArrowRight, BookOpen, CalendarDays, ChartNoAxesCombined, CheckCircle2, ChevronRight, ClipboardList, FolderOpen, GraduationCap, Lightbulb, Menu, NotebookPen, School, Search, ShieldCheck, Sparkles, X } from 'lucide-react';
import { areas, studentInfo } from '../data/portfolioData.js';

export const icons = { Sparkles, School, ChartNoAxesCombined, NotebookPen, Lightbulb, FolderOpen, CalendarDays, ClipboardList, BookOpen, GraduationCap };

export function StatusBadge({ state }) {
  const tone = state === 'Documentada' || state === 'Completado' ? 'ready' : state === 'Pendiente' || state === 'Registro pendiente' ? 'pending' : 'progress';
  return <span className={`status status--${tone}`}>{state}</span>;
}

export function Navbar({ current, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  const go = (id) => { onNavigate(id); setOpen(false); };
  return <header className="site-header">
    <div className="nav-inner">
      <button className="brand" onClick={() => go('inicio')} aria-label="Ir al inicio"><span className="brand-mark">UES</span><span><strong>Portafolio DDP1109</strong><small>Mario Elmer Ramírez Grande</small></span></button>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {areas.map(a => <button key={a.id} className={current === a.id ? 'nav-link active' : 'nav-link'} onClick={() => go(a.id)}>{a.label}</button>)}
      </nav>
      <div className="nav-actions"><button className={current === 'explorador' ? 'explorer-link active' : 'explorer-link'} onClick={() => go('explorador')}><ClipboardList size={16}/> 14 apartados</button><button className="mobile-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div>
    </div>
    {open && <nav className="mobile-nav" aria-label="Navegación móvil">{areas.map(a => <button key={a.id} onClick={() => go(a.id)}>{a.label}<ChevronRight size={16}/></button>)}<button onClick={() => go('explorador')}>Explorador de 14 apartados<ChevronRight size={16}/></button></nav>}
  </header>;
}

export function PageIntro({ eyebrow, title, description, children }) {
  return <div className="page-intro"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{children}</div>;
}

export function AreaCard({ area, onNavigate }) {
  const Icon = icons[area.icon];
  return <button className="area-card" onClick={() => onNavigate(area.id)}><span className="area-card__top"><span className="icon-box"><Icon size={22}/></span><span className="area-range">APARTADOS {area.range}</span></span><strong>{area.label}</strong><span>{area.description}</span><span className="area-card__bottom">Explorar área <ArrowRight size={16}/></span></button>;
}

export function SectionCard({ section, onNavigate }) {
  return <button className="section-card" onClick={() => onNavigate(section.area)}><span className="section-card__top"><span className="section-number">{String(section.id).padStart(2, '0')}</span><StatusBadge state={section.state}/></span><strong>{section.title}</strong><span className="section-detail">{section.detail}</span><span className="section-card__bottom">Abrir área <ArrowRight size={16}/></span></button>;
}

export function Tabs({ items, active, onChange, label }) {
  return <div className="tabs" role="tablist" aria-label={label}>{items.map(item => <button key={item.id} role="tab" aria-selected={active === item.id} className={active === item.id ? 'tab active' : 'tab'} onClick={() => onChange(item.id)}>{item.label}</button>)}</div>;
}

export function Placeholder({ title, children }) {
  return <div className="placeholder"><span className="icon-box"><FolderOpen size={20}/></span><div><strong>{title}</strong><p>{children}</p></div></div>;
}

export function Footer({ onNavigate }) {
  return <footer className="footer"><div className="footer-grid"><div><strong className="footer-brand">UES <span>·</span> {studentInfo.university}</strong><p>{studentInfo.faculty}<br/>{studentInfo.career}<br/>{studentInfo.subject} ({studentInfo.subjectCode})</p></div><div><strong>Centro de práctica</strong><p>{studentInfo.practiceCenter}<br/>Segundo año de bachillerato · Modalidad Flexible<br/>Tutora escolar: {studentInfo.schoolTutor}</p></div><div><strong>Acceso rápido</strong><button onClick={() => onNavigate('explorador')}>Explorar los 14 apartados <ArrowRight size={14}/></button><button onClick={() => onNavigate('practica')}>Ver las jornadas <ArrowRight size={14}/></button></div></div><div className="footer-bottom"><span>Portafolio académico personal · Ciclo {studentInfo.cycle}</span><span>Contenido documentado y marcadores de pendientes</span></div></footer>;
}

export { ArrowRight, CalendarDays, ChartNoAxesCombined, CheckCircle2, ClipboardList, FolderOpen, GraduationCap, Lightbulb, Search, ShieldCheck, Sparkles };
