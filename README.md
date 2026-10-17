# Los Cóbanos — Una costa que necesita nuestra atención

Landing page educativa sobre la contaminación por residuos sólidos en Los Cóbanos, Sonsonate, y alternativas de prevención. Proyecto académico de Educación Ambiental y Cambio Climático de la Universidad de El Salvador (2026). Es una síntesis de fuentes publicadas, no una investigación de campo propia ni una comunicación oficial de la UES.

## Contenido y experiencia

La página tiene navegación por anclas y desplazamiento natural: **Inicio, Los Cóbanos, Diagnóstico, Impactos, Soluciones, Indicadores y Referencias**. También incluye un comparador visual y un simulador educativo. El menú móvil, los controles interactivos y el botón para volver al inicio funcionan con teclado y toque.

El enlace anterior con `#descubre` sigue abriendo la portada del sitio.

Las cifras de 2021, 2025 y 2026 corresponden a jornadas y lugares concretos; no se suman ni se extrapolan. Los efectos generales descritos por el PNUMA se distinguen de la evidencia local. Las metas e indicadores son propuestas por implementar, no logros obtenidos.

El comparador presenta **dos ilustraciones educativas generadas para este sitio** y rotuladas como tales. No son fotografías documentales de Los Cóbanos. Las ilustraciones se optimizaron como WebP para reducir su tamaño de descarga.

## Tecnologías

- React 18 y Vite 5.
- Tailwind CSS 3 y CSS para el diseño responsive.
- `lucide-react` para iconografía.
- Sin backend, analítica ni almacenamiento de compromisos personales.

## Estructura

- `src/App.jsx`: menú, sección activa y estructura general.
- `src/sections/`: secciones académicas y experiencias interactivas.
- `src/components/StoryUI.jsx`: enlaces y créditos compartidos.
- `src/data/content.js`: jornadas, cuestionario y ocho fuentes bibliográficas.
- `public/images/`: fotografías acreditadas e ilustraciones educativas.

## Ejecutar

Requiere Node.js 20 o compatible.

En Windows, haga doble clic en `iniciar-sitio.bat`. El script verifica Node.js y npm, instala las dependencias si faltan, valida la compilación e inicia el servidor en <http://127.0.0.1:5173/ProyectofinalDEA110926/>. Mantenga abierta la ventana del servidor durante la vista local.

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages

`.github/workflows/deploy.yml` publica automáticamente la compilación de `main`. `vite.config.js` mantiene `base: '/ProyectofinalDEA110926/'`. La fuente de Pages debe ser **GitHub Actions**. URL pública: <https://ramirex01.github.io/ProyectofinalDEA110926/>.

## Fotografías y licencias

- [«Playa Los Cóbanos» (2020), Pollito03](https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos.jpg), CC BY-SA 4.0.
- [«Playa Los Cóbanos 2026», Bubulina26](https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos_2026.jpg), CC BY-SA 4.0.

Los archivos fotográficos se conservan sin editar y se visualizan con recortes CSS. Los créditos y enlaces a la licencia están visibles en la página. Las fotografías de MARN, AES y La Prensa Gráfica no se reproducen; se enlazan sus publicaciones originales. Las ocho referencias figuran al final de la página.

**Prompts de las ilustraciones:** se generó primero una ilustración editorial apaisada de una playa rocosa genérica del Pacífico salvadoreño, sin personas ni residuos, para representar la prevención. La segunda se editó a partir de la primera, conservando encuadre, costa, rocas, vegetación, luz y estilo, y añadiendo botellas, empaques, latas y un fragmento de red en la arena. Se usó el generador de imágenes integrado de Codex y después se convirtió cada PNG a WebP sin alterar el contenido visual.
