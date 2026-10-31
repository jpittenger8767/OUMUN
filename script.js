// Fade-in on scroll. Without JavaScript, everything simply shows normally.
document.documentElement.classList.add('js');

const targets = document.querySelectorAll(
  '.intro, .content > :not(.card-grid), .conferences h2, .conf-card, .card, .band-inner'
);
targets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

targets.forEach(el => observer.observe(el));

const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  menuToggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  document.querySelectorAll('.main-nav a, .sub-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });
}