// assets/js/index.js

/**
 * Smooth scroll vers un élément #id
 * @param {string} id — identifiant de la section
 */
function redirectTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  /** Retour à la page d’accueil FR */
  function redirectToMainPage() {
    window.location.href = 'index.html';
  }
  
  /** Bascule vers la page Anglaise (même nom de page + "-english") */
  function redirectToEnglishPage() {
    const current = window.location.pathname.split('/').pop();
    if (current.includes('-english')) {
      // Si déjà en EN, renvoie à l'accueil EN
      window.location.href = 'english.html';
    } else {
      // Sinon bascule la page en remplaçant l'extension
      const newName = current.replace('.html', '-english.html');
      window.location.href = newName;
    }
  }
  
  /** Ouvre le client mail avec votre adresse */
  function openMail() {
    window.location.href = 'mailto:luxosun@outlook.com';
  }
  
  /** (Optionnel) Bouton "back to top" */
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.back-to-top');
    if (btn) {
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
  
  // Affichage du texte au hover des cercles
document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.service-circles .circle');
  const descContainer = document.querySelector('.circle-description-container');
  const descText = document.getElementById('circle-description');

  circles.forEach(circle => {
    const text = circle.getAttribute('data-text') || '';

    circle.addEventListener('mouseenter', () => {
      descText.textContent = text;
      descContainer.classList.add('active');
    });

    circle.addEventListener('mouseleave', () => {
      descText.textContent = '';
      descContainer.classList.remove('active');
    });
  });
});

// assets/js/index.js


// ==========================================
// LUXOSUN - FENÊTRES LÉGALES
// ==========================================

(() => {
  let activeModal = null;
  let previousFocus = null;
  let previousOverflow = "";

  function openLegalModal(modal) {
    if (!modal) return;

    if (activeModal && activeModal !== modal) {
      closeLegalModal();
    }

    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    activeModal = modal;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    const closeButton = modal.querySelector(".close");
    if (closeButton) closeButton.focus();
  }

  function closeLegalModal() {
    if (!activeModal) return;

    activeModal.classList.remove("active");
    activeModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = previousOverflow;

    activeModal = null;

    if (
      previousFocus &&
      typeof previousFocus.focus === "function"
    ) {
      previousFocus.focus();
    }
  }

  // Délégation : fonctionne avec les footers
  // injectés après le chargement de la page.
  document.addEventListener("click", (event) => {
    const legalLink = event.target.closest(".mention");
    const privacyLink = event.target.closest(".confidentialite");

    if (legalLink || privacyLink) {
      event.preventDefault();

      const id = legalLink
        ? "popup-legal"
        : "popup-privacy";

      openLegalModal(document.getElementById(id));
      return;
    }

    // Bouton de fermeture
    if (event.target.closest(".popup-overlay .close")) {
      event.preventDefault();
      closeLegalModal();
      return;
    }

    // Clic à l'extérieur de la fenêtre
    if (
      activeModal &&
      event.target === activeModal
    ) {
      closeLegalModal();
    }
  });

  // Fermeture avec Échap et confinement du focus
  document.addEventListener("keydown", (event) => {
    if (!activeModal) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeLegalModal();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = Array.from(
      activeModal.querySelectorAll(
        'a[href], button:not([disabled]), ' +
        'input:not([disabled]), ' +
        'select:not([disabled]), ' +
        'textarea:not([disabled]), ' +
        '[tabindex]:not([tabindex="-1"])'
      )
    ).filter(element => element.getClientRects().length > 0);

    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  });
})();


document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.testimonial-marquee-wrapper');
  if (wrapper) {
    const marquee = wrapper.querySelector('.testimonial-cards.marquee');
    // Duplique le contenu pour la boucle infinie
    marquee.innerHTML += marquee.innerHTML;

    let speed = 0.5;
    let pos = 0;
    let rafId;

    function step() {
      pos += speed;
      if (pos >= marquee.scrollWidth / 2) {
        pos -= marquee.scrollWidth / 2;
      }
      wrapper.scrollLeft = pos;
      rafId = requestAnimationFrame(step);
    }

    // démarre
    step();

    // pause/reprise au survol
    wrapper.addEventListener('mouseenter', () => cancelAnimationFrame(rafId));
    wrapper.addEventListener('mouseleave', () => step());
  }
});

