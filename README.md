# Los Cóbanos — Una costa que necesita nuestra atención

Experiencia educativa interactiva sobre la contaminación por residuos sólidos en Los Cóbanos, Sonsonate, y alternativas de prevención. Trabajo académico de Educación Ambiental y Cambio Climático de la Universidad de El Salvador (2026). Es una síntesis de fuentes publicadas, **no** un estudio de campo ni una comunicación oficial de la UES.

## Experiencia

El sitio se recorre por cinco capítulos: **Descubre**, **Explora**, **Comprende**, **Decide** y **Actúa**. Incluye una portada fotográfica, puntos conceptuales sobre el ecosistema, jornadas documentadas, un comparador de escenarios ilustrativos, un mapa interactivo de relaciones, una simulación de decisiones, acciones por público, compromisos locales y referencias.

Se puede avanzar con los controles inferior y superior, el menú, `Alt + ← / →` o un gesto horizontal en móvil. El botón **Saltar animaciones** desactiva las transiciones, y el sitio también respeta `prefers-reduced-motion`.

Las cifras citadas pertenecen exclusivamente a jornadas concretas de 2021, 2025 y 2026. El comparador y la simulación están rotulados como recursos educativos y no representan mediciones locales. Las metas e indicadores de las propuestas son futuros y no resultados obtenidos.

## Tecnologías y archivos

- React 18, Vite 5, Tailwind CSS 3 y CSS para la interfaz.
- `lucide-react` para iconografía; sin librerías de animación o 3D para mantener la carga ligera.
- `src/App.jsx`: navegación y controles globales.
- `src/chapters/`: cinco escenas interactivas.
- `src/components/StoryUI.jsx`: elementos compartidos y créditos.
- `src/data/content.js`: jornadas, preguntas y bibliografía.
- `public/images/`: fotografías reales con licencia abierta.

## Ejecutar

Requiere Node.js 20 o compatible.

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

## Publicación

El flujo `.github/workflows/deploy.yml` publica automáticamente la compilación de `main` en GitHub Pages. La propiedad de Vite `base: '/ProyectofinalDEA110926/'` coincide con el nombre del repositorio. GitHub Pages debe tener **GitHub Actions** como fuente de publicación. Sitio: <https://ramirex01.github.io/ProyectofinalDEA110926/>.

## Fotografía y fuentes

- [«Playa Los Cóbanos» (2020), Pollito03](https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos.jpg), CC BY-SA 4.0.
- [«Playa Los Cóbanos 2026», Bubulina26](https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos_2026.jpg), CC BY-SA 4.0.

Los archivos fotográficos se conservan sin editar y se visualizan con recortes de CSS. Los créditos y enlaces a las licencias figuran en la interfaz. Las fotografías de MARN, AES y La Prensa Gráfica no se reproducen: se enlazan las publicaciones originales. Las ocho referencias académicas aparecen al final de la experiencia.
