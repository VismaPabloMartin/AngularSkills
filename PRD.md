# Product Requirements Document (PRD)

## AngularSkills - Portfolio Landing Page

---

### 📋 Información del Proyecto

**Nombre del Proyecto:** AngularSkills
**Tipo:** Landing Page Portfolio para Programador
**Framework:** Angular 19 + Tailwind CSS + NgRx
**Estado:** Iniciando desarrollo
**Fecha de Creación:** Mayo 2025

---

### 🎯 Objetivos del Proyecto

#### Objetivo Principal

Crear una landing page moderna, profesional y **altamente interactiva** que funcione como portfolio personal de un programador, utilizando Angular 19 para demostrar habilidades técnicas avanzadas, incluyendo la gestión de estado global con NgRx.

#### Objetivos Específicos

* Mostrar proyectos y experiencia profesional de manera atractiva y dinámica.
* Demostrar conocimientos técnicos avanzados en Angular, NgRx, arquitectura frontend y UX/UI moderno.
* Proporcionar información de contacto y enlaces profesionales.
* Crear una experiencia de usuario fluida y responsive, con soporte para modo oscuro.
* Optimizar para SEO, rendimiento y accesibilidad.
* Preparar la estructura para fácil mantenimiento y escalabilidad futura.

---

### 👥 Audiencia Objetivo

**Audiencia Primaria:**

* Reclutadores técnicos
* Managers de desarrollo
* Clientes potenciales para proyectos freelance

**Audiencia Secundaria:**

* Otros desarrolladores y comunidad técnica
* Visitantes que lleguen por referencias o redes sociales

---

### ✨ Características Principales

#### 1. Hero Section

* **Descripción:** Sección principal con introducción personal y llamada a la acción.
* **Elementos:**

  * Nombre y título profesional
  * Breve elevator pitch
  * Foto profesional
  * Botones destacados (Ver CV, Contacto)
  * Animaciones sutiles de entrada

#### 2. Sección Sobre Mí

* **Descripción:** Información personal y profesional detallada.
* **Elementos:**

  * Historia profesional resumida
  * Valores y enfoque de trabajo
  * Intereses personales relevantes
  * Años de experiencia

#### 3. Habilidades Técnicas

* **Descripción:** Visualización de tecnologías y herramientas.
* **Elementos:**

  * Lenguajes de programación
  * Frameworks/librerías
  * Herramientas de desarrollo
  * Barras de progreso o iconos
  * Categorización por tipo (Frontend, Backend, DevOps, etc.)

#### 4. Portfolio de Proyectos

* **Descripción:** Galería de proyectos destacados.
* **Elementos:**

  * Cards de proyectos con imágenes y descripción
  * Tecnologías utilizadas
  * Enlaces a GitHub/demo en vivo
  * Filtros por tecnología o tipo (gestionados con NgRx Store)
  * Modal con detalles expandidos
  * Animaciones de transición

#### 5. Experiencia Profesional

* **Descripción:** Timeline de experiencia laboral.
* **Elementos:**

  * Empresa, cargo y período
  * Descripción de responsabilidades
  * Logros destacados
  * Tecnologías utilizadas
  * Timeline vertical animado

#### 6. Testimonios/Recomendaciones

* **Descripción:** Feedback de clientes o colegas.
* **Elementos:**

  * Citas de recomendaciones
  * Nombre y cargo de quien recomienda
  * Empresa o contexto
  * Carousel/slider

#### 7. Blog Técnico (opcional pero recomendado)

* **Descripción:** Publicación de artículos técnicos, gestionado con NgRx.
* **Elementos:**

  * Lista de artículos con búsqueda y filtrado
  * Detalle de artículo
  * Gestión CRUD desde zona de admin

#### 8. Contacto

* **Descripción:** Información y formulario de contacto.
* **Elementos:**

  * Formulario reactivo y validado
  * Feedback visual al enviar
  * Enlaces a redes sociales profesionales
  * Email, teléfono, ubicación
  * Integración con servicio de email simulado

#### 9. Zona de Administración (Rutas Protegidas)

* **Descripción:** Área protegida por login simulado.
* **Elementos:**

  * Login/logout simulado
  * Gestión de proyectos, posts y testimonios (CRUD, todo gestionado en NgRx Store)
  * Feedback visual y animaciones en la UI

#### 10. Footer

* **Descripción:** Información y enlaces adicionales.
* **Elementos:**

  * Copyright
  * Enlaces rápidos
  * Redes sociales
  * Selector de idioma (opcional)

---

### 🛠️ Especificaciones Técnicas

#### Framework y Librerías

* **Angular 19** (última versión)
* **TypeScript 5.7+**
* **NgRx** (Store, Effects, Selectors, Actions) – *obligatorio* para estado global
* **Tailwind CSS** para estilos y diseño
* **Angular Animations** y **Framer Motion** (opcional) para animaciones UI

#### Arquitectura Angular

* **Standalone Components** (Angular 19)
* **Signals** para manejo de estado local/reactivo
* **Defer blocks** para lazy loading de secciones
* **NgOptimizedImage** para optimización de imágenes
* **OnPush** change detection strategy
* **Reactive Forms** en formularios de contacto y administración
* **Routing avanzado**: modular/lazy loading, rutas hijas, guards para zona protegida

#### Gestión de Estado

* **NgRx Store**

  * Proyectos, posts de blog, usuario autenticado, preferencias de UI, filtros, etc.
  * Utilización de Effects para manejo de side effects y lógica asíncrona simulada
  * Persistencia de estado relevante en localStorage

#### Datos y Servicios

* **Datos simulados (Mock Data)**

  * Proyectos, experiencia, habilidades, testimonios, posts: almacenados como JSON estáticos
  * Servicios Angular con HttpClient e interceptores para simular peticiones HTTP
  * CRUD en zona admin afecta el Store y simula persistencia

#### Stack de Styling

* **Tailwind CSS** (utility-first, JIT compilation)
* **Dark mode** nativo (clases de Tailwind + preferencia guardada en localStorage)
* **Custom design system** y tokens personalizados
* **Responsive utilities** de Tailwind

#### Librerías Sugeridas

```json
{
  "styling": [
    "tailwindcss",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "autoprefixer"
  ],
  "ui": [
    "@angular/animations",
    "@angular/cdk",
    "@headlessui/angular"
  ],
  "icons": [
    "lucide-angular",
    "@tabler/icons"
  ],
  "forms": [
    "@angular/forms",
    "emailjs-com"
  ],
  "animations": [
    "framer-motion",
    "@angular/animations"
  ],
  "utils": [
    "rxjs",
    "@ngrx/store",
    "@ngrx/effects",
    "@ngrx/entity",
    "@ngrx/store-devtools"
  ]
}
```

#### Estructura de Archivos Sugerida

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── portfolio/
│   │   ├── experience/
│   │   ├── testimonials/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── admin/
│   │   └── footer/
│   ├── services/
│   ├── state/      # NgRx stores, actions, reducers, selectors, effects
│   ├── models/
│   ├── data/
│   └── shared/
├── assets/
│   ├── images/
│   ├── icons/
│   └── data/
└── styles/
    ├── abstracts/
    ├── base/
    ├── components/
    └── layouts/
```

---

### 🎨 Diseño y UX

#### Principios de Diseño

* Minimalista y limpio
* Profesional pero accesible
* Foco en el contenido y en la experiencia del usuario
* Navegación intuitiva y clara

#### Paleta de Colores Sugerida

```scss
$primary: #2563eb;      // Azul profesional
$secondary: #64748b;    // Gris slate
$accent: #10b981;       // Verde para CTAs
$dark: #1e293b;         // Texto principal
$light: #f8fafc;        // Fondo claro
$gradient: linear-gradient(135deg, $primary, #3b82f6);
```

#### Tipografía

* **Heading:** Inter, Poppins, o Montserrat
* **Body:** Inter, System UI, o Roboto
* **Code:** JetBrains Mono, Fira Code

#### Responsive Breakpoints

```scss
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
$large: 1280px;
```

#### Experiencia de Usuario (UX)

* Header fijo y navegación con smooth scroll
* Menú hamburguesa en mobile
* Indicador visual de sección activa
* Botón “scroll to top”
* Animaciones de scroll y efectos hover en tarjetas y botones
* Loading states y feedback visual para formularios
* Parallax sutil en hero (opcional)
* Dark mode con toggle y persistencia
* Navegación y componentes accesibles (WCAG 2.1 AA)

---

### ⚙️ Performance y Accesibilidad

* Lazy loading de imágenes y módulos
* Code splitting por secciones (Defer blocks)
* Bundle size optimizado (JIT + tree-shaking)
* Lighthouse Score > 90 en todas las categorías
* First Contentful Paint < 1.5s
* Time to Interactive < 3s
* Accesibilidad (A11y): contraste adecuado, navegación por teclado, ARIA
* Meta tags y SEO: Open Graph, Twitter Cards, Schema.org, Sitemap.xml

---

### 🔐 Seguridad y Buenas Prácticas

* Simulación de login/logout en zona de administración, gestionada en NgRx Store
* Rutas protegidas con guards
* Limpieza y modularidad del código
* Documentación y comentarios en componentes clave
* Pruebas unitarias y E2E en partes críticas

---

### 🚀 Plan de Desarrollo

#### Fase 1: Setup y Estructura (1-2 días)

* Configuración del proyecto Angular 19 + Tailwind + NgRx
* Setup de SCSS y variables globales
* Configuración de routing, lazy loading y guards
* Estructura de carpetas y componentes base
* Linting, prettier y formateo

#### Fase 2: Componentes Base (2-3 días)

* Header con navegación
* Hero section
* Footer y layout principal
* Servicios de mock data

#### Fase 3: Secciones Principales (3-4 días)

* Sobre mí, habilidades técnicas, portfolio y experiencia profesional
* Blog técnico y testimonios (si aplica)
* Estado y filtros gestionados en NgRx

#### Fase 4: Funcionalidades Avanzadas (2-3 días)

* Formulario de contacto (validación, feedback)
* Zona de administración (CRUD, autenticación simulada)
* Animaciones y efectos
* Optimización responsive

#### Fase 5: Pulido y Deploy (1-2 días)

* Testing y QA (unitario + E2E)
* Optimización de performance
* SEO metadata
* Deploy en Netlify/Vercel

---

### 📊 Métricas de Éxito

* **Performance:** Lighthouse Score > 90, FCP < 1.5s, Bundle Size < 500KB
* **UX:** 100% responsive, A11y WCAG 2.1 AA, cross-browser
* **SEO:** Meta tags, Open Graph, Schema.org, Sitemap
* **Testing:** >80% coverage en partes clave, >95% éxito formularios

---

### 🎁 Características Adicionales (Nice to Have)

* Internacionalización (ES/EN)
* PWA y offline support
* Analytics
* Integración con GitHub API, LinkedIn API
* Chatbot simple para FAQ
* Documentación Storybook
* CI/CD para deploy automático

---

### 📝 Notas Finales

* Código limpio, modular y escalable
* Listo para revisión de portfolio técnico
* Preparado para crecimiento futuro y nuevas funcionalidades

---

**Versión:** 1.0
**Última Actualización:** Mayo 2025
**Autor:** Pablo Martín

---
