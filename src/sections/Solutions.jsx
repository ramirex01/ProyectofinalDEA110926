import { useState } from 'react';
import { ArrowRight, Leaf, Recycle, Users, Waves } from 'lucide-react';
import { External } from '../components/StoryUI.jsx';
import { sources } from '../data/content.js';

const audiences = [
  { label: 'Visitantes', icon: Waves, actions: ['Llevar botella reutilizable y evitar desechables innecesarios.', 'Guardar los residuos hasta encontrar un punto de recolección apropiado.', 'No dejar materiales en la arena ni en el agua.'] },
  { label: 'Comercios', icon: Recycle, actions: ['Reducir empaques de un solo uso.', 'Compartir mensajes claros con visitantes y clientes.', 'Coordinar el manejo de desechos con servicios competentes.'] },
  { label: 'Comunidad e instituciones', icon: Users, actions: ['Participar en actividades autorizadas y seguras.', 'Registrar los residuos encontrados con metodología transparente.', 'Comunicar situaciones de riesgo a las autoridades correspondientes.'] },
];

const proposals = [
  { number: '01', title: 'Educación ambiental', text: 'Señalización, charlas breves y materiales gráficos sobre especies y residuos, coordinados con comercios, centros educativos y autoridades.', refs: ['F2','F5','F7'] },
  { number: '02', title: 'Prevención y recolección', text: 'Piloto de reducción y separación de residuos únicamente donde exista una ruta efectiva de recolección y destino apropiado.', refs: ['F7','F8'] },
  { number: '03', title: 'Limpieza con registro', text: 'Jornadas coordinadas para clasificar y registrar residuos por fecha, sector y categoría. Redes subacuáticas y objetos peligrosos requieren personal capacitado.', refs: ['F2','F3','F4'] },
];

export default function Solutions() {
  const [active, setActive] = useState(0);
  const Icon = audiences[active].icon;
  return <section id="soluciones" className="section solutions-section"><div className="container"><div className="section-heading"><span className="eyebrow">06 / PREVENIR ES ACTUAR</span><h2>La solución comienza <em>antes de limpiar.</em></h2><p>Las acciones pueden empezar hoy. Las propuestas de intervención necesitan coordinación local y seguimiento.</p></div><div className="action-layout"><div className="action-selector" aria-label="Acciones por público">{audiences.map((group, index) => <button key={group.label} className={active === index ? 'active' : ''} aria-pressed={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span>{group.label}<ArrowRight size={18}/></button>)}</div><div className="action-panel" aria-live="polite"><Icon size={35}/><span className="eyebrow">ACCIONES PARA {audiences[active].label.toUpperCase()}</span><ul>{audiences[active].actions.map(action => <li key={action}>{action}</li>)}</ul></div></div><div className="proposals"><div className="proposals-intro"><Leaf size={30}/><span className="eyebrow">INTERVENCIÓN PROPUESTA</span><h3>Tres líneas de trabajo</h3><p>Son alternativas fundamentadas en las fuentes, no programas ya ejecutados por este proyecto.</p></div><div className="proposal-rows">{proposals.map(proposal => <details key={proposal.number}><summary><span>{proposal.number}</span><strong>{proposal.title}</strong><span className="proposal-plus" aria-hidden="true">+</span></summary><p>{proposal.text}</p><div>{proposal.refs.map(id => <External key={id} href={sources.find(source => source.id === id).url}>Fuente [{id}]</External>)}</div></details>)}</div></div></div></section>;
}
