# Portafolio Digital de Práctica Docente · DDP1109

Primera versión funcional del portafolio de Mario Elmer Ramírez Grande. Construida con React, Vite y Tailwind CSS, siguiendo la consigna y la rúbrica oficiales, con una adaptación visual de los diseños de Stitch compartidos por Mario.

## Ejecutar

```bash
npm install
npm run dev
```

Para verificar la versión publicable:

```bash
npm run build
npm run preview
```

Abre la ruta que imprime Vite. La configuración usa `base: '/ProyectoFinalDDP110926/'` para un proyecto de GitHub Pages publicado en `https://ramirex01.github.io/ProyectoFinalDDP110926/`. Si el nombre del repositorio cambia, actualiza `vite.config.js`.

## Publicar en GitHub Pages

1. Usar el repositorio `ramirex01/ProyectoFinalDDP110926` y subir los cambios a `main`.
2. En **Settings → Pages**, elegir **GitHub Actions** como fuente de publicación.
3. El flujo `.github/workflows/deploy.yml` compila y publica `dist` tras cada envío a `main`.
4. Revisar la URL pública y los permisos de cada evidencia antes de entregar el enlace en Moodle.

La primera publicación se realizó el 10 de octubre de 2026. El sitio anterior quedó conservado en la rama `respaldo-sitio-anterior-2026-10-10`.

## Editar el contenido

- `src/data/portfolioData.js`: identidad, seis áreas, 14 apartados, visitas y hallazgos agregados.
- `src/pages/Pages.jsx`: textos y composición de las páginas.
- `src/index.css`: estilos adaptados del sistema visual de Stitch.
- `public/calendario-practicas-2026.png`: calendario compartido por Mario.

Los apartados pendientes están rotulados. Las fuentes originales de campo **no se incluyen en la carpeta pública** porque pueden contener datos de terceros. La carpeta `legacy-site/` conserva la versión anterior del sitio para consulta. Las notas `NOTAS-ANALISIS-JORNADAS-1-4.md` registran diferencias que deben confirmarse antes de presentar afirmaciones más específicas.

## Cobertura inicial

Las cuatro pantallas pedidas son **Inicio**, **Explorador**, **Diagnóstico y planificación** y **Mi práctica docente**. Se incluyen también **Contexto**, **Reflexión y mejora** y **Recursos y anexos** para que los 14 apartados tengan una ruta navegable. Hay navegación móvil, filtros, pestañas y línea de tiempo. Los estados editoriales del explorador no representan calificaciones ni aprobación institucional.
