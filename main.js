// ── Mobile nav toggle ──────────────────────────────────
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Publication tabs ────────────────────────────────────
function showPubs(type) {
  document.querySelectorAll('.pub-group').forEach(g => g.classList.add('hidden'));
  document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('pub-' + type).classList.remove('hidden');
  event.currentTarget.classList.add('active');
}

// ── Navbar shrink on scroll ─────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.borderBottomColor = 'rgba(184,149,42,0.4)';
  } else {
    navbar.style.borderBottomColor = 'rgba(184,149,42,0.25)';
  }
});

// ── Active nav highlight ────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = '#d4af50';
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));
