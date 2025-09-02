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

// Voltar ao Topo
document.addEventListener('DOMContentLoaded', function () {
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const threshold = 300; 

    function updateBackToTopVisibility() {
      const show = window.scrollY > threshold;
      backToTop.toggleAttribute('hidden', !show);
      backToTop.classList.toggle('show', show);
    }

    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    window.addEventListener('load', updateBackToTopVisibility);

    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      if (prefersReduced.matches) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});

    //formulario
var form = document.getElementById("formContato");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var mensagem = document.getElementById("mensagem");
var aviso = document.getElementById("mensagemErro");
var btnLimpar = document.getElementById("limpar");

function verificarEmail(email) {
  if (email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@")) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  if (nome.value == "" || email.value == "" || mensagem.value == "") {
    aviso.textContent = "Tente novamente! Todos os campos são obrigatórios.";
    aviso.style.color = "red";
  }

  else if (nome.value.length < 6) {
    aviso.textContent = "Tente novamente! O nome deve ter pelo menos 6 caracteres.";
    aviso.style.color = "red";
  }

  else if (!verificarEmail(email.value)) {
    aviso.textContent = "Tente novamente! Digite um email válido.";
    aviso.style.color = "red";
  }

  else {
    aviso.textContent = "Obrigado! Seus dados foram preenchidos corretamente.";
    aviso.style.color = "green";
    
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  }
});

btnLimpar.addEventListener("click", function() {
  nome.value = "";
  email.value = "";
  mensagem.value = "";
  aviso.textContent = "";
});
