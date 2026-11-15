// Mobile menu toggle: shows/hides the nav menu on small screens and keeps
// the button's aria-expanded state in sync for screen readers. The open
// state lives in a `.open` class (styled only inside the mobile media
// query), so inline styles can never leak onto the desktop layout when the
// viewport is resized while the menu is open.
(function () {
  'use strict';
  const btn = document.querySelector('.hamburger');
  const m = document.querySelector('.menu');
  if (!btn || !m) return;

  function setOpen(open) {
    m.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    // The label names the action the button will do next, so a screen
    // reader user hears "Close menu" while the menu is open, not "Menu".
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
  }

  btn.addEventListener('click', function () {
    setOpen(!m.classList.contains('open'));
  });

  // Tapping anywhere outside the open menu closes it, so a stray tap
  // doesn't leave the overlay covering the page. Clicks on the toggle
  // itself and inside the menu are excluded: the toggle has its own
  // handler above, and menu links close the menu via the handler below.
  document.addEventListener('click', function (e) {
    if (m.classList.contains('open') &&
        !e.target.closest('.menu') && !e.target.closest('.hamburger')) {
      setOpen(false);
    }
  });

  // Close the menu once a destination is chosen, so the user lands on the
  // section instead of staring at an open overlay.
  m.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Escape closes the menu and returns focus to the toggle button.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && m.classList.contains('open')) {
      setOpen(false);
      btn.focus();
    }
  });

  // If the viewport grows past the mobile breakpoint (900px, see the
  // media query in style.css) while the menu is open, close it: the
  // desktop layout shows the menu inline, and a stale `.open` class
  // would leave aria-expanded="true" on a button that is now hidden.
  // The addListener branch is the Safari < 14 spelling of the same API.
  if (typeof window !== 'undefined' && window.matchMedia) {
    var mq = window.matchMedia('(min-width: 901px)');
    var onViewportChange = function (e) {
      if (e.matches && m.classList.contains('open')) setOpen(false);
    };
    if (mq.addEventListener) mq.addEventListener('change', onViewportChange);
    else if (mq.addListener) mq.addListener(onViewportChange);
  }
})();
