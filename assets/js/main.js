// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Chargement des partials header/footer
  ['header','footer'].forEach(tag => {
    fetch(`partials/${tag}-${document.documentElement.lang}.html`)
      .then(r => r.text())
      .then(html => document.getElementById(`${tag}-include`).innerHTML = html);
  });

  
// 2) Animations au défilement : plus rapides
if (window.AOS) {
  AOS.init({
    duration: 250,
    easing: 'ease-out',
    once: true,
    offset: 40,
    delay: 0,
    disableMutationObserver: false
  });
}


  // 3) Parallaxe (Rellax) – uniquement si Rellax est chargé
  if (window.Rellax) {
    new Rellax('.parallax', { speed: -2 });
  }

  // 4) Carousel Témoignages (Swiper) – uniquement si Swiper est chargé
  if (window.Swiper) {
    new Swiper('.testimonial-carousel', {
      loop: true,
      autoplay: { delay: 5000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      slidesPerView: 1,
      breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
  }
});
