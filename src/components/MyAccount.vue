<template name="MyAccount">
  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>Mon compte</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Mon compte</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="login" class="section fadeIn3">

    <div class="content b-80 b-80">

      <div class="container clear">

        <div class="u-column1 col-1" v-show="showSimulatedReturnData">

          <h2>Connexion</h2>

          <form class="login bakery-detail">

            <p class="form-group">
              <label for="username">Adresse email <span class="required">*</span></label>
              <input @keyup="erraseData('username')" v-model="username" type="text" class="form-control" name="username"
                id="username">
            <p class="error-text username_error"></p>
            </p>

            <p class="form-group">
              <label for="password">Mot de passe <span class="required">*</span></label>
            <div class="input-group">
              <input @keyup="erraseData('password')" v-model="password" class="form-control" type="password"
                name="password" id="password">
              <div class="input-group-prepend">
                <span class="input-group-text" id="show-password"><i class="fa-solid fa-eye"></i></span>
              </div>
            </div>
            <p class="error-text password_error"></p>
            </p>

            <p class="form-group form-row">

              <button @click="login" type="submit" class="btn btn-bakery">Connexion</button>

              <label class="ms-3">
                <input true-value="true" false-value="false" @change="remember" v-model="rememberme"
                  class="form-check-input" name="rememberme" type="checkbox" id="rememberme">
                <span class="ms-1">Se souvenir de moi</span>
              </label>

            </p>

            <p class="form-group">
              <a role="button" @click="this.$router.push('/forgot-password')">Mot de passe perdu ?</a>
            </p>

          </form>

        </div>

        <div class="u-column2 col-2" v-show="showSimulatedReturnData">

          <h2>Inscription</h2>

          <form method="post" class="register bakery-detail">

            <p class="form-group">
              <label for="reg_email">Adresse email <span class="required">*</span></label>
              <input v-model="reg_email" type="email" class="form-control" name="email" id="reg_email">
            <p class="error-text reg_email_error"></p>
            </p>

            <p class="form-group">
              <label for="reg_firstname">Prénom <span class="required">*</span></label>
              <input v-model="reg_firstname" type="text" class="form-control" name="firstname" id="reg_firstname">
            <p class="error-text reg_firstname_error"></p>
            </p>

            <p class="form-group">
              <label for="reg_lastname">Nom <span class="required">*</span></label>
              <input v-model="reg_lastname" type="text" class="form-control" name="lastname" id="reg_lastname">
            <p class="error-text reg_lastname_error"></p>
            </p>

            <p class="form-group">
              <label for="reg_function">Poste occupé <span class="required">*</span></label>
              <input v-model="reg_function" type="text" placeholder="ex : Ouvrier" class="form-control" name="function"
                id="reg_function">
            <p class="error-text reg_function_error"></p>
            </p>

            <p class="form-group">
              <label for="reg_location">Localisation <span class="required">*</span></label>
              <input v-model="reg_location" placeholder="ex : Le Mans" type="text" class="form-control" name="location"
                id="reg_location">
            <p class="error-text reg_location_error"></p>
            </p>

            <p class="form-group">
              <label for="reg_mobile">Mobile</label>
              <input v-model="reg_mobile" type="tel" class="form-control" name="mobile" id="reg_mobile">
            </p>

            <p class="form-group">
              <label for="reg_phone">Téléphone fixe</label>
              <input v-model="reg_phone" type="tel" class="form-control" name="fixe" id="reg_phone">
            </p>

            <div class="privacy-policy-text">
              <p>Vos données personnelles seront utilisées pour soutenir votre expérience sur ce site Web, pour gérer
                l'accès à votre compte, et à d'autres fins décrites dans notre <a role="button"
                  @click="this.$router.push('/politique-confidentialite');" target="_blank">politique de
                  confidentialité</a>.</p>
            </div>

            <p class="form-group woocomerce-FormRow form-row">
              <button @click="register" type="submit" class="btn btn-bakery">S'inscrire</button>
            </p>

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
import useValidate from '@vuelidate/core'
import { useStore } from 'vuex'
import { LocalStorage, useQuasar } from 'quasar'
import moment from 'moment'
import { ref } from 'vue'
import { Cookies } from 'quasar'
import axios from 'axios'

moment.locale('fr')

var switcher = 0

$(document).on('click', '#show-password', function (e) {

  e.preventDefault();

  if (switcher == 0) {
    $(this).find('i.fa-solid.fa-eye').removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
    $(document).find('#password').attr('type', 'text');
    switcher = 1;
  } else {
    $(this).find('i.fa-solid.fa-eye-slash').removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
    $(document).find('#password').attr('type', 'password');
    switcher = 0;
  }

})

export default defineComponent({
  name: 'MyAccount',
  setup () {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const $q = useQuasar()

    const stateUser = computed(() => {
      return store.state.stateUser
    })

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
      showTextLoading (express = null) {
        visible.value = true
        $('.u-column1').fadeOut(300)
        $('.u-column2').fadeOut(300)
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
      stateUser,
      moment: moment,
      Cookies: Cookies,
      showSimulatedReturnData,
    }
  },
  data () {

    return {
      v$: useValidate(),

      reg_email: null,
      reg_firstname: null,
      reg_lastname: null,
      reg_function: null,
      reg_location: null,
      reg_mobile: null,
      reg_phone: null,

      password: (localStorage.getItem('password') !== null) ? localStorage.getItem('password') : null,
      rememberme: (localStorage.getItem('username') !== null && localStorage.getItem('password') !== null) ? "true" : "false",
      userLoggedIn: false,
      username: (localStorage.getItem('username') !== null) ? localStorage.getItem('username') : null,
    }
  },
  methods: {
    register (e) {

      e.preventDefault()

      this.v$.$validate() // checks all inputs

      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.reg_email)

      if (valid) {

        $('.' + 'reqEmail' + '_error').removeAttr()
        $('.' + 'reqEmail' + '_error').text("");

        if (this.reg_email && this.reg_firstname && this.reg_lastname && this.reg_function && reg_location) {

          this.showTextLoading()

          axios.post(process.env.WEBSITE + '/register', {
            'email': this.reg_email,
            'firstname': this.reg_firstname,
            'lastname': this.reg_lastname,
            'fonction': this.reg_function,
            'location': this.reg_location,
            'phone': this.reg_phone,
            'mobile': this.reg_mobile,
          })
            .then((res) => {

              if (res.data.success === true) {

                this.showNotif('Votre inscription a bien été pris en compte, un email de validation vous a été adressé !')

                setTimeout(() => {
                  $(document).find('.error-text').text('')
                  $(document).find('.error-text').removeAttr()
                  $('#login').find('input').val('')

                  this.reg_email = null
                  this.reg_firstname = null
                  this.reg_lastname = null
                  this.reg_function = null
                  this.reg_location = null
                  this.reg_mobile = null
                  this.reg_phone = null

                }, 3500);

              } else {
                this.errorNotif(res.data.message)
              }

            })
            .catch((error) => {
              this.errorNotif()
            })

        }

      } else {

        $('.' + 'reg_email' + '_error').attr('style', 'display: block')
        $('.' + 'reg_email' + '_error').text("Le champs adresse email n'est pas valide !");

      }

      if (!this.reg_firstname) {
        $('.' + 'reg_firstname' + '_error').attr('style', 'display: block')
        $('.' + 'reg_firstname' + '_error').text("Le champs prénom est obligatoire !");
      } else {
        $('.' + 'reg_firstname' + '_error').removeAttr()
        $('.' + 'reg_firstname' + '_error').text("");
      }

      if (!this.reg_lastname) {
        $('.' + 'reg_lastname' + '_error').attr('style', 'display: block')
        $('.' + 'reg_lastname' + '_error').text("Le champs nom est obligatoire !");
      } else {
        $('.' + 'reg_lastname' + '_error').removeAttr()
        $('.' + 'reg_lastname' + '_error').text("");
      }

      if (!this.reg_function) {
        $('.' + 'reg_function' + '_error').attr('style', 'display: block')
        $('.' + 'reg_function' + '_error').text("Le champs fonction est obligatoire !");
      } else {
        $('.' + 'reg_function' + '_error').removeAttr()
        $('.' + 'reg_function' + '_error').text("");
      }

      if (!this.reg_location) {
        $('.' + 'reg_location' + '_error').attr('style', 'display: block')
        $('.' + 'reg_location' + '_error').text("Le champs location est obligatoire !");
      } else {
        $('.' + 'reg_location' + '_error').removeAttr()
        $('.' + 'reg_location' + '_error').text("");
      }

      if (!this.reg_email) {
        $('.' + 'reg_email' + '_error').attr('style', 'display: block')
        $('.' + 'reg_email' + '_error').text("Le champs adresse email est obligatoire !");
      } else {
        $('.' + 'reg_email' + '_error').removeAttr()
        $('.' + 'reg_email' + '_error').text("");
      }

    },
    login (e) {

      e.preventDefault()

      this.v$.$validate() // checks all inputs

      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.username)

      if (valid) {

        $('.' + 'username' + '_error').removeAttr()
        $('.' + 'username' + '_error').text("");

        if (this.username && this.password) {

          axios.post(process.env.WEBSITE + '/login', { 'username': this.username, 'password': this.password })
            .then((res) => {

              this.showTextLoading('login')

              if (res.data.success === true) {

                const token = res.data.token

                this.stateUser.token = token;

                sessionStorage.setItem('token', token)

                this.showNotif('Connexion réussi, vous allez être redirigé !')

                setTimeout(() => {
                  $(document).find('.error-text').text('')
                  $(document).find('.error-text').removeAttr()
                  $('#login').find('input').val('')

                  this.username = null
                  this.password = null

                  if (LocalStorage.has('prev_url')) {
                    this.$router.push(LocalStorage.getItem('prev_url'));
                  } else {
                    this.$router.push("/")
                  }

                }, 3500);

              } else {
                this.errorNotif(res.data.message)
                this.showTextLoading()
              }

            })
            .catch((error) => {
              this.errorNotif()
            })

        } else {

          if (!this.username) {
            $('.' + 'username' + '_error').attr('style', 'display: block')
            $('.' + 'username' + '_error').text("Le champs adresse email est obligatoire !");
          } else {
            $('.' + 'username' + '_error').removeAttr()
            $('.' + 'username' + '_error').text("");
          }

          if (!this.password) {
            $('.' + 'password' + '_error').attr('style', 'display: block')
            $('.' + 'password' + '_error').text("Le champs mot de passe est obligatoire !");
          } else {
            $('.' + 'password' + '_error').removeAttr()
            $('.' + 'password' + '_error').text("");
          }

        }

      } else {

        $('.' + 'username' + '_error').attr('style', 'display: block')
        $('.' + 'username' + '_error').text("Le champs adresse email n'est pas valide !");

      }

    },
    remember () {

      if (this.rememberme === "true") {
        localStorage.setItem('username', this.username)
        localStorage.setItem('password', this.password)
      } else {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
      }

    },
    erraseData (string) {

      if (localStorage.getItem(string) !== null) {
        if (string === "username") localStorage.setItem(string, this.username)
        if (string === "password") localStorage.setItem(string, this.password)
      }

    }
  },
  validations () {
    return {

    }
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

  }
})
</script>
