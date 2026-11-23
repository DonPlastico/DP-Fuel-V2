# ⛽ DP-Fuel V2

**DP-Fuel V2** es un sistema integral, moderno y altamente configurable de gestión de combustible y carga eléctrica para servidores de **FiveM**. Diseñado para ofrecer una experiencia inmersiva y realista, combina mecánicas diferenciadas para vehículos de combustión y eléctricos, una interfaz NUI interactiva con telemetría en tiempo real y modelos 3D personalizados.

<h1>Video</h1>
<a href="https://youtu.be/7zjxENVK18U">Video del Script</a>

<h1>Fotos</h1>

![image](https://github.com/user-attachments/assets/7fa7b5ba-1696-4dd7-a825-ff75d60de845)
![image](https://github.com/user-attachments/assets/9e973e4b-bd20-4247-bb64-9758b3e620c2)
![image](https://github.com/user-attachments/assets/375da72d-137d-4c8a-b646-bffb20f2825f)

<h2>Configuración facil de entender</h2>

![image](https://github.com/user-attachments/assets/a618a991-e365-49e4-839a-ac594c840bbb)
![image](https://github.com/user-attachments/assets/92e81c23-f2ff-4d76-98d5-b5fdd1549804)
![image](https://github.com/user-attachments/assets/bde1719c-f433-4413-af83-bdd904adf39c)
![image](https://github.com/user-attachments/assets/3e588621-55da-4d30-9133-0e6efea17d4f)

## ✨ Características Principales

* **⛽ Sistema Dual (Gasolina y Eléctrico):** Lógicas independientes para surtidores de combustible tradicional (`client_gas.lua`) y estaciones de carga eléctrica (`client_electric.lua`).
* **📊 Interfaz NUI Avanzada con Gráficos en Tiempo Real:** Panel visual dedicado para repostaje, carga eléctrica y monitorización de consumo mediante gráficos dinámicos (`chartjs-plugin-streaming`).
* **🛢️ Soporte para Bidones (Jerry Can):** Sistema completo para comprar, equipar y utilizar bidones de combustible de emergencia.
* **🔌 Props 3D Personalizados:** Incluye modelos optimizados en carpeta `stream` (`prop_electric_01` y `prop_eletricpistol`) para estaciones de carga y mangueras/pistolas eléctricas sin depender de recursos externos.
* **🌍 Soporte Multiidioma Completo (Lua + NUI):** Traducciones sincronizadas tanto en notificaciones/interacciones del juego como en la interfaz web en **7 idiomas**:
  * 🇪🇸 Español (`es`)
  * 🇬🇧 Inglés (`en`)
  * 🇩🇪 Alemán (`de`)
  * 🇫🇷 Francés (`fr`)
  * 🇯🇵 Japonés (`ja`)
  * 🇹🇷 Turco (`tr`)
  * 🇨🇳 Chino Simplificado (`zh-cn`)
* **⚙️ Altamente Configurable:** Control total desde `config.lua` sobre precios, velocidades de carga/repostaje, consumo por clase/modelo de vehículo, ubicaciones y blips.

## 📂 Estructura del Proyecto

```text
DP-Fuel-V2/
├── client/
│   ├── client.lua              # Lógica principal y gestión de consumo
│   ├── client_electric.lua     # Mecánicas de carga para vehículos eléctricos
│   ├── client_fuel_chart.lua   # Envío de datos y telemetría al gráfico NUI
│   ├── client_gas.lua          # Mecánicas de repostaje en gasolineras
│   └── client_refuel.lua       # Control general de mangueras, boquillas e interacción
├── server/
│   └── server.lua              # Validaciones, cobros, sincronización y compras
├── nui/
│   ├── ui.html                 # Estructura de la interfaz de usuario
│   ├── panel.js                # Lógica de interacción NUI y actualización de estados
│   ├── css/style.css           # Estilos visuales y diseño responsivo
│   ├── fonts/                  # Tipografía digital (Technology.woff)
│   ├── images/                 # Recursos gráficos (displays y bidón)
│   ├── lang/                   # Traducciones de la interfaz web (.js)
│   └── scripts/                # Librerías externas (Chart.js streaming)
├── lang/                       # Traducciones del lado cliente/servidor (.lua)
├── stream/                     # Modelos 3D (.ydr) y definiciones (.ytyp) eléctricos
├── config.lua                  # Archivo principal de configuración
├── fxmanifest.lua              # Manifiesto del recurso FiveM
└── version                     # Control de versión del script
```

## 🚀 Instalación

1. **Descarga** la última versión del recurso y extrae la carpeta.
2. Renombra la carpeta a `DP-Fuel-V2` (asegúrate de eliminar `-main` si lo descargaste desde GitHub).
3. Coloca la carpeta dentro del directorio `resources` de tu servidor de FiveM.
4. Abre tu archivo `server.cfg` y añade la siguiente línea:
   ```cfg
   ensure DP-Fuel-V2
   ```
5. Configura los parámetros a tu gusto en `config.lua` (framework, idioma, precios, sistema de llaves/interacción, etc.).
6. Reinicia tu servidor o ejecuta `refresh` y `ensure DP-Fuel-V2` en la consola.

## ⚙️ Configuración Rápida

Dentro de `config.lua` podrás personalizar aspectos clave del script:

* **Idioma:** Selecciona cualquiera de los idiomas incluidos (`es`, `en`, `de`, `fr`, `ja`, `tr`, `zh-cn`).
* **Economía y Precios:** Ajusta el coste por litro de combustible, el coste por kWh en cargadores eléctricos y el precio de compra/recarga de bidones.
* **Vehículos Eléctricos:** Define qué modelos utilizan batería eléctrica en lugar de gasolina.
* **Consumo:** Personaliza el gasto de combustible según las RPM, velocidad y clase de vehículo.
* **Estaciones:** Añade o edita coordenadas de gasolineras y puntos de carga eléctrica con sus respectivos props.

## 🔗 Exports Útiles (Integración con otros scripts)

Si necesitas consultar o modificar el nivel de combustible/batería desde otros scripts (como un HUD, concesionario o garaje), puedes utilizar los exports habituales del recurso:

```lua
-- Obtener el nivel actual de combustible/batería de un vehículo (0.0 - 100.0)
local fuel = exports['DP-Fuel-V2']:GetFuel(vehicle)

-- Establecer el nivel de combustible/batería de un vehículo
exports['DP-Fuel-V2']:SetFuel(vehicle, 100.0)
```

*(Nota: Verifica en `fxmanifest.lua` o `client.lua` los nombres exactos de los exports declarados si has realizado modificaciones personalizadas).*

## 🛠️ Requisitos y Compatibilidad

* **FiveM Artifact:** Versión actualizada recomendada (compatible con Lua 5.4).
* **Frameworks:** Diseñado para integrarse fácilmente con los principales frameworks de Roleplay (ESX, QBCore, Qbox o Standalone según configuración).

## 📄 Licencia y Créditos

Desarrollado para ofrecer una solución completa, visual y optimizada de combustible y carga eléctrica en FiveM.

Si encuentras algún error o deseas sugerir mejoras, no dudes en abrir un *Issue* o *Pull Request* en el repositorio.
