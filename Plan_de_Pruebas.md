# Plan de Pruebas Unitarias — Portafolio Personal
**Asignatura:** Desarrollo Fullstack II (DSY1104)  
**Institución:** Duoc UC  
**Estudiante:** Vicente Guzmán (`vi.guzmanc@duocuc.cl`)  
**Framework de Pruebas:** Jasmine 5 + Karma Test Runner  

---

## 1. Objetivos del Proceso de Testeo
El objetivo principal es asegurar la robustez, accesibilidad, manejo de estado y renderizado dinámico del portafolio personal, validando:
- Correcta renderización de componentes principales e hijos.
- Paso y propagación adecuada de propiedades (`props`).
- Gestión eficiente de estados (`useState`) y efectos (`useEffect`).
- Manipulación del DOM y simulación de eventos de usuario (clicks, typing en inputs, envío de formularios).
- Aislamiento de datos externos mediante el uso de **Mocks** para simular la ingesta de JSON.
- Generación de métricas de cobertura de código (Statements, Branches, Functions, Lines) superiores al 80%.

---

## 2. Entorno y Configuración de Pruebas
- **Test Runner:** Karma (`karma-chrome-launcher`, `karma-webpack`, `karma-spec-reporter`).
- **Framework de Aserciones:** Jasmine Core (`jasmine-core`, `karma-jasmine`).
- **Navegador de Ejecución:** Chrome Headless (ejecución sin interfaz gráfica ni bloqueos de GPU).
- **Herramienta de Cobertura:** `karma-coverage` instrumentado con `babel-plugin-istanbul`.
- **Librería de Asistencia DOM:** `@testing-library/react` para interactuar con componentes simulando el comportamiento del usuario final.

---

## 3. Matriz de Casos de Prueba (Test Cases)

| Módulo / Componente | ID Caso | Descripción del Caso de Prueba | Entrada / Condición | Resultado Esperado | Criterio Pauta |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero (Sobre Mí)** | TC-01 | Renderizado del nombre por defecto | Componente sin props | Muestra encabezado H1 con "Vicente Guzmán" | IE2.1.1 / IE2.2.1 |
| **Hero (Sobre Mí)** | TC-02 | Propagación de propiedades personalizadas | `nombre="Pedro Pérez"`, etc. | H1 se actualiza con el nuevo nombre y datos | IE2.1.2 / IE2.2.1 |
| **Hero (Sobre Mí)** | TC-03 | Accesibilidad en imagen de avatar | Renderizado con `nombre` | Etiqueta `alt` descriptiva presente | IE2.1.3 / IE2.2.1 |
| **Hero (Sobre Mí)** | TC-04 | Enlaces a redes y contacto | Props con URL de GitHub y correo | Atributos `href` corresponden exactamente | IE2.1.2 / IE2.2.1 |
| **ProjectCard** | TC-05 | Renderizado de información del proyecto | Objeto Mock de proyecto | Muestra título, descripción e imagen | IE2.1.1 / IE2.2.1 |
| **ProjectCard** | TC-06 | Listado de tecnologías en badges | Array `tecnologias` | Renderiza cada badge individual | IE2.1.3 / IE2.2.1 |
| **ProjectCard** | TC-07 | Insignia de proyecto destacado | Prop `destacado={true}` | Renderiza badge visual de "Destacado" | IE2.1.2 / IE2.2.1 |
| **ProjectCard** | TC-08 | Enlaces externos y seguridad | Props `enlaceDemo` y `enlaceRepo` | Enlaces con `target="_blank"` | IE2.1.3 / IE2.2.1 |
| **Projects** | TC-09 | Renderizado con datos mock (JSON simulado) | Array de 2 proyectos mock | Muestra ambos proyectos en el DOM | IE2.3.1 / IE2.2.1 |
| **Projects** | TC-10 | Manejo de estado y filtro interactivo | Clic en "Solo Destacados" | DOM filtra y oculta proyectos no destacados | IE2.1.2 / IE2.2.1 |
| **News** | TC-11 | Renderizado de dos secciones obligatorias | Mock de noticias estructurado | Títulos "1. Ciberseguridad" y "2. Desarrollo" visibles | IE2.1.1 / IE2.2.1 |
| **News** | TC-12 | Despliegue de metadatos de artículos | Objeto Mock de noticias | Muestra autor, fecha y tiempo de lectura | IE2.1.2 / IE2.2.1 |
| **Contact** | TC-13 | Renderizado de campos de formulario | Componente inicial | Inputs `nombre`, `email`, `asunto`, `mensaje` en DOM | IE2.1.3 / IE2.2.1 |
| **Contact** | TC-14 | Validación de formulario vacío | Clic en submit sin llenar campos | Alerta de error visible en pantalla | IE2.1.2 / IE2.2.1 |
| **Contact** | TC-15 | Actualización de estado en inputs | Evento `change` en campos | `input.value` refleja los caracteres tipeados | IE2.1.2 / IE2.2.1 |
| **Contact** | TC-16 | Envío exitoso y reseteo de formulario | Clic en submit con datos válidos | Pantalla/alerta de éxito desplegada | IE2.1.2 / IE2.2.1 |
| **Terminal** | TC-17 | Renderizado de consola y línea de comandos | Montaje inicial | Muestra título `bash - root@vguzc:~` e input | IE2.1.1 / IE2.2.1 |
| **Terminal** | TC-18 | Procesamiento y respuesta de comandos | Ejecución de comando `help` | Output con comandos disponibles desplegado | IE2.1.2 / IE2.2.1 |
| **Terminal** | TC-19 | Ejecución mediante botones de acción rápida | Clic en botón `matrix` | Invoca callback y muestra respuesta en DOM | IE2.1.2 / IE2.2.1 |

---

## 4. Estrategia de Mocks y Simulación (IE2.3.1)
Para garantizar pruebas reproducibles y desacopladas del estado de la red o del servidor:
1. **Mocks de Proyectos (`mockProjectsList`)**: Estructura idéntica al archivo `proyectos.json` inyectada vía props `initialProjects`.
2. **Mocks de Noticias (`mockNewsData`)**: Objeto con dos arrays categorizados (`ciberseguridad` y `desarrolloWeb`) inyectado vía `initialNews`.
3. **Mocks de Eventos del DOM**: Disparo de eventos sintéticos (`fireEvent.change`, `fireEvent.click`) para simular la interacción humana con los componentes.

---

## 5. Reporte de Cobertura de Código (IE2.3.2)
La cobertura se calcula automáticamente mediante `karma-coverage` al ejecutar:
```bash
npm test
# O reporte ampliado con salida HTML
npm run test:coverage
```
El reporte HTML se genera en `coverage/html/index.html` e incluye:
- **Statements Coverage:** Cobertura de sentencias ejecutadas.
- **Branches Coverage:** Evaluación de bifurcaciones lógicas (`if/else`, operadores ternarios).
- **Functions Coverage:** Verificación de ejecución de métodos y manejadores de eventos.
- **Lines Coverage:** Porcentaje de líneas de código evaluadas.
