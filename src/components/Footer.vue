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
                  <a href="https://www.facebook.com/profile.php?id=100093129302668" target="_blank">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/Mybakery7280" target="_blank">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>

              </ul>

              <div v-if="plateformApp" class="text-center mb-3 grid-app">
                <a href="https://portfolio-gaetan.fr/applications/my-bakery" class="google-play">
                  <img src="google-play.png" alt="Google play">
                </a>
              </div>

              <div v-if="plateformApp" class="text-center grid-app">
                <a href="" class="app-store disabled">
                  <img src="app-store.png" alt="Apple store">
                </a>
              </div>

            </div>

          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

            <div class="widget-newsletter-footer text-center">

              <form id="form-newsletter" class="form-newsletter">

                <h4>Recevez des nouvelles et &amp; offre</h4>

                <div class="form-group">

                  <input v-model="emailNewsletter" id="email_newsletter" name="email_newsletter" class="form-control" type="email"
                    placeholder="Votre adresse email...">

                  <button id="submit_newsletter" v-bind:class="submit !== false ? '' : 'disabled'"
                    @click="submitNewsletter" type="submit">S'abonner</button>

                </div>

                <span class="error-text email_newsletter_error"></span>

                <p>* Ne vous inquiétez pas, nous ne spammons jamais</p>

              </form>

              <q-inner-loading :showing="visible" />

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
                      <a v-bind:class="this.$route.path === '/' ? 'scroll-click' : 'scroll-click-s'" data-scroll="contact"><i
                          class="fa-solid fa-chevron-right me-1"></i> Contact</a>
                    </li>

                    <li>
                      <a @click="this.$router.push('/bakerys');"><i
                          class="fa-solid fa-chevron-right me-1"></i> Boulangeries</a>
                    </li>

                    <li>
                      <a @click="this.$router.push('/blogs');" class="scroll-click" data-scroll="blog"><i class="fa-solid fa-chevron-right me-1"></i>
                        Blog</a>
                    </li>

                    <li>
                      <a @click="this.$router.push('/my-account');"><i class="fa-solid fa-chevron-right me-1"></i> Mon compte</a>
                    </li>

                    <li>
                      <a @click="this.$router.push('/cgu');"><i class="fa-solid fa-chevron-right me-1"></i> Conditions générales d'utilisation</a>
                    </li>

                    <li>
                      <a @click="this.$router.push('/politique-confidentialite');"><i class="fa-solid fa-chevron-right me-1"></i> Politique de confidentialité</a>
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

        <p>© Copyright par <strong>Gaëtan Seigneur - {{ moment().format('YYYY') }}</strong>. Concu par<a
            href="https://portfolio-gaetan.fr"> Dev72</a>.
        </p>

        <p class="mt-1">Plateforme <span class="plateform">{{ plateform }}</span> - Version {{ version }}</p>

      </div>

    </div>

  </footer>

  <div id="back-top" class=""><i class="fa fa-angle-up"></i></div>
</template>

<script>
import { defineComponent } from 'vue'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import $ from 'jquery'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import axios from 'axios'
import moment from 'moment'

export default defineComponent({
  name: 'FooterComponent',
  setup() {

    const $q = useQuasar()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)

    $q.notify.registerType('success-form', {
      icon: 'fa-solid fa-check',
      progress: false,
      color: 'green-6',
      textColor: 'white',
      classes: 'glossy',
      timeout: 3500
    })

    $q.notify.registerType('error-form', {
      icon: 'fa-solid fa-xmark',
      progress: false,
      color: 'red-6',
      textColor: 'white',
      classes: 'glossy',
      timeout: 3500
    })

    return {
      plateform: $q.platform.is.name,
      version: process.env.VERSION,
      plateformApp: $q.platform.is.desktop,
      visible,
      moment: moment,
      showSimulatedReturnData,
      showTextLoading() {
        visible.value = true
        showSimulatedReturnData.value = false

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 3000)
      },
      showNotif() {
        $q.notify({
          type: 'success-form',
          message: 'Votre demande de d\'inscrition à notre lettre d\'actualité à bien été pris en compte.'
        })
      },
      errorNotif(message = null) {
        $q.notify({
          type: 'error-form',
          message: message ? message : 'Une erreur est survenue dans le formulaire.'
        })
      }
    }
  },
  data () {
    $(document).on('keyup', '#form-newsletter', function (e) {

      if ($('#email_newsletter').val().length >= 2) {
        $('#submit_newsletter').removeClass('disabled')
      } else {
        $('#submit_newsletter').addClass('disabled')
      }

    })

    return {
      v$: useValidate(),
      submit: false,
      emailNewsletter: null
    }
  },
  methods: {
    submitNewsletter(e) {
      e.preventDefault();

      this.v$.$validate() // checks all inputs

      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.emailNewsletter)

      if (valid) {

        $('.' + 'email_newsletter' + '_error').removeAttr()
        $('.' + 'email_newsletter' + '_error').text("");

        if (!this.v$.$error) {

          axios.post(process.env.WEBSITE + '/newsletter', { 'emailNewsletter': this.emailNewsletter })
            .then((res) => {

              if (res.data.success === true) {

                this.showNotif()

                setTimeout(() => {
                  $(document).find('.error-text').text('')
                  $(document).find('.error-text').removeAttr()
                  $('#form-newsletter').find('input').val('')
                  this.submit = false
                  $('#submit_newsletter').addClass('disabled')

                  this.email = null

                }, 3500);

              } else {
                this.errorNotif(res.data.message)
              }

            })
            .catch((error) => {
              this.errorNotif()
            })

        } else {

          this.submit = false

          if (this.emailNewsletter) {

            this.submit = true

            return true
          }

          if (!this.emailNewsletter) {
            $('.' + 'email_newsletter' + '_error').attr('style', 'display: block')
            $('.' + 'email_newsletter' + '_error').text("Le champs adresse email est obligatoire !");
          } else {
            $('.' + 'email_newsletter' + '_error').removeAttr()
            $('.' + 'email_newsletter' + '_error').text("");
          }

        }

      } else {

        $('.' + 'email_newsletter' + '_error').attr('style', 'display: block')
        $('.' + 'email_newsletter' + '_error').text("Le champs adresse email n'est pas valide !");

      }
    }
  },
  validations() {
    return {
      emailNewsletter: { required },
    }
  }
})
</script>
