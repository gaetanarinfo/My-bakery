<template name="ApplicationComponent">


  <div class="page-application bakery-single section fadeIn3">

    <div class="container clear">

      <section class="hero text-center text-light">

        <div class="hero-bg"></div>

        <div class="hero-particles-container"></div>

        <div class="container-sm">

          <div class="hero-inner">

            <div class="hero-copy">

              <h1 class="hero-title mt-0">Notre Application - My Bakery</h1>

              <p class="hero-paragraph">Avec My Bakery, il vous suffit de télécharger l'application en un instant, et
                vous l’aurez toujours à portée de main, où que vous soyez. Grâce à sa compatibilité internationale, elle
                vous suit dans tous vos déplacements, même à l'étranger !</p>

              <div class="hero-cta">
                <a class="button button-primary button-wide-mobile" @click="addCartApp()"><svg style="max-width: 20px;" class="me-2"
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <linearGradient id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1" x1="18.102" x2="25.297" y1="3.244"
                      y2="34.74" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#35ab4a"></stop>
                      <stop offset=".297" stop-color="#31a145"></stop>
                      <stop offset=".798" stop-color="#288739"></stop>
                      <stop offset="1" stop-color="#237a33"></stop>
                    </linearGradient>
                    <path fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)"
                      d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"></path>
                    <linearGradient id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2" x1="19.158" x2="21.194" y1="23.862"
                      y2="66.931" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#f14e5d"></stop>
                      <stop offset=".499" stop-color="#ea3d4f"></stop>
                      <stop offset="1" stop-color="#e12138"></stop>
                    </linearGradient>
                    <path fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)"
                      d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"></path>
                    <linearGradient id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3" x1="32.943" x2="36.541" y1="14.899"
                      y2="43.612" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#ffd844"></stop>
                      <stop offset=".519" stop-color="#ffc63f"></stop>
                      <stop offset="1" stop-color="#ffb03a"></stop>
                    </linearGradient>
                    <path fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)"
                      d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z">
                    </path>
                    <linearGradient id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4" x1="13.853" x2="15.572" y1="5.901"
                      y2="42.811" gradientUnits="userSpaceOnUse">
                      <stop offset=".003" stop-color="#0090e6"></stop>
                      <stop offset="1" stop-color="#0065a0"></stop>
                    </linearGradient>
                    <path fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)"
                      d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z">
                    </path>
                  </svg>Acheter maintenant</a>
              </div>

            </div>

            <div class="mockup-container">

              <div class="mockup-bg">

                <img src="iphone-hero-bg.svg" alt="iPhone">

              </div>

              <img class="device-mockup" src="iphone-hero.png" alt="iPhone">

            </div>

          </div>

        </div>

      </section>

      <section class="features-extended section">

        <div class="features-extended-inner section-inner">

          <div class="features-extended-wrap">

            <div class="container">

              <div class="feature-extended">

                <div class="feature-extended-image">

                  <div class="mockup-bg">
                    <img src="iphone-feature-bg-01.svg" alt="iPhone">
                  </div>

                  <img class="device-mockup is-revealing" src="iphone-feature-01.png" alt="iPhone" data-sr-id="0"
                    style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;">

                </div>

                <div class="feature-extended-body is-revealing" data-sr-id="5"
                  style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;">

                  <h3 class="mt-0 mb-16">Simple, efficace et compréhensible.</h3>
                  <p class="m-0">Chez My Bakery, nous avons conçu une application qui convient à tout le monde, quel que
                    soit l’âge ou le niveau de maîtrise du téléphone. Que vous soyez une personne âgée, un adolescent ou
                    un enfant à l’aise avec la technologie, My Bakery reste extrêmement simple à utiliser.</p><br />

                  <ul>

                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i>Facilité d’utilisation
                      : Nous avons pensé à chaque détail pour que l’application soit intuitive et
                      accessible à tous, même pour ceux qui ne sont pas très familiers avec la technologie.</li>

                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i>Conçu pour tous les
                      âges : Que vous soyez jeune ou moins jeune, vous pourrez profiter d'une
                      expérience fluide et agréable, sans complexité.
                    </li>

                    <li class="text-bold"><i class="fa-solid fa-check text-success me-2"></i>Efficacité incomparable :
                      My Bakery est non seulement simple, mais elle surpasse même les plus
                      grands sites de comparaison de boulangeries, en vous offrant une recherche rapide et précise.
                    </li>

                  </ul>

                </div>

              </div>

              <div class="feature-extended">
                <div class="feature-extended-image">
                  <div class="mockup-bg">
                    <img src="iphone-feature-bg-02.svg" alt="iPhone Feature 02 illustration">
                  </div>
                  <img class="device-mockup is-revealing" src="iphone-feature-02.png" alt="iPhone Feature 02"
                    data-sr-id="2" style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1);">
                </div>

                <div class="feature-extended-body is-revealing" data-sr-id="6"
                  style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -40, 0, 1);">

                  <h3 class="mt-0 mb-16">My Bakery est accessible partout dans le monde</h3>
                  <p class="m-0">Notre application reste constamment en ligne pour vous garantir une expérience
                    optimale, où que vous soyez. Grâce à My Bakery, vous pouvez facilement trouver n'importe quelle
                    boulangerie partout en France, que ce soit depuis le confort de votre canapé, en déplacement ou même
                    en visitant un restaurant.</p><br />

                  <ul>

                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i>Recherche de
                      boulangeries en temps réel : Trouvez rapidement des boulangeries proches de vous,
                      que ce soit pour une pause gourmande ou une recherche spécifique.</li>

                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i>Accessibilité partout,
                      tout le temps : Grâce à notre connexion continue, vous avez accès à
                      toutes les informations en temps réel, même en étant en déplacement.</li>

                    <li class="text-bold"><i class="fa-solid fa-check text-success me-2"></i>Expérience fluide et rapide
                      : Que ce soit pour trouver une boulangerie, consulter les horaires
                      ou découvrir des offres spéciales, l’application vous offre une expérience simple et rapide.</li>

                  </ul>

                </div>

              </div>

              <div class="feature-extended">

                <div class="feature-extended-image">

                  <div class="mockup-bg">
                    <img src="iphone-feature-bg-03.svg" alt="iPhone Feature 03 illustration">
                  </div>

                  <img class="device-mockup is-revealing" src="iphone-feature-03.png" alt="iPhone Feature 03"
                    data-sr-id="3" style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1);">

                </div>

                <div class="feature-extended-body is-revealing" data-sr-id="7"
                  style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -40, 0, 1);">

                  <h3 class="mt-0 mb-16">Mise à jour fréquente de notre application</h3>

                  <p class="m-0">Nous sommes ravis de vous informer que des mises à jour fréquentes de notre application
                    sont désormais disponibles. Nous mettons régulièrement à jour l'application pour :</p><br />

                  <ul>
                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i> Améliorer les
                      performances
                      et la stabilité.</li>
                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i> Ajouter de nouvelles
                      fonctionnalités pour enrichir votre expérience.</li>
                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i> Corriger des bugs et
                      optimiser l'interface.</li>
                    <li class="text-bold"><i class="fa-solid fa-check text-success me-2"></i> Répondre aux retours de
                      nos utilisateurs pour offrir la meilleure expérience possible.</li>
                  </ul>

                </div>

              </div>

              <div class="feature-extended">

                <div class="feature-extended-image">

                  <div class="mockup-bg">
                    <img src="iphone-feature-bg-04.svg" alt="iPhone Feature 04 illustration">
                  </div>

                  <img class="device-mockup is-revealing" src="iphone-feature-04.png" alt="iPhone Feature 04"
                    data-sr-id="4" style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1);">

                </div>

                <div class="feature-extended-body is-revealing" data-sr-id="8"
                  style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -40, 0, 1);">

                  <h3 class="mt-0 mb-16">L’application idéale pour les professionnels !
                  </h3>

                  <p class="m-0">Gérez votre établissement en un clic avec My Bakery, l'application pensée spécialement
                    pour les professionnels de la boulangerie.
                  </p><br />

                  <ul>

                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i>Gérez facilement votre
                      établissement, de la planification à la gestion
                      quotidienne, directement depuis l'application.
                    </li>

                    <li class="text-bold mb-2"><i class="fa-solid fa-check text-success me-2"></i>Suivez l’évolution de
                      votre
                      établissement au quotidien, avec des outils de
                      suivi performants pour vous aider à rester organisé et réactif.</li>

                    <li class="text-bold"><i class="fa-solid fa-check text-success me-2"></i>Grâce à nos quatre
                      abonnements, vous avez la
                      possibilité de modifier et personnaliser votre fiche établissement pour mieux refléter l’identité
                      de votre entreprise.</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  </div>

</template>

<style lang="css">
.bb .content {
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  max-width: 1170px;
  text-align: center;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

@media all and (max-width: 768px) {
  .bb .content {
    padding: 2rem 2rem;
  }
}

.disabled {
  pointer-events: none;
}

.page-add-bakery.section,
.page-add-bakery .section {
  margin-bottom: 0;
}

.h-bakery {
  min-height: 200px;
}

@media all and (max-width: 768px) {
  .h-bakery {
    min-height: auto;
  }
}

@media all and (max-width: 1268px) {
  .h-bakery {
    min-height: auto;
  }
}
</style>

<script>

import { LocalStorage } from 'quasar';
import { defineComponent, onMounted, computed, ref } from 'vue'

export default defineComponent({
  name: 'ApplicationComponent',
  components: {
  },
  setup () {

    return {
      addCartApp () {
        LocalStorage.setItem('shopping_cart', 5)
        LocalStorage.setItem('shopping_cart_qte', 1)
        this.$router.push('/cart')
      }
    }

  },
  mounted () {

    var controller = new ScrollMagic.Controller();

    var revealElements = document.getElementsByClassName("device-mockup");
    for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 50,												 // start a little later
        triggerHook: 0.9,
      })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        .addTo(controller);
    }

    // Header

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 1500) {
        $('header').removeClass('navigation-sticky navigation-unpin')
      } else {
        $('header').removeClass('navigation-sticky navigation-unpin')
      }
    })

    $('.header').addClass('h-bakery')
    $('body').removeClass('loading')
    $('.fadeIn').fadeIn(600)
    $('.fadeIn2').fadeIn(600)
    $('.fadeIn3').fadeIn(600)
    $('.fadeIn7').fadeIn(600)
    $('.fadeIn8').fadeIn(600)

    // Scroll click

    $(document).on('click', '.scroll-click-s', function (e) {
      e.preventDefault()

      const scroll = $(this).data('scroll')

      $([document.documentElement, document.body]).animate({
        scrollTop: $('#' + scroll).offset().top
      }, '200')
    })

    // FOOTER

    // Back to top

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 600) {
        $('#back-top').addClass('active')
      } else {
        $('#back-top').removeClass('active')
      }
    })

    $(document).on('click', '#back-top', function (e) {
      e.preventDefault()
      $('html, body').animate({ scrollTop: 0 })
    })

  }

})

</script>
