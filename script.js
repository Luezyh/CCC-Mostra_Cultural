/* ===========================================
   Mostra Cultural 2026 – script.js
   =========================================== */

// ── Mobile Menu ──────────────────────────────
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const isOpen = mobileMenu.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  // Animate hamburger → X
  const spans = menuToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});

// ── Carousel ─────────────────────────────────
const track  = document.getElementById('carouselTrack');
const slides = track.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;
let autoInterval;

// Build dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('carousel-dot');
  dot.setAttribute('aria-label', `Slide ${i + 1}`);
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

function updateDots() {
  dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
}

function goTo(index) {
  current = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  updateDots();
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

nextBtn.addEventListener('click', () => { next(); resetAuto(); });
prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

// Auto-advance
function startAuto() {
  autoInterval = setInterval(next, 4000);
}
function resetAuto() {
  clearInterval(autoInterval);
  startAuto();
}

startAuto();

// Touch/swipe support
let touchStartX = 0;
track.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

track.addEventListener('touchend', e => {
  const dx = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 40) {
    dx > 0 ? next() : prev();
    resetAuto();
  }
});

// ── Scroll Reveal ─────────────────────────────
const revealEls = document.querySelectorAll(
  '.tema-card, .info-card, .section-header'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// Stagger children in grids
document.querySelectorAll('.temas-grid, .info-grid').forEach(grid => {
  grid.querySelectorAll('.tema-card, .info-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});
