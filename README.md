# Sitio Web de Educación Ambiental y Cambio Climático · DEA1109

Trabajo final para la asignatura de Educación Ambiental y Cambio Climático de la Licenciatura en Informática Educativa (UES, Ciclo II-2026). Construido con React, Vite y Tailwind CSS como una plataforma interactiva para la concientización ambiental.

## 🚀 Ejecutar en Desarrollo Local o Codespaces

Para correr el entorno de desarrollo localmente o en tu Codespace, abre la terminal y ejecuta:

```bash
npm install
npm run dev
```

Para verificar y previsualizar la compilación de producción antes de subir cambios:

```bash
npm run build
npm run preview
```

## 🌍 Publicación en GitHub Pages

El proyecto utiliza GitHub Actions para automatizar su despliegue en la web tras cada envío a `main`.

1. Confirma que la propiedad `base` en tu archivo `vite.config.js` coincida exactamente con este nuevo repositorio:
   ```javascript
   base: '/ProyectofinalDEA110926/',
   ```
2. La URL pública de tu sitio web será: `https://github.io`
3. En **Settings → Pages** de este repositorio en GitHub, asegúrate de elegir **GitHub Actions** como la fuente de publicación (Source).

## 📋 Estructura y Requisitos del Proyecto (Rúbrica)

El sitio web está diseñado para cubrir de manera integral los siguientes componentes clave exigidos en la evaluación:
- **Problemática Ambiental Local:** Identificación de la problemática en la comunidad seleccionada de El Salvador, detallando sus causas principales y consecuencias ecológicas/sociales.
- **Propuestas de Solución:** Detalle didáctico de al menos 3 soluciones viables, pertinentes y fundamentadas desde la educación ambiental y la gestión ambiental.
- **Recursos Multimedia:** Integración de elementos interactivos, imágenes, videos o audios que favorezcan la comprensión del tema.
- **Fuentes de Consulta:** Sección dedicada a presentar al menos 2 referencias bibliográficas confiables redactadas bajo la normativa APA 7.
