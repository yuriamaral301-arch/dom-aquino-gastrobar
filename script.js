/**
 * DOM AQUINO RESTAURANTE - INTERACTION LOGIC
 * Minimalist & Clean Institutional Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. NAVBAR SCROLL EFFECT ---
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 2. MOBILE DRAWER MENU ---
  const menuBtn = document.getElementById('menu-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerNavItems = document.querySelectorAll('.drawer-nav-item');

  const openDrawer = () => {
    drawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  drawerNavItems.forEach(item => {
    item.addEventListener('click', closeDrawer);
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
    }
  });

  // --- 3. ACTIVE NAV LINK ON SCROLL ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-item');

  const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  // --- 4. DATE INPUT INITIALIZATION ---
  const dateInput = document.getElementById('c-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Helper: Format Date from YYYY-MM-DD to DD/MM/YYYY
  const formatDateBR = (isoDate) => {
    if (!isoDate) return '';
    const parts = isoDate.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return isoDate;
  };

  const WHATSAPP_PHONE = '5584986312222';

  // --- 5. CONTACT & PRE-RESERVATION FORM SUBMISSION ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('c-name')?.value.trim();
      const phone = document.getElementById('c-phone')?.value.trim();
      const date = document.getElementById('c-date')?.value;
      const time = document.getElementById('c-time')?.value;
      const people = document.getElementById('c-people')?.value;
      const obs = document.getElementById('c-obs')?.value.trim();

      const dateBR = formatDateBR(date);

      const curLang = localStorage.getItem('dom_aquino_lang') || document.documentElement.lang || 'pt';
      let msg = `Olá! Gostaria de informações / pré-reserva no *Dom Aquino Restaurante*:\n\n`;
      if (curLang === 'en') {
        msg = `Hello! I would like information / reservation at *Dom Aquino Restaurante*:\n\n`;
        msg += `👤 *Name:* ${name}\n`;
        msg += `📱 *WhatsApp:* ${phone}\n`;
        msg += `📅 *Date:* ${dateBR}\n`;
        msg += `⏰ *Time:* ${time}\n`;
        msg += `👥 *Guests:* ${people}\n`;
        if (obs) msg += `📝 *Notes:* ${obs}\n`;
        msg += `\nI contacted you via the website and await confirmation. Thank you!`;
      } else if (curLang === 'es') {
        msg = `¡Hola! Me gustaría información / reserva en *Dom Aquino Restaurante*:\n\n`;
        msg += `👤 *Nombre:* ${name}\n`;
        msg += `📱 *WhatsApp:* ${phone}\n`;
        msg += `📅 *Fecha:* ${dateBR}\n`;
        msg += `⏰ *Hora:* ${time}\n`;
        msg += `👥 *Personas:* ${people}\n`;
        if (obs) msg += `📝 *Observaciones:* ${obs}\n`;
        msg += `\nLlegué a través del sitio web y espero su confirmación. ¡Muchas gracias!`;
      } else {
        msg += `👤 *Nome:* ${name}\n`;
        msg += `📱 *WhatsApp:* ${phone}\n`;
        msg += `📅 *Data:* ${dateBR}\n`;
        msg += `⏰ *Horário:* ${time}\n`;
        msg += `👥 *Pessoas:* ${people}\n`;
        if (obs) msg += `📝 *Observação:* ${obs}\n`;
        msg += `\nVim pelo site institucional e aguardo confirmação da equipe. Obrigado!`;
      }

      const encodedMsg = encodeURIComponent(msg);
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // --- 6. SCROLL REVEAL (ELEGANT SCROLL ENTRANCES) ---
  const revealElements = document.querySelectorAll('.reveal-item');
  if (revealElements.length > 0) {
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.08
      });

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('is-visible'));
    }
  }

  // --- 7. FULLSCREEN IMAGE LIGHTBOX MODAL ---
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  const openLightbox = (src, altText) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = altText || 'Dom Aquino Gastronomia';
    if (lightboxCaption) {
      lightboxCaption.textContent = altText || 'Dom Aquino Ponta Negra';
    }
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (lightboxImg) lightboxImg.src = '';
    }, 300);
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Attach click listener to all image containers
  const zoomableWrappers = document.querySelectorAll('.card-visual, .dish-photo-wrap, .dessert-photo-wrap, .feedback-img-container, .hero-image-card, .pb-visual-card');
  zoomableWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const img = wrapper.querySelector('img');
      if (img && img.getAttribute('src')) {
        const titleEl = wrapper.closest('.dish-showcase-card, .clean-card, .dessert-showcase-card, .feedback-card-clean')?.querySelector('h3, .dish-name, .clean-card-title, .dessert-name, .quote-text');
        const caption = titleEl ? titleEl.textContent.trim() : (img.getAttribute('alt') || 'Dom Aquino Restaurante');
        openLightbox(img.getAttribute('src'), caption);
      }
    });
  });

  // Handle ESC key for Lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // --- 8. SITE TOP PROGRESS LOADER ("EFEITO CARREGANDO") ---
  const loadBar = document.getElementById('site-load-bar');
  if (loadBar) {
    loadBar.style.width = '35%';
    setTimeout(() => {
      loadBar.style.width = '75%';
    }, 150);

    const finishLoading = () => {
      loadBar.style.width = '100%';
      setTimeout(() => {
        loadBar.classList.add('is-finished');
      }, 350);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
      setTimeout(finishLoading, 1200); // Safety fallback
    }
  }

  // --- 9. DYNAMIC STATS NUMBER COUNT-UP ANIMATION ---
  const statElements = document.querySelectorAll('.stat-num[data-target]');
  if (statElements.length > 0 && 'IntersectionObserver' in window) {
    // Set initial zero values
    statElements.forEach(el => {
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      el.textContent = (decimals > 0 ? (0).toFixed(decimals) : '0') + suffix;
    });

    const animateCount = (el) => {
      const target = parseFloat(el.getAttribute('data-target'));
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 1500; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth cubic ease-out: 1 - (1 - progress)^3
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = ease * target;

        el.textContent = (decimals > 0 ? currentVal.toFixed(decimals) : Math.round(currentVal)) + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
        }
      };

      requestAnimationFrame(updateCount);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.35
    });

    statElements.forEach(el => statsObserver.observe(el));
  }

  // --- 10. MOBILE CAROUSEL CONTROLS (ARROWS & DOTS) ---
  const carousels = document.querySelectorAll('.mobile-carousel');
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.mobile-carousel-track');
    const prevBtn = carousel.querySelector('.carousel-btn--prev');
    const nextBtn = carousel.querySelector('.carousel-btn--next');
    const dotsContainer = carousel.querySelector('.carousel-indicators');
    if (!track) return;

    const cards = Array.from(track.children);
    const total = cards.length;
    if (total <= 1) return;

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      cards.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${idx + 1}`);
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToCard(idx);
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];

    const getActiveIndex = () => {
      const trackCenter = track.scrollLeft + track.offsetWidth / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(trackCenter - cardCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });
      return closestIdx;
    };

    const updateUI = () => {
      const currentIdx = getActiveIndex();
      dots.forEach((dot, idx) => {
        if (idx === currentIdx) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      if (prevBtn) {
        prevBtn.setAttribute('aria-disabled', currentIdx === 0 ? 'true' : 'false');
      }
      if (nextBtn) {
        nextBtn.setAttribute('aria-disabled', currentIdx >= total - 1 ? 'true' : 'false');
      }
    };

    const scrollToCard = (index) => {
      const boundedIndex = Math.max(0, Math.min(index, total - 1));
      const targetCard = cards[boundedIndex];
      if (targetCard) {
        const targetLeft = targetCard.offsetLeft - (track.offsetWidth - targetCard.offsetWidth) / 2;
        track.scrollTo({
          left: targetLeft,
          behavior: 'smooth'
        });
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentIdx = getActiveIndex();
        if (currentIdx > 0) {
          scrollToCard(currentIdx - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentIdx = getActiveIndex();
        if (currentIdx < total - 1) {
          scrollToCard(currentIdx + 1);
        }
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToCard(idx);
      });
    });

    let isScrolling;
    track.addEventListener('scroll', () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(updateUI, 50);
    }, { passive: true });

    // Initial check
    updateUI();
  });

  // --- 11. GASTRONOMY DISH CATEGORY FILTERS ---
  const filterButtons = document.querySelectorAll('.dish-filter-btn');
  const dishCards = document.querySelectorAll('.dishes-showcase-grid .dish-showcase-card');
  const dishesTrack = document.querySelector('.section-gastronomy .mobile-carousel-track');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      dishCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.split(' ').includes(filter)) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });

      if (dishesTrack) {
        dishesTrack.scrollTo({ left: 0, behavior: 'smooth' });
      }
    });
  });
});



