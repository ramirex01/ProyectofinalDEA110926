# Los Cóbanos — Una costa que necesita nuestra atención

Sitio académico multipágina sobre la contaminación por residuos sólidos en Los Cóbanos, Sonsonate, y alternativas de prevención desde la educación ambiental. Es una síntesis de publicaciones verificables para la asignatura Educación Ambiental y Cambio Climático de la Universidad de El Salvador (2026). No presenta investigación de campo propia ni representa una comunicación oficial de la UES.

**Integrantes:** Valery Crisela Zelaya León y Mario Elmer Ramírez Grande.

## Recorrido

| Página             | Contenido                                                                          |
| ------------------ | ---------------------------------------------------------------------------------- |
| `index.html`       | Portada, evidencia local destacada y acceso a las demás vistas.                    |
| `diagnostico.html` | Territorio, importancia ecológica, tres jornadas documentadas y nota metodológica. |
| `impactos.html`    | Causas y consecuencias explorables mediante pestañas.                              |
| `soluciones.html`  | Acciones por público, tres propuestas desplegables e indicadores por implementar.  |
| `aprende.html`     | Comparador, simulador, compromisos y cuestionario con retroalimentación.           |
| `referencias.html` | Ocho fuentes, licencias, créditos y carácter académico.                            |

Las cifras de 2021, 2025 y 2026 corresponden a jornadas y lugares concretos: no se suman ni extrapolan. Los efectos generales descritos por el PNUMA se distinguen de la evidencia local. Las metas e indicadores son propuestas, no resultados obtenidos. Las dos imágenes del comparador son ilustraciones educativas generadas para este sitio, no fotografías documentales.

## Tecnologías y archivos

- React 18 para los componentes e interacciones compartidas entre páginas.
- Vite 5 para compilar los seis documentos HTML con `base: '/ProyectofinalDEA110926/'`.
- Tailwind CSS 3 y `css/styles.css` para los estilos adaptables; `lucide-react` para iconos.
- `js/main.js` monta la página indicada por cada HTML; `src/PageApp.jsx` comparte navegación y pie.
- `src/pages/` contiene las seis vistas; `src/data/content.js` conserva jornadas, preguntas y bibliografía; `src/data/experience.js` agrupa el contenido de las interacciones.
- `public/assets/imagenes/` contiene las fotografías con licencia y las ilustraciones educativas. Vite las copia a `dist/assets/imagenes/`.
- No hay backend, analítica ni almacenamiento de compromisos personales.

La versión de una sola página sigue disponible en el historial de Git anterior a esta rama. El [mapa de contenido](docs/mapa-contenido.md) registra el destino de cada sección.

## Ejecución local

Requiere Node.js 20 o posterior. En Windows, `iniciar-sitio.bat` verifica Node.js, npm, dependencias y compilación, y levanta Vite en <http://127.0.0.1:5173/ProyectofinalDEA110926/>. Mantenga abierta la ventana del servidor.

```bash
npm ci
npm run dev
npm run build
npm run check
npm run preview
```

## GitHub Pages

`.github/workflows/deploy.yml` publica la compilación de `main` mediante GitHub Actions. La propiedad `base` de Vite coincide con el nombre del repositorio. URL pública: <https://ramirex01.github.io/ProyectofinalDEA110926/>.

## Fotografías y licencias

- [«Playa Los Cóbanos» (2020), Pollito03](https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos.jpg), CC BY-SA 4.0.
- [«Playa Los Cóbanos 2026», Bubulina26](https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos_2026.jpg), CC BY-SA 4.0.

Los archivos fotográficos se conservan sin editar y se visualizan con recortes CSS. Sus créditos y licencias figuran en el sitio. Las imágenes de MARN, AES y La Prensa Gráfica no se reproducen: sus publicaciones originales están enlazadas.

Las dos ilustraciones del comparador se generaron con el generador de imágenes integrado de Codex. Primero se creó una playa rocosa genérica del Pacífico salvadoreño, sin residuos, como representación de prevención; después se editó una copia con botellas, empaques, latas y un fragmento de red, manteniendo encuadre, rocas, vegetación, luz y estilo. Ambos archivos se optimizaron como WebP.
