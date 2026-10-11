import React from 'react';
import { Navbar, Footer } from './components/UI.jsx';
import { Home, Explorer, Context, Diagnosis, Practice, Reflection, Resources } from './pages/Pages.jsx';

const valid = new Set(['inicio','explorador','contexto','diagnostico','practica','reflexion','recursos']);
function fromHash() { const value = window.location.hash.replace('#/', ''); return valid.has(value) ? value : 'inicio'; }

export default function App() {
  const [current, setCurrent] = React.useState(fromHash);
  React.useEffect(() => { const update = () => setCurrent(fromHash()); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update); }, []);
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); document.title = `${current === 'inicio' ? 'Inicio' : current[0].toUpperCase()+current.slice(1)} | Portafolio DDP1109`; }, [current]);
  const navigate = id => { window.location.hash = `/${id}`; if (current === id) window.scrollTo({top:0,behavior:'smooth'}); };
  const pages = { inicio: Home, explorador: Explorer, contexto: Context, diagnostico: Diagnosis, practica: Practice, reflexion: Reflection, recursos: Resources };
  const Page = pages[current];
  return <><a className="skip-link" href="#main">Saltar al contenido</a><Navbar current={current} onNavigate={navigate}/><main id="main" key={current}><Page onNavigate={navigate}/></main><Footer onNavigate={navigate}/></>;
}
