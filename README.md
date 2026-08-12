# Portafolio Profesional Interactivo

Aplicación móvil desarrollada con **React Native** y **Expo** como parte del Proyecto Programado 1 del curso Programación para Dispositivos Móviles (TEC).

## 📱 Descripción

Portafolio profesional interactivo que simula el manejo de datos locales mediante el estado de la aplicación, sin conexión a bases de datos externas.

## ✨ Funcionalidades

- **Pantalla de Inicio**: perfil con foto, título profesional y biografía.
- **Pantalla de Proyectos**: lista desplazable (`FlatList`) con tarjetas de proyectos, incluyendo buscador en tiempo real (`useState`).
- **Pantalla de Detalles**: vista individual de cada proyecto, accesible al tocar una tarjeta, con navegación de ida y vuelta (Stack + rutas dinámicas).

## 🛠️ Tecnologías

- React Native
- Expo / Expo Router (navegación por Tabs + Stack)
- TypeScript



## 📂 Estructura del proyecto

```
app/
  (tabs)/          → Pantallas de Inicio y Proyectos (navegación por tabs)
  project/
    [id].tsx        → Pantalla de Detalles (ruta dinámica)
constants/
  projects.ts        → Datos simulados de los proyectos
assets/images/        → Recursos visuales (foto de perfil, etc.)
```


## 🚀 Cómo correr el proyecto

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm run android
```

## 👤 Autor

**Danny Roman**
Estudiante de Programación para Dispositivos Móviles — TEC, Costa Rica