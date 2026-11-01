// Mobile menu toggle: shows/hides the nav menu on small screens and keeps
// the button's aria-expanded state in sync for screen readers.
(function () {
  var btn = document.querySelector('.hamburger');
  var m = document.querySelector('.menu');
  if (!btn || !m) return;
  btn.addEventListener('click', function () {
    var open = m.style.display === 'flex';
    m.style.display = open ? 'none' : 'flex';
    m.style.position = 'absolute'; m.style.top = '76px'; m.style.left = '0'; m.style.right = '0';
    m.style.flexDirection = 'column'; m.style.background = '#fff'; m.style.padding = '18px 24px';
    m.style.borderBottom = '1px solid var(--border)'; m.style.gap = '16px';
    btn.setAttribute('aria-expanded', String(!open));
  });
})();
