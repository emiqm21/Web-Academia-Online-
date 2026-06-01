/**
 * Academia Online Pro - Premium Enhancements JavaScript
 * Enhanced interactions, animations, and user experience improvements
 */

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}

// Add animation class
const style = document.createElement('style');
style.textContent = `
  [data-aos] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  [data-aos].animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    [data-aos] {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
`;
document.head.appendChild(style);

// Enhanced button interactions
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('mouseenter', function() {
    if (this.classList.contains('button--primary')) {
      this.style.transform = 'translateY(-2px)';
    }
  });

  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });

  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      animation: ripple-animation 0.6s ease-out;
      pointer-events: none;
    `;

    if (!this.style.position || this.style.position === 'static') {
      this.style.position = 'relative';
    }

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// Handle form submissions with validation
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    const requiredFields = this.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
});

// Mobile menu enhancements
const mobileMenuToggle = document.querySelector('[aria-label*="Menu"]');
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', function() {
    document.body.style.overflow = this.getAttribute('aria-expanded') === 'true' ? 'auto' : 'hidden';
  });
}

// Scroll-to-top button
const createScrollToTopButton = () => {
  const button = document.createElement('button');
  button.innerHTML = '↑ Arriba';
  button.className = 'scroll-to-top';
  button.setAttribute('aria-label', 'Scroll to top');
  
  const style = document.createElement('style');
  style.textContent = `
    .scroll-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: linear-gradient(135deg, #7B2869, #D4AF37);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 12px 20px;
      font-size: 0.9rem;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(123, 40, 105, 0.3);
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      z-index: 100;
      font-weight: 600;
    }

    .scroll-to-top.show {
      opacity: 1;
      visibility: visible;
    }

    .scroll-to-top:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(123, 40, 105, 0.4);
    }

    @media (max-width: 768px) {
      .scroll-to-top {
        bottom: 20px;
        right: 20px;
        padding: 10px 16px;
        font-size: 0.85rem;
      }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(button);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createScrollToTopButton);
} else {
  createScrollToTopButton();
}

// Performance optimization: lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

console.log('Academia Online Pro Premium Scripts Loaded ✓');
