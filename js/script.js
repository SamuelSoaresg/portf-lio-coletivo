// Menu Sanduíche Mobile
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-nav');
    if (!toggleBtn || !nav) return;

    const OPEN_CLASS = 'open';

    function isMobile() {
      return window.matchMedia('(max-width: 768px)').matches;
    }

    function openMenu() {
      toggleBtn.setAttribute('aria-expanded', 'true');
      nav.classList.add(OPEN_CLASS);
      document.addEventListener('click', onClickOutside, { capture: true });
      document.addEventListener('keydown', onKeyDown);
    }

    function closeMenu() {
      toggleBtn.setAttribute('aria-expanded', 'false');
      nav.classList.remove(OPEN_CLASS);
      document.removeEventListener('click', onClickOutside, { capture: true });
      document.removeEventListener('keydown', onKeyDown);
    }

    function toggleMenu() {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(); else openMenu();
    }

    function onClickOutside(e) {
      if (!isMobile()) return;
      const clickedInside = nav.contains(e.target) || toggleBtn.contains(e.target);
      if (!clickedInside) closeMenu();
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        closeMenu();
        toggleBtn.focus();
      }
    }

   
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (!isMobile()) return; 
      toggleMenu();
    });

    
    nav.addEventListener('click', function (e) {
      const link = e.target.closest('a');
      if (!link) return;
      if (isMobile()) closeMenu();
    });

    
    window.addEventListener('resize', function () {
    
      if (!isMobile()) {
        closeMenu();
      }
    });

    
    closeMenu();
  });
})();