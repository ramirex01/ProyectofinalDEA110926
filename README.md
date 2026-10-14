# Los Cóbanos: proteger la costa comienza con nuestros residuos

Sitio educativo sobre la contaminación por residuos sólidos en Los Cóbanos, Sonsonate, y alternativas de prevención. Proyecto académico de la asignatura **Educación Ambiental y Cambio Climático** de la Universidad de El Salvador (2026). El sitio no representa una comunicación oficial de la UES ni un estudio de campo propio.

## Tecnologías

- React 18 para componentes e interactividad.
- Vite 5 para desarrollo y compilación.
- Tailwind CSS 3, PostCSS y CSS para la interfaz responsive.
- `lucide-react` para iconografía.

## Desarrollo local

Requiere Node.js 20 o compatible.

```bash
npm ci
npm run dev
```

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

## Organización

- `src/App.jsx`: secciones, navegación y cuestionario.
- `src/data/content.js`: jornadas documentadas, bibliografía y preguntas.
- `src/index.css`: diseño responsive y estados de interacción.
- `public/images/los-cobanos.jpg`: fotografía de portada con licencia abierta.
- `.github/workflows/deploy.yml`: publicación mediante GitHub Actions.

## Rigor académico y fotografía

El contenido procede del paquete de investigación suministrado para este proyecto. Las cifras de 2021, 2025 y 2026 corresponden a jornadas y lugares específicos; no se usan como total anual ni como tendencia de contaminación. Los riesgos generales del PNUMA se distinguen de las observaciones locales. Las tres alternativas y sus indicadores son propuestas por implementar. Las referencias se muestran al final de la página.

Fotografía: «Playa Los Cóbanos» (2020), **Pollito03**, [ficha original](https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). El archivo descargado no se modificó; la imagen se visualiza recortada en la portada mediante CSS. Las fotografías de MARN, AES y prensa se consultan en sus publicaciones originales y no se reproducen aquí.

## GitHub Pages

`vite.config.js` ya establece `base: '/ProyectofinalDEA110926/'`, correspondiente al nombre del repositorio. Al integrar los cambios en `main`, el flujo de GitHub Actions instala dependencias con `npm ci`, compila con `npm run build` y publica `dist`. En **Settings → Pages**, seleccionar **GitHub Actions** como fuente. La dirección esperada es `https://ramirex01.github.io/ProyectofinalDEA110926/` una vez que el despliegue termine correctamente.
