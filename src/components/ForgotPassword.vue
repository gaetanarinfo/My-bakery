<template name="ForgotPasswordComponent">
  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>Modification de votre mot de passe</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Modification de votre mot de passe</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div v-if="!route.params.token" id="login" class="forgot section fadeIn3">

    <div class="content b-80 b-80">

      <div class="container">

        <div class="u-column1 col-1 text-center" style="float: none; width: 100%;" v-show="showSimulatedReturnData">

          <h2 class="mb-3">Vous avez perdu l'accès à votre compte ?</h2>

          <p class="mb-5">Pas de panique, remplisser le formulaire ci-dessous.</p>

          <form class="bakery-detail" style="max-width: 350px;">

            <p class="form-group text-start">
              <label for="emailForgot">Adresse email <span class="required">*</span></label>
              <input style="border-bottom: 1px solid #c79732;" v-model="emailForgot" type="text" class="form-control"
                name="emailForgot" id="emailForgot">
            <p class="error-text email_forgot_error"></p>
            </p>

            <div class="text-center">
              <button @click="forgot" class="btn btn-bakery">Valider</button>
            </div>

          </form>

        </div>

        <div class="loadingDiv" v-show="visible">
          <q-spinner-grid size="70px" color="info" />
        </div>

      </div>

    </div>

  </div>

  <div v-else id="login" class="forgot section fadeIn3">

    <div class="content b-80 b-80">

      <div class="container">

        <div class="u-column1 col-1 text-center" style="float: none; width: 100%;" v-show="showSimulatedReturnData">

          <h2 class="mb-3">Vous avez perdu l'accès à votre compte ?</h2>

          <p class="mb-5">Pas de panique, remplisser le formulaire ci-dessous.</p>

          <form class="bakery-detail" style="max-width: 350px;">

            <p class="form-group text-start">
              <label for="passwordForgot">Nouveau mot de passe <span class="required">*</span></label>
            <div class="input-group">
              <input style="border-bottom: 1px solid #c79732;" v-model="passwordForgot" type="password"
                class="form-control" name="passwordForgot" id="passwordForgot">
              <div class="input-group-prepend">
                <span class="input-group-text" id="show-password"><i class="fa-solid fa-eye"></i></span>
              </div>
            </div>
            <p class="error-text password_forgot_error"></p>
            </p>

            <p class="form-group text-start">
              <label for="passwordForgotConfirmation">Confirmer votre nouveau mot de passe <span
                  class="required">*</span></label>
            <div class="input-group">
              <input style="border-bottom: 1px solid #c79732;" v-model="passwordForgotConfirmation" type="password"
                class="form-control" name="passwordForgotConfirmation" id="passwordForgotConfirmation">
              <div class="input-group-prepend">
                <span class="input-group-text" id="show-password-2"><i class="fa-solid fa-eye"></i></span>
              </div>
            </div>
            <p class="error-text password_confirmation_forgot_error"></p>
            </p>

            <div class="text-center">
              <button @click="forgotPassword" class="btn btn-bakery">Valider</button>
            </div>

          </form>

        </div>

        <div class="loadingDiv" v-show="visible">
          <q-spinner-grid size="70px" color="info" />
        </div>

      </div>

    </div>

  </div>
</template>

<style lang="css">
.last-bakery .column-inner .wrapper .bloc .section:last-child img {
  max-width: 100%;
  cursor: pointer;
  width: 100%;
  height: 300px;
}

.disabled {
  pointer-events: none;
}

.section {
  margin-bottom: 0;
}

.h-blog {
  min-height: 200px;
}

@media all and (max-width: 768px) {
  .h-blog {
    min-height: 100%;
  }
}

#blog {
  padding: 5rem 0;
}
</style>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import HeaderComponent from 'components/Header.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar'
import moment from 'moment'
import { ref } from 'vue'
import { Cookies } from 'quasar'
import axios from 'axios'

var switcher = 0,
  switcher2 = 0

$(document).on('click', '#show-password', function (e) {

  e.preventDefault();

  if (switcher == 0) {
    $(this).find('i.fa-solid.fa-eye').removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
    $(document).find('#passwordForgot').attr('type', 'text');
    switcher = 1;
  } else if (switcher != 0) {
    $(this).find('i.fa-solid.fa-eye-slash').removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
    $(document).find('#passwordForgot').attr('type', 'password');
    switcher = 0;
  }

})

$(document).on('click', '#show-password-2', function (e) {

  e.preventDefault();

  if (switcher2 == 0) {
    $(this).find('i.fa-solid.fa-eye').removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
    $(document).find('#passwordForgotConfirmation').attr('type', 'text');
    switcher2 = 1;
  } else {
    $(this).find('i.fa-solid.fa-eye-slash').removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
    $(document).find('#passwordForgotConfirmation').attr('type', 'password');
    switcher2 = 0;
  }

})

export default defineComponent({
  name: 'ForgotPasswordComponent',
  setup () {
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const $q = useQuasar()
    const route = useRoute()
    const store = useStore()

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

    // Vérification du token pour le mot de passe perdu
    if (route.params.token !== "") {
      store.dispatch('fetchVerificationTokenForgot',
        {
          'token': route.params.token
        })
    }

    return {
      showTextLoading (express = null) {
        visible.value = true
        $('.u-column1').fadeOut(300)
        showSimulatedReturnData.value = false

        if (express === null) {
          setTimeout(() => {
            visible.value = false
            showSimulatedReturnData.value = true
          }, 3000)
        }
      },
      showNotif (message) {
        $q.notify({
          type: 'success-form',
          message: message
        })
      },
      errorNotif (message = null) {
        $q.notify({
          type: 'error-form',
          message: message ? message : 'Une erreur est survenue dans le formulaire.'
        })
      },
      visible,
      moment: moment,
      route: route,
      Cookies: Cookies,
      showSimulatedReturnData,
    }
  },
  data () {
    return {
      v$: useValidate(),
      emailForgot: null,
      passwordForgot: null,
      passwordForgotConfirmation: null
    }
  },
  methods: {
    forgot (e) {

      e.preventDefault()

      this.v$.$validate() // checks all inputs

      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.emailForgot)

      if (valid) {

        $('.' + 'email_forgot' + '_error').removeAttr()
        $('.' + 'email_forgot' + '_error').text("");

        if (this.emailForgot) {

          this.showTextLoading()

          axios.post(process.env.WEBSITE + '/forgot-password', { 'email': this.emailForgot })
            .then((res) => {

              if (res.data.success === true) {

                this.showNotif('Un email vous a été envoyé sur ' + this.emailForgot + ', pour modifier votre mot de passe !')

                setTimeout(() => {
                  $(document).find('.error-text').text('')
                  $(document).find('.error-text').removeAttr()
                  $('#login').find('input').val('')

                  this.reg_email = null

                }, 3500);

              } else {
                this.errorNotif(res.data.message)
              }

            })
            .catch((error) => {
              this.errorNotif()
            })

        } else {

          if (!this.emailForgot) {
            $('.' + 'email_forgot' + '_error').attr('style', 'display: block')
            $('.' + 'email_forgot' + '_error').text("Le champs adresse email est obligatoire !");
          } else {
            $('.' + 'email_forgot' + '_error').removeAttr()
            $('.' + 'email_forgot' + '_error').text("");
          }

        }

      } else {

        $('.' + 'email_forgot' + '_error').attr('style', 'display: block')
        $('.' + 'email_forgot' + '_error').text("Le champs adresse email n'est pas valide !");

      }

    },
    forgotPassword (e) {

      e.preventDefault()

      var passwordForgot = parseInt($(document).find('#passwordForgot').val().length),
        password_confirmation_forgot = parseInt($(document).find('#passwordForgotConfirmation').val().length)

      if (this.passwordForgot && this.passwordForgotConfirmation) {

        $(document).find('.error-text').text('')

        if (this.passwordForgot === this.passwordForgotConfirmation && (passwordForgot > 7 || password_confirmation_forgot > 7)) {

          this.showTextLoading()

          axios.post(process.env.WEBSITE + '/forgot-password-token', { 'token': this.$route.params.token, 'newPassword': this.passwordForgot })
            .then((res) => {

              if (res.data.success === true) {

                this.showNotif('Votre mot de passe a bien été modifié !')

                setTimeout(() => {
                  $(document).find('.error-text').text('')
                  $(document).find('.error-text').removeAttr()
                  $('#login').find('input').val('')

                  this.$router.push('/my-account')

                  this.reg_email = null

                }, 3500);

              } else {
                this.errorNotif(res.data.message)
              }

            })
            .catch((error) => {
              this.errorNotif()
            })

        } else {
          if (!this.passwordForgotConfirmation) {
           $('.' + 'password_confirmation_forgot' + '_error').attr('style', 'display: block')
            $('.' + 'password_confirmation_forgot' + '_error').text("Le champs confirmation du mot de passe est obligatoire !");
          } else {
            $('.' + 'password_confirmation_forgot' + '_error').removeAttr()
            $('.' + 'password_confirmation_forgot' + '_error').text("");
          }
        }

      } else {
      }

      if (this.passwordForgot !== this.passwordForgotConfirmation) {
        $('.' + 'password_confirmation_forgot' + '_error').attr('style', 'display: block')
        $('.' + 'password_confirmation_forgot' + '_error').text("Les mots de passe ne correspondent pas !");
      } else {
        $('.' + 'password_confirmation_forgot' + '_error').removeAttr()
        $('.' + 'password_confirmation_forgot' + '_error').text("");
      }

      if (!this.passwordForgot) {
        $('.' + 'password_forgot' + '_error').attr('style', 'display: block')
        $('.' + 'password_forgot' + '_error').text("Le champs mot de passe est obligatoire !");
      } else {
       $('.' + 'password_forgot' + '_error').removeAttr()
        $('.' + 'password_forgot' + '_error').text("");
      }

      if (passwordForgot < 7) {
        $('.' + 'password_forgot' + '_error').attr('style', 'display: block')
        $('.' + 'password_forgot' + '_error').text("Le mot de passe doit être supèrieur à 8 caractères !");
      } else {
      }

      if (password_confirmation_forgot < 7) {
        $('.' + 'password_confirmation_forgot' + '_error').attr('style', 'display: block')
        $('.' + 'password_confirmation_forgot' + '_error').text("Le mot de passe doit être supèrieur à 8 caractères !");
      } else {
      }
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    Section7,
  },
  mounted () {

    if (sessionStorage.getItem('token') !== null) {
      location.href = '/'
    }

    $('#menu-main-menu').removeAttr('style')

    // Header menu

    $(document).on('click', '.menu-toggle-2:not(.active)', function (e) {
      e.preventDefault()

      $(this).addClass('active')

      $('#menu-main-menu').fadeIn(300)

    })

    $(document).on('click', '.menu-toggle-2.active', function (e) {
      e.preventDefault()

      $(this).removeClass('active')

      $('#menu-main-menu').fadeOut(300)

    })

    $(document).on('click', '#menu-main-menu .menu-item', function (e) {

      $('.menu-toggle-2').removeClass('active')

      $('#menu-main-menu').fadeOut(300)

    })

    $(document).on('click', '#blog .btn-target', function (e) {
      e.preventDefault()
      var url = $(this).attr('href')
      location.href = url
    })

    // Header

    $('.header').addClass('h-blog')
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
      console.log('test')
      $('html, body').animate({ scrollTop: 0 }, 600)
    })

    // Header menu

    setTimeout(() => {
      $('.search-btn').on('click', function (e) {
        e.preventDefault()

        $('.searchbox').addClass('active')
        $('body').css({
          overflow: 'hidden'
        })
      })

      $('.searchbox-remove').on('click', function (e) {
        e.preventDefault()

        $('.searchbox').removeClass('active')
        $('body').css({
          overflow: 'auto'
        })
      })
    }, 1000)

  },
  validations () {
    return {
      emailForgot: { required },
    }
  }
})
</script>
