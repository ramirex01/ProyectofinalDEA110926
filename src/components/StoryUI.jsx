import { ExternalLink } from 'lucide-react';

export function External({ href, children, className = '' }) {
  return <a className={`external-link ${className}`} href={href} target="_blank" rel="noopener noreferrer">{children}<ExternalLink size={15} aria-hidden="true" /></a>;
}

export const photoCredits = {
  old: { label: '«Playa Los Cóbanos» (2020), Pollito03 · CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos.jpg' },
  recent: { label: '«Playa Los Cóbanos 2026», Bubulina26 · CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos_2026.jpg' },
};

export function PhotoCredit({ photo = 'old' }) {
  const credit = photoCredits[photo];
  return <small className="photo-credit">Fotografía real: <External href={credit.url}>{credit.label}</External> · <External href="https://creativecommons.org/licenses/by-sa/4.0/">Licencia</External>. Imagen visualizada con recorte; archivo original sin editar.</small>;
}
