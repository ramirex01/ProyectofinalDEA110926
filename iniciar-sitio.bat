@echo off
setlocal
cd /d "%~dp0"

echo.
echo ================================================
echo  Los Cobanos - servidor local
echo ================================================
echo.

where node >nul 2>&1
if errorlevel 1 goto :missing_node
where npm >nul 2>&1
if errorlevel 1 goto :missing_node

if not exist "package.json" (
  echo ERROR: No se encontro package.json en esta carpeta.
  goto :failed
)
if not exist "package-lock.json" (
  echo ERROR: No se encontro package-lock.json.
  goto :failed
)

echo Node:
node --version
echo npm:
call npm --version
echo.

node -e "process.exit(Number(process.versions.node.split('.')[0]) >= 20 ? 0 : 1)"
if errorlevel 1 (
  echo ERROR: Se requiere Node.js 20 o una version posterior.
  goto :failed
)

curl.exe --silent --fail --max-time 2 --output NUL "http://127.0.0.1:5173/ProyectofinalDEA110926/" >nul 2>&1
if not errorlevel 1 (
  echo El sitio ya esta funcionando en http://127.0.0.1:5173/ProyectofinalDEA110926/
  exit /b 0
)

if not exist "node_modules\.bin\vite.cmd" (
  echo Faltan dependencias. Ejecutando npm ci...
  call npm ci
  if errorlevel 1 goto :install_failed
)

echo Validando compilacion, paginas e interacciones...
call npm run check
if errorlevel 1 goto :build_failed

echo.
echo Sitio listo. Deje esta ventana abierta mientras lo usa.
echo URL: http://127.0.0.1:5173/ProyectofinalDEA110926/
echo Para detenerlo, presione Ctrl+C.
echo.
call npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
if errorlevel 1 goto :server_failed
exit /b 0

:missing_node
echo ERROR: Node.js y npm deben estar instalados y disponibles en PATH.
echo Descargue Node.js LTS desde https://nodejs.org/ y vuelva a ejecutar este archivo.
goto :failed

:install_failed
echo ERROR: npm ci no pudo instalar las dependencias. Revise la conexion y los mensajes anteriores.
goto :failed

:build_failed
echo ERROR: La compilacion fallo. Revise los mensajes anteriores.
goto :failed

:server_failed
echo ERROR: Vite no pudo iniciar. Si el puerto 5173 esta ocupado, cierre el otro servidor.
goto :failed

:failed
echo.
pause
exit /b 1
