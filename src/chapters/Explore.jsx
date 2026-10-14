import { useState } from 'react';
import { ArrowRight, Fish, Leaf, Waves } from 'lucide-react';
import { ChapterIntro, External, PhotoCredit } from '../components/StoryUI.jsx';
import { sources } from '../data/content.js';

const points = [
  { title: 'La costa', tag: 'ZONA DE ENCUENTRO', icon: Waves, position: 'coast', text: 'Las playas son espacios de visita, pesca y actividad local. Las jornadas de limpieza han documentado botellas, bolsas, latas y otros residuos en sectores concretos del complejo.', source: 'F2' },
  { title: 'El manglar', tag: 'HÁBITAT COSTERO', icon: Leaf, position: 'mangrove', text: 'El MARN reportó residuos en la zona costera y de manglar durante la jornada de febrero de 2021. Evitar que los desechos lleguen a estos espacios ayuda a proteger sus funciones ecológicas.', source: 'F2' },
  { title: 'El fondo marino', tag: 'BAJO LA SUPERFICIE', icon: Fish, position: 'seabed', text: 'Buzos retiraron redes abandonadas en 2021. En la inspección de marzo de 2026 se extrajeron 25 libras de basura subacuática y no se encontraron redes fantasmas.', source: 'F4', extra: 'F2' },
  { title: 'Los arrecifes', tag: 'VIDA MARINA', icon: Waves, position: 'reef', text: 'Los Cóbanos alberga arrecifes coralinos. El PNUMA describe riesgos de los plásticos para ecosistemas marinos; no hay un porcentaje local de pérdida coralina atribuible a residuos.', source: 'F1' },
];

export default function Explore({ goTo }) {
  const [active, setActive] = useState(0);
  const point = points[active];
  const Icon = point.icon;
  const source = sources.find(item => item.id === point.source);
  return <section className="story-chapter explore-chapter layout-width"><ChapterIntro number="02" eyebrow="EXPLORA" title="Un ecosistema, muchas conexiones">El Complejo Los Cóbanos es un área natural protegida y sitio Ramsar en la costa de Sonsonate. Selecciona una zona para explorar su relación con el problema de los residuos.</ChapterIntro>
    <div className="explore-stage"><div className="explore-image"><img src={`${import.meta.env.BASE_URL}images/los-cobanos-2026.jpg`} alt="Fotografía de la playa de Los Cóbanos en 2026" loading="lazy" /><span className="image-disclaimer">Puntos conceptuales · no son ubicaciones medidas en la fotografía</span>{points.map((item, index) => <button type="button" key={item.title} className={`hotspot hotspot-${item.position} ${active === index ? 'active' : ''}`} aria-label={`Explorar ${item.title}`} aria-pressed={active === index} onClick={() => setActive(index)}><span>{index + 1}</span></button>)}<PhotoCredit photo="recent" /></div><aside className="explore-panel" aria-live="polite"><span className="micro-label">0{active + 1} / 04 · {point.tag}</span><Icon size={38} aria-hidden="true" /><h2>{point.title}</h2><p>{point.text}</p><External href={source.url} className="panel-source">Leer la fuente {source.id}</External>{point.extra && <External href={sources.find(item => item.id === point.extra).url} className="panel-source">Leer la fuente {point.extra}</External>}<div className="point-tabs" aria-label="Seleccionar zona">{points.map((item, index) => <button key={item.title} className={index === active ? 'active' : ''} aria-label={item.title} aria-pressed={active === index} onClick={() => setActive(index)}>{String(index + 1).padStart(2, '0')}</button>)}</div></aside></div>
    <div className="chapter-aside"><p><strong>Por qué importa:</strong> estos ambientes sostienen refugio, alimentación o reproducción de especies marinas y actividades como la pesca y el turismo. La prevención de residuos protege esa relación ecológica y social. <External href={sources[0].url}>Plan de manejo MARN</External> <External href={sources[4].url}>Misión Océano</External></p><button onClick={() => goTo(2)}>Comprender el problema <ArrowRight size={18} /></button></div>
  </section>;
}
