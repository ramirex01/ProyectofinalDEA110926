import { ArrowDown, ArrowRight, Waves } from 'lucide-react';
import { PhotoCredit } from '../components/StoryUI.jsx';

export default function Discover({ goTo }) {
  return <section className="discover-scene" aria-labelledby="chapter-title">
    <img className="discover-photo" src={`${import.meta.env.BASE_URL}images/los-cobanos.jpg`} alt="Costa del Área Natural Protegida Complejo Los Cóbanos" fetchPriority="high" />
    <div className="discover-shade" aria-hidden="true" />
    <div className="discover-content layout-width">
      <span className="micro-label light">01 / UNA HISTORIA SOBRE NUESTRA COSTA</span>
      <div className="discover-title-wrap"><Waves className="discover-mark" size={38} aria-hidden="true" /><h1 id="chapter-title" tabIndex="-1">Una costa que<br /><em>necesita nuestra</em><br />atención.</h1></div>
      <p>Los Cóbanos, Sonsonate. Un ecosistema marino-costero valioso y una pregunta urgente: ¿cómo impedimos que los residuos sólidos lleguen al mar?</p>
      <div className="discover-actions"><button className="primary-cta" onClick={() => goTo(1)}>Comenzar exploración <ArrowRight size={19} /></button><button className="ghost-cta" onClick={() => goTo(2)}>Ir al contenido académico <ArrowDown size={18} /></button></div>
      <div className="discover-bottom"><span>EDUCACIÓN AMBIENTAL Y CAMBIO CLIMÁTICO · UES · 2026</span><PhotoCredit /></div>
    </div>
  </section>;
}
