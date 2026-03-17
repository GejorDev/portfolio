# 📋 Propuesta: Portfolio Personal v1.0 (Rebuild)

## 🎯 Objetivo
Reestructurar el proyecto como frontend estático moderno para portfolio personal, mostrando conocimientos y stack profesional de manera elegante.

## 📊 Current State Analysis

### Stack Actual
- **Framework**: React 19.2.4 ✓
- **Build Tool**: Vite 8.0.0 ✓  
- **Styling**: Tailwind CSS 4.2.1 ✓
- **Linting**: ESLint 9.39.4 ✓

### Problemas Identificados
1. ❌ Imágenes/assets eliminadas (hero.png, react.svg, vite.svg)
2. ❌ Estructura de archivos desorganizada
3. ❌ No estático (usa React cuando no lo necesita para portfolio simple)
4. ❌ Posibles issues de optimización

## 🎨 Diseño Propuesto

### Stack Optimizado (para portfolio estático)
```
├── react/19 (mantener para demostrar conocimientos)
├── vite/8 (mejor que webpack en todo)
├── tailwind/v4 (moderno y performante)
├── lucide-react (iconos ligeros)
└── framer-motion (opcional, solo si animaciones)
```

### Arquitectura

```
src/
├── components/          # Reutilizables
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Experience/
│   ├── Education/
│   └── Contact/
├── pages/               # Vistas (si usamos SPA simple)
│   ├── Home.jsx
│   └── About.jsx
├── assets/              # Imágenes y recursos
│   └── images/
├── styles/
│   ├── globals.css
│   └── tailwind.css
├── data/                # Contenido (contenido en separado)
│   └── portfolio.json
└── App.jsx              # Orquestador
```

### Componentes Clave

1. **LayoutBase** - Layout principal
2. **Header** - Navegación fija
3. **Hero** - Presentación
4. **Sections** - Skills, Experience, Education, Contact
5. **Footer** - Credenciales
6. **ThemeToggle** - Modo oscuro/claro

## 📦 Deliverables

1. **Estructura de carpetas limpia**
2. **Componentes modulares**
3. **Contenido en JSON** (facilita edición)
4. **Optimización de assets**
5. **Configuración Vite + PWA**

## 🚧 Consideraciones

### Ventajas de React (a pesar de no ser estrictamente necesario)
- ✅ Muestra que dominas React
- ✅ Facilita mantener y actualizar
- ✅ Componentes reutilizables

### Consideraciones
- No usar `window` en componentes
- Usar hooks React para estado
- Lazy loading para imágenes
- CSS Modules o Tailwind utility-first

## 🎯 Métricas de Éxito

- ✅ Build exitoso (`npm run build`)
- ✅ Dev server funcionando
- ✅ Sin warnings en console
- ✅ Responsive en mobile/desktop
- ✅ Optimizado para SEO básico
- ⚡ Bundle size < 100KB

## 🔧 Próximos Pasos

1. Reestructurar directorios
2. Eliminar assets no usados
3. Mover contenido a JSON
4. Crear componentes base
5. Implementar secciones
6. Optimizar para producción

---
**Estado**: PROPUESTA  
**Fecha**: 2026-03-17