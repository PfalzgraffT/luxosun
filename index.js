


const testimonialSlides = Array.from(document.querySelectorAll('.testimonial-slide'));
const dots = Array.from(document.querySelectorAll('.dot'));

let currentSlideIndex = 0;


const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const animatedElements = document.querySelectorAll('.animatedOpacity');

window.addEventListener( "scroll", animate);

function animate() {
  animatedElements.forEach((elem) => {
    const distInView = 
      elem.getBoundingClientRect().top - window.innerHeight;

      if (distInView < 0) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
  });
}

const inputNom = document.querySelector('#nom');
const inputPrenom = document.querySelector('#prenom');
const inputTelephone = document.querySelector('#telephone');

inputNom.addEventListener('keypress', function(event) {
  const keyCode = event.keyCode;
  if (/[0-9]/.test(String.fromCharCode(keyCode))) {
    event.preventDefault();
  }
});

inputPrenom.addEventListener('keypress', function(event) {
  const keyCode = event.keyCode;
  if (/[0-9]/.test(String.fromCharCode(keyCode))) {
    event.preventDefault();
  }
});

inputTelephone.addEventListener('keypress', function(event) {
  const keyCode = event.keyCode;
  if (/[A-Za-z]/.test(String.fromCharCode(keyCode))) {
    event.preventDefault();
  }
});

const projetInput = document.getElementById('projet');

projetInput.addEventListener('input', () => {

  projetInput.style.height = 'auto'; // Réinitialise la hauteur de l'input à "auto"
  projetInput.style.height = `${projetInput.scrollHeight + 2}px`; // Ajuste la hauteur de l'input en fonction de son contenu
});

projetInput.style.height = `${projetInput.scrollHeight + 2}px`; // Ajuste la hauteur initiale de l'input en fonction de son contenu



const formulaire = document.getElementById('formulaire');
const messageErreur = document.getElementById('message-erreur');

formulaire.addEventListener('submit', (e) => {
  // Vérifier la validité des champs du formulaire
  if (!formulaire.checkValidity()) {
    e.preventDefault(); // Empêche la soumission du formulaire
    
    messageErreur.textContent = 'Veuillez vérifier les données saisies.';
    messageErreur.style.display = 'block';
  } else {
    messageErreur.style.display = 'none';
  }
});


function showSlide(index) {
  testimonialSlides.forEach((slide, slideIndex) => {
    if (slideIndex === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function updateDots(index) {
  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function changeSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
  updateDots(currentSlideIndex);
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % testimonialSlides.length;
  showSlide(currentSlideIndex);
  updateDots(currentSlideIndex);
}

function startCarousel() {
  setInterval(nextSlide, 5000);
}

/*function sendWhatsAppMessage() {
  var messageInput = document.getElementById("whatsapp-message");
  var message = messageInput.value.trim();

  if (message !== "") {
    var phoneNumber = "0683183533"; // Remplacez par le numéro de téléphone du destinataire

    // Construire l'URL de l'API WhatsApp Business
    var apiUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    // Ouvrir une fenêtre contextuelle pour l'API WhatsApp Business
    window.open(apiUrl, "_self");

    // Effacer le champ de message
    messageInput.value = "";
    messageInput.focus();
  }
}

// Gérer l'événement de pression de touche pour le champ de message
function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendWhatsAppMessage();
    event.preventDefault();
  }
}

// Écouter l'événement de pression de touche pour le champ de message
document.getElementById("whatsapp-message").addEventListener("keypress", handleKeyPress);
*/

window.addEventListener("scroll", function() {
  var parallax = document.querySelector(".parallax");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollFactor = 0.7; // Ajustez cette valeur pour contrôler l'effet de parallaxe

  parallax.style.transform = "translateY(" + scrollTop * scrollFactor + "px)";
});

const buttonLeft = document.querySelector('.button-left');
  const buttonRight = document.querySelector('.button-right');

  buttonLeft.addEventListener('mouseenter', () => {
    buttonRight.style.backgroundColor = '#ada8bf';
    buttonLeft.style.backgroundColor = '#C9AC81';
  });

  buttonLeft.addEventListener('mouseleave', () => {
    buttonRight.style.backgroundColor = '#C9AC81';
    buttonLeft.style.backgroundColor = '#ada8bf';
  });
  
  buttonRight.addEventListener('mouseenter', () => {
    buttonLeft.style.backgroundColor = '#C9AC81';
    buttonRight.style.backgroundColor = '#ada8bf';
  });
  
  buttonRight.addEventListener('mouseleave', () => {
    buttonLeft.style.backgroundColor = '#ada8bf';
    buttonRight.style.backgroundColor = '#C9AC81';
  });

  function redirectTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }
showSlide(currentSlideIndex);
updateDots(currentSlideIndex);

startCarousel();




const circles = document.querySelectorAll('.circle');
const sunContainer = document.querySelector('.sun-container');
const sunImage = document.querySelector('.sun-image');
const sunContainerWidth = sunContainer.offsetWidth;

let openCircle = null;
let isMouseLeaveInProgress = false;

circles.forEach((circle) => {
  circle.addEventListener('mouseenter', toggleCircle);
  circle.addEventListener('mouseleave', toggleCircle);
});

function toggleCircle() {
  const isOpen = this.classList.contains('open');

  if (isOpen) {
    this.classList.remove('open');
    const circleImage = this.querySelector('.circle-image');
    if (circleImage) {
      circleImage.style.display = 'block';
    }
    openCircle = null;
  } else {
    if (openCircle) {
      openCircle.classList.remove('open');
      const openCircleImage = openCircle.querySelector('.circle-image');
      if (openCircleImage) {
        openCircleImage.style.display = 'block';
      }
    }

    this.classList.add('open');
    const circleImage = this.querySelector('.circle-image');
    if (circleImage) {
      circleImage.style.display = 'none';
    }

    openCircle = this;
  }

  // Réinitialiser l'état du sun-container
  sunContainer.style.width = '100%';
  sunImage.style.transform = 'translateX(0)';

  // Afficher le circle-text
  const circleText = this.querySelector('.circle-text');
  if (circleText) {
    setTimeout(() => {
      circleText.classList.add('show');
    }, 500); // Attendre 0.5 seconde avant d'ajouter la classe .show pour afficher le circle-text
  }


  // Vérifier si l'effet mouseleave est en cours
  if (isMouseLeaveInProgress) {
    isMouseLeaveInProgress = false;
    const circleImage = this.querySelector('.circle-image');
    if (circleImage) {
      setTimeout(() => {
        circleImage.style.display = 'block';
      }, 1000); // Attendre 1 seconde avant de rendre la classe .circle-image à nouveau visible
    }
  }
}

document.addEventListener('click', (event) => {
  const target = event.target;

  // Réinitialiser l'état général du sun-container lorsque l'utilisateur clique en dehors des cercles et de leur zone de texte
  if (!target.closest('.circle') && !target.closest('.circle-text')) {
    circles.forEach((circle) => {
      circle.classList.remove('open');
      const circleImage = circle.querySelector('.circle-image');
      if (circleImage) {
        circleImage.style.display = 'block';
      }
    });

    sunContainer.style.width = '100%';
    sunImage.style.transform = 'translateX(0)';

    openCircle = null;
  }
});

const buttonLeftEffect = document.querySelector('.bl');
const buttonRightEffect = document.querySelector('.bl2');

function showCircle(event) {
  const circle = event.target.querySelector('.circle');
  if (circle) {
    circle.classList.add('open');
  }
}

function hideCircle(event) {
  const circle = event.target.querySelector('.circle');
  if (circle) {
    circle.classList.remove('open');
  }
}

buttonLeftEffect.addEventListener('mouseenter', showCircle);
buttonLeftEffect.addEventListener('mouseleave', hideCircle);
buttonRightEffect.addEventListener('mouseenter', showCircle);
buttonRightEffect.addEventListener('mouseleave', hideCircle);

buttonLeftEffect.addEventListener('mousemove', (event) => {
  const buttonRect = buttonLeftEffect.getBoundingClientRect();
  const circleX = event.clientX - buttonRect.left - buttonRect.width / 16;
  const circleY = event.clientY - buttonRect.top - buttonRect.height / 16;

  buttonLeftEffect.style.setProperty('--circle-x', circleX + 'px');
  buttonLeftEffect.style.setProperty('--circle-y', circleY + 'px');
});
buttonRightEffect.addEventListener('mousemove', (event) => {
  const buttonRect = buttonRightEffect.getBoundingClientRect();
  const circleX = event.clientX - buttonRect.left - buttonRect.width / 16;
  const circleY = event.clientY - buttonRect.top - buttonRect.height / 16;

  buttonRightEffect.style.setProperty('--circle-x', circleX + 'px');
  buttonRightEffect.style.setProperty('--circle-y', circleY + 'px');
});

circles.forEach((circle) => {
  const circleText = circle.querySelector('.circle-text');

  circle.addEventListener('mouseenter', () => {
    if (circleText) {
      circleText.style.transform = 'translateX(100%)';
      circleText.style.opacity = '0';
    }
  });

  circle.addEventListener('mouseleave', () => {
    if (circleText) {
      circleText.style.transform = 'translateX(100%)';
      circleText.style.opacity = '0';
    }
  });

  circle.addEventListener('transitionend', () => {
    if (circle.classList.contains('open')) {
      if (circleText) {
        setTimeout(() => {
          circleText.style.transform = 'translateX(0)';
          circleText.style.opacity = '1';
        }, 0);
      }
    }
  });
});


const banner = document.querySelector('.banner');
const container = document.querySelector('.container');
let isBannerVisible = true;
let prevScrollPos = window.pageYOffset;

function toggleBannerVisibility() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // Défilement vers le bas
    if (isBannerVisible) {
      banner.style.opacity = '0';
      banner.style.pointerEvents = 'none'; // Désactiver les interactions sur le banner pendant la transition
      isBannerVisible = false;
    }
  } else {
    // Défilement vers le haut
    if (!isBannerVisible && currentScrollPos <= container.offsetTop) {
      banner.style.opacity = '1';
      banner.style.pointerEvents = 'auto'; // Réactiver les interactions sur le banner après la transition
      isBannerVisible = true;
    }
  }

  prevScrollPos = currentScrollPos;
}

// Gestionnaire d'événement de défilement
window.addEventListener('scroll', toggleBannerVisibility);


const mentionsElements = document.querySelectorAll('.mentions');
const popupElement = document.querySelector('.popup');
const closeElement = document.querySelector('.close');
const popupTitleElement = document.querySelector('.popup-title');
const popupTextElement = document.querySelector('.popup-text');

mentionsElements.forEach((mentionsElement) => {
  mentionsElement.addEventListener('click', () => {
    if (mentionsElement.textContent === 'Politique de confidentialité') {
      popupTitleElement.textContent = 'Politique de confidentialité';
      popupTextElement.textContent = 'Votre texte de politique de confidentialité ici.';
    } else if (mentionsElement.textContent === 'Mentions légales') {
      popupTitleElement.textContent = 'Mentions légales';
      popupTextElement.textContent = 'Luxosun SAS, 2 T Rue Spitalieri 06000 Nice, capital social de 1000 Euros, 953 667 300 00016, luxosun.info@gmail.com, "téléphone", "numéro identifiant TVA", "Identité de l'hébergeur,(Entreprise en charge de stocker sur ses serveurs les données du site internet du site : nom ou dénomination sociale, adresse et numéro de téléphone)';
    }
    setTimeout(() => {
      popupElement.classList.add('show');
    }, 200);
  });
});

closeElement.addEventListener('click', () => {
  setTimeout(() => {
    popupElement.classList.remove('show');
  }, 200);
});

// Ajoutez cet événement de clic sur l'ensemble du document (body)
document.body.addEventListener('click', (event) => {
  if (!popupElement.contains(event.target) && !mentionsElements[0].contains(event.target) && !mentionsElements[1].contains(event.target)) {
    popupElement.classList.remove('show');
  }
});


