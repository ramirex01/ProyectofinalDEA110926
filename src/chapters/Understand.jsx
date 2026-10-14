import { useState } from 'react';
import { ArrowRight, GitBranch, MoveHorizontal, ShieldCheck } from 'lucide-react';
import { ChapterIntro, External } from '../components/StoryUI.jsx';
import { events, sources } from '../data/content.js';

const relations = [
  { cause: 'Desechos abandonados', effect: 'Residuos en la playa y manglar', detail: 'AES identifica residuos dejados por visitantes como una amenaza. El MARN documentó botellas, bolsas y latas en una jornada de 2021. No se conoce la procedencia de cada objeto.', source: 'F2', extra: 'F3' },
  { cause: 'Artes de pesca perdidas', effect: 'Enredos de fauna marina', detail: 'En 2021, el MARN retiró redes del fondo marino y reportó el rescate de un pez globo atrapado en restos de red. Su recuperación requiere equipos preparados.', source: 'F2' },
  { cause: 'Residuos mal gestionados', effect: 'Riesgos para hábitats y actividades', detail: 'El PNUMA describe efectos generales sobre especies, corales, pesca y turismo. No existe en estas fuentes una medición local de pérdida coralina ni económica causada por basura en Los Cóbanos.', source: 'F6' },
  { cause: 'Transporte por viento y corrientes', effect: 'Acumulación en zonas costeras', detail: 'Los materiales pueden desplazarse después de ser abandonados. El MARN documentó el movimiento de artes de pesca por las corrientes; no se atribuye a cada residuo un origen exacto.', source: 'F2' },
];

export default function Understand({ goTo }) {
  const [compare, setCompare] = useState(52);
  const [active, setActive] = useState(0);
  const relation = relations[active];
  const source = sources.find(item => item.id === relation.source);
  return <section className="story-chapter understand-chapter layout-width"><ChapterIntro number="03" eyebrow="COMPRENDE" title="Lo que encontramos. Lo que podemos prevenir.">Tres jornadas documentan residuos en lugares y momentos concretos. El resto de este capítulo separa esos hechos de los riesgos generales y de los escenarios educativos.</ChapterIntro>
    <div className="evidence-strip" aria-label="Jornadas documentadas">{events.map(event => <article key={event.year}><span className="micro-label">{event.place}</span><strong>{event.title}</strong><p>{event.date} de {event.year} · {event.description}</p><External href={event.url}>Fuente {event.source}</External></article>)}</div>
    <div className="evidence-guard"><ShieldCheck size={23}/><p>Las cifras de estas jornadas no se suman ni representan la generación diaria o anual de residuos en todo Los Cóbanos. En marzo de 2026 no se encontraron redes fantasmas durante esa inspección.</p></div>
    <div className="story-divider"><span>ESCENARIOS ILUSTRATIVOS</span><MoveHorizontal size={24}/></div>
    <div className="compare-layout"><div><span className="micro-label">COMPARADOR EDUCATIVO</span><h2>La diferencia empieza antes de llegar a la playa.</h2><p>Mueve el control para comparar dos decisiones posibles. La visualización es conceptual: no reproduce una medición ni una fotografía de contaminación local.</p><label htmlFor="compare-slider">Explorar escenario: {compare < 50 ? 'sin prevención' : 'con prevención'}</label><input id="compare-slider" type="range" min="0" max="100" value={compare} onChange={event => setCompare(Number(event.target.value))} /></div><div className="compare-visual" style={{ '--split': `${compare}%` }}><div className="compare-without"><span>SI SE ABANDONAN RESIDUOS</span><p>Puede aumentar el contacto de desechos con la costa y la vida marina.</p></div><div className="compare-with"><span>SI SE PREVIENE SU LLEGADA</span><p>Reducir desechables, reutilizar y gestionar los residuos evita nuevas acumulaciones.</p></div><div className="compare-line" aria-hidden="true" /></div></div>
    <div className="relations-layout"><div className="relations-heading"><GitBranch size={28}/><span className="micro-label">MAPA DE RELACIONES</span><h2>De una causa a un posible efecto</h2><p>Selecciona una relación para leer la evidencia y sus límites.</p></div><div className="relation-list" aria-label="Relaciones entre causas y efectos">{relations.map((item,index) => <button key={item.cause} aria-pressed={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)}><span>{item.cause}</span><ArrowRight size={17}/><strong>{item.effect}</strong></button>)}</div><article className="relation-detail" aria-live="polite"><span className="micro-label">RELACIÓN 0{active + 1}</span><h3>{relation.effect}</h3><p>{relation.detail}</p><External href={source.url}>Fuente {source.id}</External>{relation.extra && <External href={sources.find(item => item.id === relation.extra).url}>Fuente {relation.extra}</External>}</article></div>
    <div className="academic-note"><h3>Alcance de la evidencia</h3><p>Los plásticos pueden persistir y fragmentarse en el ambiente. El PNUMA documenta este problema a escala global. Las fuentes consultadas no incluyen mediciones de microplásticos en Los Cóbanos ni cifras locales de pérdidas económicas por residuos. <External href={sources[5].url}>Informe PNUMA</External> · <External href="https://www.unep.org/interactives/pollution-to-solution/?lang=ES">Reportaje interactivo en español</External></p></div>
    <button className="chapter-inline-next" onClick={() => goTo(3)}>Poner a prueba las decisiones <ArrowRight size={18}/></button>
  </section>;
}
