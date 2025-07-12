// BJØRN - Funcionalidad JavaScript

// Estado global
const state = {
  isMobileMenuOpen: false,
};

// Función para toggle del menú móvil
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  state.isMobileMenuOpen = !state.isMobileMenuOpen;

  if (state.isMobileMenuOpen) {
    mobileMenu.classList.remove("hidden");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
}

// Función para cerrar el menú móvil cuando se hace clic en un enlace
function closeMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  state.isMobileMenuOpen = false;
  mobileMenu.classList.add("hidden");
  menuIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
}

// Función para el formulario de newsletter
function subscribeNewsletter(event) {
  event.preventDefault();

  const emailInput = event.target.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (email) {
    // Simular envío del formulario
    showNotification(
      `¡Bienvenido a la hermandad BJØRN! Recibirás tu descuento del 15% pronto.`,
    );
    emailInput.value = "";
  }
}

// Función para mostrar notificaciones
function showNotification(message) {
  // Crear elemento de notificación
  const notification = document.createElement("div");
  notification.className = `
    fixed top-4 right-4 z-50 
    bg-green-600 text-white 
    px-6 py-3 rounded-lg shadow-lg
    transform translate-x-full transition-transform duration-300
  `;
  notification.style.backgroundColor = "var(--viking-gold)";
  notification.style.color = "var(--viking-deep-black)";
  notification.style.padding = "1rem 1.5rem";
  notification.style.borderRadius = "0.5rem";
  notification.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
  notification.style.position = "fixed";
  notification.style.top = "1rem";
  notification.style.right = "1rem";
  notification.style.zIndex = "1000";
  notification.style.transform = "translateX(100%)";
  notification.style.transition = "transform 0.3s ease";
  notification.style.fontWeight = "600";

  notification.textContent = message;

  document.body.appendChild(notification);

  // Mostrar la notificación
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Ocultar después de 5 segundos
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Función para scroll suave
function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Función para efectos de hover en las tarjetas de productos
function addProductCardEffects() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      if (!this.classList.contains("upcoming")) {
        this.style.transform = "translateY(-4px)";
        this.style.boxShadow = "0 10px 25px rgba(212, 175, 55, 0.2)";
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "";
    });
  });
}

// Función para efectos de loading en imágenes
function addImageLoadingEffects() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    img.addEventListener("error", function () {
      this.style.opacity = "0.5";
      this.alt = "Imagen no disponible";
    });

    // Inicialmente oculta
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease";
  });
}

// Función para detectar scroll y añadir efectos al header
function addScrollEffects() {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header.style.backgroundColor = "rgba(26, 26, 26, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.backgroundColor = "var(--viking-deep-black)";
      header.style.backdropFilter = "none";
    }

    lastScrollY = currentScrollY;
  });
}

// Función para animaciones de entrada
function addScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".section-title, .section-description, .product-card, .testimonial-card, .feature",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Función para manejar el cambio de tamaño de ventana
function handleResize() {
  window.addEventListener("resize", () => {
    // Cerrar menú móvil si la ventana se hace más grande
    if (window.innerWidth >= 1024 && state.isMobileMenuOpen) {
      closeMobileMenu();
    }
  });
}

// Función para precargar imágenes críticas
function preloadCriticalImages() {
  const criticalImages = ["/public/placeholder.svg"];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Función para lazy loading de imágenes
function addLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Función para manejo de errores globales
function setupErrorHandling() {
  window.addEventListener("error", (event) => {
    console.error("Error capturado:", event.error);
    // Aquí podrías enviar errores a un servicio de logging
  });

  window.addEventListener("unhandledrejection", (event) => {
    console.error("Promesa rechazada:", event.reason);
    event.preventDefault();
  });
}

// Función para añadir listeners a los enlaces del menú móvil
function addMobileMenuListeners() {
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

// Función de inicialización principal
function initializeBjorn() {
  console.log("🔥 Iniciando BJØRN - Moda Vikinga Moderna");

  // Configurar manejo de errores
  setupErrorHandling();

  // Precargar imágenes críticas
  preloadCriticalImages();

  // Añadir efectos a las tarjetas de productos
  addProductCardEffects();

  // Añadir efectos de loading a las imágenes
  addImageLoadingEffects();

  // Añadir efectos de scroll
  addScrollEffects();

  // Añadir animaciones de scroll
  addScrollAnimations();

  // Manejar redimensionamiento
  handleResize();

  // Añadir lazy loading
  addLazyLoading();

  // Configurar listeners del menú móvil
  addMobileMenuListeners();

  console.log("✅ BJØRN inicializado correctamente");
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", initializeBjorn);

// Funciones adicionales para mejor UX

// Función para smooth scroll en enlaces internos
document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (link && link.hash && link.hash.startsWith("#")) {
    event.preventDefault();
    smoothScroll(link.hash.substring(1));
  }
});

// Función para mostrar/ocultar botón de scroll to top
function addScrollToTop() {
  const scrollButton = document.createElement("button");
  scrollButton.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  `;
  scrollButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: var(--viking-gold);
    color: var(--viking-deep-black);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  `;

  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(scrollButton);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
  });
}

// Inicializar scroll to top cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", addScrollToTop);

// Función para validación mejorada del formulario
function enhanceFormValidation() {
  const emailInputs = document.querySelectorAll('input[type="email"]');

  emailInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      const email = this.value;
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (email && !isValid) {
        this.style.borderColor = "#ef4444";
        showValidationMessage(this, "Por favor, introduce un email válido");
      } else {
        this.style.borderColor = "var(--viking-gold)";
        hideValidationMessage(this);
      }
    });
  });
}

function showValidationMessage(input, message) {
  hideValidationMessage(input); // Remover mensaje anterior

  const messageEl = document.createElement("div");
  messageEl.className = "validation-message";
  messageEl.textContent = message;
  messageEl.style.cssText = `
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    position: absolute;
    z-index: 10;
  `;

  input.parentNode.style.position = "relative";
  input.parentNode.appendChild(messageEl);
}

function hideValidationMessage(input) {
  const existing = input.parentNode.querySelector(".validation-message");
  if (existing) {
    existing.remove();
  }
}

// Inicializar validación mejorada
document.addEventListener("DOMContentLoaded", enhanceFormValidation);

// Exportar funciones para uso global
window.BjornApp = {
  toggleMobileMenu,
  subscribeNewsletter,
  showNotification,
  smoothScroll,
};
