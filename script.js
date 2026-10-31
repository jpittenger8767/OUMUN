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