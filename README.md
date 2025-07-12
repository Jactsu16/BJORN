# BJØRN - Moda Vikinga Moderna

Un sitio web elegante y moderno para la marca de moda vikinga BJØRN, creado con HTML, CSS y JavaScript vanilla.

## 🔥 Características

- **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Tema Vikingo**: Colores y estética inspirada en la cultura nórdica
- **HTML/CSS/JS Vanilla**: Fácil de entender y modificar
- **Optimizado para GitHub Pages**: Listo para ser desplegado

## 🎨 Páginas Incluidas

- **Inicio** (`index.html`) - Página principal con hero section y productos destacados
- **Productos** (`productos.html`) - Catálogo completo de productos
- **Sobre Nosotros** (`sobre-nosotros.html`) - Historia y valores de la marca
- **Tienda** (`tienda.html`) - Página de compras (próximamente)
- **Reseñas** (`resenas.html`) - Testimonios de clientes
- **Contacto** (`contacto.html`) - Formulario de contacto

## 🚀 Cómo Subir a GitHub Pages

### Opción 1: Subir archivos directamente

1. **Crear un nuevo repositorio en GitHub**

   - Ve a [github.com](https://github.com) y haz clic en "New repository"
   - Ponle un nombre como `bjorn-website`
   - Marca "Public" y "Add a README file"
   - Haz clic en "Create repository"

2. **Subir los archivos**

   - Haz clic en "uploading an existing file"
   - Arrastra todos los archivos de tu proyecto (.html, .css, .js, etc.)
   - Escribe un mensaje como "Subir sitio web BJØRN"
   - Haz clic en "Commit changes"

3. **Activar GitHub Pages**

   - Ve a Settings (Configuración) del repositorio
   - Busca la sección "Pages" en el menú izquierdo
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona "main" branch y "/ (root)"
   - Haz clic en "Save"

4. **¡Listo!** Tu sitio estará disponible en:
   `https://tu-usuario.github.io/nombre-del-repositorio`

### Opción 2: Usar GitHub Desktop (más fácil)

1. **Descargar GitHub Desktop**

   - Ve a [desktop.github.com](https://desktop.github.com)
   - Descarga e instala la aplicación

2. **Crear repositorio**

   - Abre GitHub Desktop
   - Haz clic en "Create a New Repository on your hard drive"
   - Ponle nombre y elige la carpeta donde están tus archivos
   - Haz clic en "Create repository"

3. **Subir archivos**

   - Copia todos los archivos (.html, .css, .js) a la carpeta del repositorio
   - En GitHub Desktop verás los cambios
   - Escribe un mensaje y haz clic en "Commit to main"
   - Haz clic en "Publish repository"

4. **Activar Pages** (igual que la opción 1, paso 3)

## 🛠️ Estructura del Proyecto

```
bjorn-website/
├── index.html              # Página principal
├── productos.html           # Página de productos
├── sobre-nosotros.html     # Página sobre nosotros
├── tienda.html             # Página de tienda
├── resenas.html            # Página de reseñas
├── contacto.html           # Página de contacto
├── styles.css              # Estilos principales
├── script.js               # Funcionalidad JavaScript
├── public/
│   └── placeholder.svg     # Imágenes temporales
└── README.md               # Este archivo
```

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
  --viking-deep-black: #1a1a1a;
  --viking-gold: #d4af37;
  --viking-anthracite: #2d2d2d;
  /* ... más colores */
}
```

### Agregar Contenido

- **Textos**: Edita directamente en los archivos HTML
- **Imágenes**: Reemplaza los archivos en la carpeta `public/`
- **Productos**: Modifica las secciones de productos en cada página

### Funcionalidades

- **Newsletter**: El formulario ya tiene funcionalidad básica
- **Contacto**: El formulario muestra notificaciones
- **Menú móvil**: Completamente funcional

## 🌐 URL de Ejemplo

Una vez configurado, tu sitio estará disponible en algo como:
`https://tu-usuario.github.io/bjorn-website`

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Móviles y tablets
- ✅ Pantallas de escritorio
- ✅ GitHub Pages

## 🎯 Próximos Pasos

1. **Reemplazar imágenes**: Cambia `placeholder.svg` por imágenes reales
2. **Añadir productos reales**: Actualiza la información de productos
3. **Configurar formularios**: Conecta con un servicio de email
4. **SEO**: Añade meta tags y optimizaciones
5. **Analytics**: Integra Google Analytics si lo deseas

---

**¡Tu sitio web vikingo está listo para conquistar GitHub Pages!** 🏹⚔️
