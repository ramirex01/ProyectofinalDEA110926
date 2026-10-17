import { useState } from 'react';
import { ArrowUpRight, Fish, Leaf, Waves } from 'lucide-react';
import { External, PhotoCredit } from '../components/StoryUI.jsx';
import { sources } from '../data/content.js';

const facts = [
  { icon: Waves, label: 'Área protegida', text: 'El Complejo Los Cóbanos es un área natural protegida y sitio Ramsar de la costa de Sonsonate.' },
  { icon: Fish, label: 'Vida marina', text: 'Sus ecosistemas ofrecen refugio y espacios de alimentación o reproducción para especies marinas.' },
  { icon: Leaf, label: 'Vínculo social', text: 'La conservación del entorno se relaciona con actividades locales como la pesca y el turismo.' },
];

export default function Context() {
  const [selected, setSelected] = useState(0);
  const Icon = facts[selected].icon;
  return <section id="los-cobanos" className="section context-section"><div className="container"><div className="section-heading"><span className="eyebrow">01 / EL TERRITORIO</span><h2>Un ecosistema que conecta <em>mar, vida y comunidad.</em></h2></div><div className="context-grid"><figure className="context-photo"><img src={`${import.meta.env.BASE_URL}images/los-cobanos-2026.jpg`} alt="Vista de la playa de Los Cóbanos en 2026" loading="lazy" /><figcaption><PhotoCredit photo="recent" /></figcaption></figure><div className="context-copy"><span className="small-rule" /><p className="lead">Los Cóbanos se encuentra en la franja costera de Sonsonate. Sus arrecifes y ambientes marino-costeros hacen que prevenir residuos en playas y fondos marinos sea una tarea ambiental y social.</p><div className="context-tabs" aria-label="Aspectos del ecosistema">{facts.map((fact, index) => <button key={fact.label} className={selected === index ? 'active' : ''} aria-pressed={selected === index} onClick={() => setSelected(index)}>{fact.label}</button>)}</div><div className="context-fact" aria-live="polite"><Icon size={33} aria-hidden="true" /><div><strong>{facts[selected].label}</strong><p>{facts[selected].text}</p></div></div><div className="context-links"><External href={sources[0].url}>Plan de manejo del MARN</External><External href={sources[4].url}>Misión Océano <ArrowUpRight size={14} /></External></div></div></div></div></section>;
}
