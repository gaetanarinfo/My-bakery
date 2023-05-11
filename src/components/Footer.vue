<template name="FooterComponent">
  <footer class="footer fadeIn8">

    <div class="footer-content">

      <div class="container">

        <div class="row">

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

            <div class="widget">

              <a href="/" class="logo">
                <img src="logo-dark.png" alt="My Bakery">
              </a>

              <p>Retrouvez toutes les meilleures boulangeries en France sur My bakery.</p>

              <ul class="list-social">

                <li>
                  <a href="">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>

              </ul>

              <div class="text-center mb-3 grid-app">
                <a href="" class="google-play">
                  <img src="google-play.png" alt="Google play">
                </a>
              </div>

              <div class="text-center grid-app">
                <a href="" class="app-store">
                  <img src="app-store.png" alt="Apple store">
                </a>
              </div>

            </div>

          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

            <div class="widget-newsletter-footer text-center">

              <form class="form-newsletter">

                <h4>Recevez des nouvelles et &amp; offre</h4>

                <div class="form-group">

                  <input class="form-control" name="email" type="text" placeholder="Votre adresse email...">

                  <button>S'abonner</button>

                </div>

                <p>* Ne vous inquiétez pas, nous ne spammons jamais</p>

                <p>&nbsp;</p>

              </form>

            </div>

            <div id="a-propos" class="widget-contact-footer">

              <div class="footer-contact text-center">

                <h4>Contactez-moi</h4>

                <p>125 avenue Félix Geneslay 72100 Le Mans, France</p>

                <p>(+33) 6-15-75-93-02</p>

              </div>

            </div>

          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

            <div class="widget-text text-center">

              <div class="textwidget">

                <div class="footer-open">

                  <h4>My backery</h4>

                  <ul>

                    <li>
                      <a href="/"><i class="fa-solid fa-chevron-right me-1"></i> Accueil</a>
                    </li>

                    <li>
                      <a href="#" class="scroll-click" data-scroll="a-propos"><i
                          class="fa-solid fa-chevron-right me-1"></i> À propos de nous</a>
                    </li>

                    <li>
                      <a href="#" class="scroll-click" data-scroll="contact"><i
                          class="fa-solid fa-chevron-right me-1"></i> Contact</a>
                    </li>

                    <li>
                      <a href="#" class="scroll-click" data-scroll="classement"><i
                          class="fa-solid fa-chevron-right me-1"></i> Classement</a>
                    </li>

                    <li>
                      <a href="#" class="scroll-click" data-scroll="blog"><i class="fa-solid fa-chevron-right me-1"></i>
                        Blog</a>
                    </li>

                    <li>
                      <a href="#"><i class="fa-solid fa-chevron-right me-1"></i> Espace membre</a>
                    </li>

                    <li>
                      <a href="#"><i class="fa-solid fa-chevron-right me-1"></i> Conditions générales d'utilisation</a>
                    </li>

                    <li>
                      <a href="#"><i class="fa-solid fa-chevron-right me-1"></i> Politique de confidentialité</a>
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    <div class="footer-copyright">

      <div class="container">

        <p>© Copyright par <strong>Gaëtan Seigneur</strong>. Concu par<a href="https://portfolio-gaetan.fr"> Dev72.</a>
        </p>

      </div>

    </div>

  </footer>

  <div id="back-top" class=""><i class="fa fa-angle-up"></i></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  props: {}
})
</script>
