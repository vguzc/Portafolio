# Portafolio Personal y Pruebas Unitarias — React & Bootstrap

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![Jasmine](https://img.shields.io/badge/Jasmine-5.1-purple?logo=jasmine)
![Karma](https://img.shields.io/badge/Karma-Runner-green)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

Portafolio web personal desarrollado para la **Evaluación Formativa N° 2** de la asignatura **Desarrollo Fullstack II (DSY1104)** en **Duoc UC**.

El proyecto implementa una arquitectura modular basada en componentes de **React**, estilos responsivos y modernos con **Bootstrap 5**, carga dinámica de datos desde archivos **JSON**, y una suite completa de pruebas unitarias automatizadas con **Jasmine y Karma**, incluyendo reporte de cobertura de código.

---

## 🚀 Características Principales

1. **Introducción / Sobre Mí:**
   - Presentación personal con foto profesional optimizada (`alt` accesible).
   - Biografía breve, datos de contacto institucional y enlaces directos a GitHub y LinkedIn.
2. **Proyectos Interactivos (Mínimo 3):**
   - Tarjetas `Card` de Bootstrap personalizadas con imágenes, descripciones, etiquetas de tecnologías (`badges`) y enlaces a repositorios y demostraciones.
   - Datos cargados dinámicamente desde `public/data/proyectos.json`.
   - Filtro interactivo mediante estado de React (`Todos` vs `Solo Destacados`).
3. **Secciones de Noticias (2 Secciones Especializadas):**
   - **Sección 1:** *Ciberseguridad & Seguridad Web*.
   - **Sección 2:** *Desarrollo Frontend & Testing*.
   - Carga dinámica desde `public/data/noticias.json` mediante `useState` y `useEffect`.
4. **Formulario de Contacto:**
   - Formulario interactivo con componentes Bootstrap (`Form`, inputs, textarea, validaciones de email y campos requeridos).
   - Manejo de estados y alertas de confirmación accesibles.
5. **Pruebas Unitarias (Jasmine + Karma):**
   - 16 casos de prueba unitarios cubriendo componentes críticos, manipulación del DOM, eventos de usuario y mocks de datos.
   - Generación de informe de cobertura mediante `karma-coverage`.
6. **Accesibilidad & Rendimiento:**
   - Cumplimiento de estándares WCAG (navegabilidad por teclado, contraste, atributos ARIA y textos alternativos).

---

## 📁 Estructura del Proyecto

```plaintext
Portafolio/
│
├── public/
│   ├── index.html                  # Plantilla HTML con metadatos y accesibilidad
│   └── data/
│       ├── proyectos.json          # Datos dinámicos de proyectos
│       └── noticias.json           # Datos dinámicos de noticias (2 secciones)
│
├── src/
│   ├── components/
│   │   ├── Navbar/                 # Barra de navegación Bootstrap responsiva
│   │   ├── Hero/                   # Sección Sobre Mí y presentación
│   │   ├── Projects/               # Contenedor y tarjetas de proyectos
│   │   ├── News/                   # Dos secciones dinámicas de noticias
│   │   ├── Contact/                # Formulario con validación y estados
│   │   └── Footer/                 # Pie de página y enlaces institucionales
│   │
│   ├── tests/                      # Pruebas unitarias Jasmine
│   │   ├── Hero.spec.jsx
│   │   ├── ProjectCard.spec.jsx
│   │   ├── Projects.spec.jsx
│   │   ├── News.spec.jsx
│   │   └── Contact.spec.jsx
│   │
│   ├── App.jsx                     # Componente raíz
│   ├── App.css                     # Estilos personalizados y variables
│   └── index.js                    # Entrada de React
│
├── karma.conf.js                   # Configuración del test runner Karma + Jasmine
├── webpack.config.js               # Empaquetador Webpack 5
├── Plan_de_Pruebas.md              # Documentación formal de pruebas (IE2.3.1)
├── package.json                    # Scripts y dependencias
└── README.md                       # Documentación principal
```

---

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- **Node.js** (v18 o superior)
- **NPM** (v9 o superior)
- Navegador Google Chrome (para ejecución de Karma Headless)

### 1. Clonar el repositorio
```bash
git clone https://github.com/Vguzc/portafolio.git
cd portafolio
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm start
```
La aplicación se abrirá en `http://localhost:3000`.

### 4. Compilar para producción (Build)
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.

---

## 🧪 Pruebas Unitarias y Cobertura

### Ejecutar las pruebas con Jasmine y Karma:
```bash
npm test
```

### Generar informe de cobertura de código:
```bash
npm run test:coverage
```
El reporte detallado en formato HTML se guardará en `coverage/html/index.html`. Puedes abrirlo en tu navegador para ver la cobertura por archivo y función.
