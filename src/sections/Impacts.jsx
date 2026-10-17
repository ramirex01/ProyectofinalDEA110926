import { useState } from 'react';
import { ArrowRight, Fish, Leaf, Network, Waves, Wind } from 'lucide-react';
import { External } from '../components/StoryUI.jsx';
import { sources } from '../data/content.js';

const relations = [
  { icon: Wind, cause: 'Desechos abandonados', effect: 'Acumulación en la costa', detail: 'AES identifica la contaminación provocada por visitantes entre las amenazas del área. El MARN documentó botellas, bolsas y latas en una jornada de 2021. No se conoce la procedencia de cada objeto.', refs: ['F2','F3'] },
  { icon: Fish, cause: 'Artes de pesca perdidas', effect: 'Enredos de fauna marina', detail: 'En 2021 el MARN retiró redes del fondo marino e informó del rescate de un pez globo atrapado en restos de red. La recuperación subacuática requiere equipos capacitados.', refs: ['F2'] },
  { icon: Leaf, cause: 'Gestión inadecuada', effect: 'Riesgos para ecosistemas', detail: 'El PNUMA describe el aporte de residuos terrestres mal gestionados a la basura marina. No contamos con una medición de esta vía para Los Cóbanos ni de pérdida coralina causada por residuos.', refs: ['F6','F7'] },
  { icon: Waves, cause: 'Viento y corrientes', effect: 'Transporte de residuos', detail: 'Los materiales pueden desplazarse tras su abandono. El MARN documentó que las artes de pesca perdidas pueden moverse con las corrientes; no se atribuye un origen exacto a cada residuo.', refs: ['F2'] },
];

export default function Impacts() {
  const [active, setActive] = useState(0);
  const selected = relations[active];
  const Icon = selected.icon;
  return <section id="impactos" className="section impacts-section"><div className="container"><div className="section-heading impacts-heading"><span className="eyebrow">03 / CAUSAS Y CONSECUENCIAS</span><h2>Una red de decisiones,<br /><em>efectos y riesgos.</em></h2><p>Selecciona una vía para explorar su relación con la costa. Distinguimos los hechos locales de efectos generales descritos por el PNUMA.</p></div><div className="impact-map"><div className="impact-nodes" aria-label="Seleccionar relación ambiental">{relations.map((item, index) => { const NodeIcon = item.icon; return <button key={item.cause} className={active === index ? 'active' : ''} aria-pressed={active === index} onClick={() => setActive(index)}><span className="node-icon"><NodeIcon size={23}/></span><span><small>VÍA 0{index + 1}</small><strong>{item.cause}</strong></span><ArrowRight size={18}/></button>; })}</div><div className="network-core" aria-hidden="true"><span className="network-ring"><Network size={50}/></span><span>COSTA · MAR · VIDA</span></div><article className="impact-detail" aria-live="polite"><span className="eyebrow">RELACIÓN 0{active + 1}</span><Icon size={38} aria-hidden="true" /><h3>{selected.effect}</h3><p>{selected.detail}</p><div>{selected.refs.map(id => <External key={id} href={sources.find(source => source.id === id).url}>Fuente [{id}]</External>)}</div></article></div><div className="impact-footnotes"><p><strong>Fauna y hábitats.</strong> Las redes pueden provocar enredos. El PNUMA describe riesgos generales de los plásticos para especies, corales y otros ecosistemas marinos. <External href={sources[5].url}>[F6]</External></p><p><strong>Pesca y turismo.</strong> La basura puede perjudicar el entorno y generar costos, pero estas fuentes no cuantifican pérdidas económicas locales en Los Cóbanos. Tampoco aportan mediciones locales de microplásticos. <External href={sources[5].url}>[F6]</External></p></div></div></section>;
}
