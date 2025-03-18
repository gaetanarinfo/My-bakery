<template name="MyAccount">
  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>Mon compte</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="active">Mon compte</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="login" class="page-my-account section fadeIn3">

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

            <hr />

            <div class="flex items-center justify-center mt-5 mb-5">

              <a :href="'https://serveur.my-bakery.fr/auth/google/' + plateform" class="google-button">
                <img src="google-color.svg" loading="lazy" alt="google logo">
                <span>Connectez-vous avec Google</span>
              </a>

            </div>

          </form>

        </div>

        <div class="u-column2 col-2" v-show="showSimulatedReturnData">

          <h2>Inscription</h2>

          <form method="post" class="register bakery-detail">

            <p class="form-group mb-0">
              <label>Vous êtes <span class="required">*</span></label>
            </p>

            <div class="status_legale">

              <div>
                <input type="radio" @click="erraseForm" class="btn-check" name="status_legale" value="1"
                  v-model="reg_status_legale" id="status_legale_radio" checked autocomplete="off">
                <label class="btn btn-bakery" for="status_legale_radio"><i class="fa-solid fa-user me-2"></i>Un
                  particulier</label>
              </div>

              <div>
                <input type="radio" class="btn-check" name="status_legale" value="2" v-model="reg_status_legale"
                  id="status_legale_radio_2" autocomplete="off">
                <label class="btn btn-bakery" for="status_legale_radio_2"><i class="fa-solid fa-user-tie me-2"></i>Un
                  professionnel</label>
              </div>

            </div>

            <div class="row" v-if="reg_status_legale === '2'">

              <p class="col form-group">
                <label for="reg_siret">Numéro de siret <span class="required">*</span></label>
                <input v-model="reg_siret" type="text" maxlength="14" class="form-control" name="reg_siret"
                  id="reg_siret">
              <p class="error-text reg_siret_error"></p>
              </p>

              <p class="col form-group">
                <label for="reg_tva">Numéro de TVA <span class="required">*</span></label>
                <input v-model="reg_tva" type="" maxlength="9" class="form-control" name="reg_tva" id="reg_tva">
              <p class="error-text reg_tva_error"></p>
              </p>

            </div>

            <div class="row" v-if="reg_status_legale === '2'">

              <p class="form-group">
                <label for="reg_budget" class="form-label">Budjet publicitaire sur une année - <strong>({{ reg_budget }}
                    €)</strong></label>
                <input type="range" class="form-range accent" min="0" max="10000" v-model="reg_budget" name="reg_budget"
                  id="reg_budget">
              </p>

            </div>

            <div class="row" v-if="reg_status_legale === '2'">

              <p class="form-group">
                <label for="reg_known">Comment avez vous connu My Bakery ? <span class="required">*</span></label>
                <textarea v-model="reg_known" maxlength="200" class="form-control" name="reg_known"
                  id="reg_known"></textarea>
              <p class="error-text reg_known_error"></p>
              </p>

            </div>

            <hr v-if="reg_status_legale === '2'" class="mb-4" />

            <div class="row">

              <p class="form-group">
                <label for="reg_email">Adresse email <span class="required">*</span></label>
                <input v-model="reg_email" type="email" class="form-control" name="email" id="reg_email">
              <p class="error-text reg_email_error"></p>
              </p>

            </div>

            <div class="row">

              <p class="col form-group">
                <label for="reg_firstname">Prénom <span class="required">*</span></label>
                <input v-model="reg_firstname" type="text" class="form-control" name="firstname" id="reg_firstname">
              <p class="error-text reg_firstname_error"></p>
              </p>

              <p class="col form-group">
                <label for="reg_lastname">Nom <span class="required">*</span></label>
                <input v-model="reg_lastname" type="text" class="form-control" name="lastname" id="reg_lastname">
              <p class="error-text reg_lastname_error"></p>
              </p>

            </div>

            <div class="row">

              <p class="col form-group">
                <label for="reg_function">Poste occupé <span class="required">*</span></label>
                <input v-model="reg_function" type="text" placeholder="ex : Ouvrier" class="form-control"
                  name="function" id="reg_function">
              <p class="error-text reg_function_error"></p>
              </p>

            </div>

            <div class="position-relative">

              <p class="form-group">
                <label for="reg_loction">Adresse <span class="required">*</span></label>
                <input @keyup="getAdresseApi()" placeholder="ex : 15 rue des roses, Le Mans, 72100 France" type="text"
                  class="form-control" name="reg_location" id="reg_location">
              </p>

              <div class="search-place">
                <ul></ul>
              </div>

              <p class="error-text reg_location_error"></p>

            </div>

            <div class="row">

              <p class="col form-group">
                <label for="reg_mobile">Téléphone Mobile</label>
                <input v-model="reg_mobile" type="tel" class="form-control" name="mobile" id="reg_mobile">
              </p>

              <p class="col form-group">
                <label for="reg_phone">Téléphone fixe</label>
                <input v-model="reg_phone" type="tel" class="form-control" name="fixe" id="reg_phone">
              </p>

            </div>

            <div class="privacy-policy-text">
              <p>Vos données personnelles seront utilisées pour soutenir votre expérience sur ce site Web, pour gérer
                l'accès à votre compte, et à d'autres fins décrites dans notre <a role="button"
                  @click="this.$router.push('/politique-confidentialite');" target="_blank">politique de
                  confidentialité</a>.</p>
            </div>

            <p class="form-group woocomerce-FormRow form-row">
              <button @click="register" type="submit" class="btn btn-bakery">Terminer l'inscription</button>
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
.page-my-account.section,
.page-my-account .section {
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
import { Platform } from 'quasar'

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

const application_id = ref(''),
  plateform = ref(''),
  reg_pays = ref(null),
  reg_pays_code = ref(null),
  reg_departement = ref(null),
  reg_ville = ref(null),
  reg_postcode = ref(null),
  reg_department_code = ref(null)

if (Platform.is.android) {
  plateform.value = 'mobile'
}

if (Platform.is.ios) {
  plateform.value = 'mobile'
}

if (Platform.is.desktop) {
  plateform.value = 'desktop'
}

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

    const searchPlace = computed(() => {
      return store.state.searchPlace
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
      erraseForm () {

        this.reg_known = null
        this.reg_siret = null
        this.reg_tva = null
        this.reg_budget = 0

      },
      getAdresseApi () {

        var value = $('#reg_location').val()

        if (value.length >= 2) {

          $('.search-place').fadeIn(200)

          $('.search-place ul').html('<div style="position: relative;display: flex;width: 100%;align-items: center;justify-content: center;"><svg class="q-spinner text-warning" width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g></svg></div>')

          setTimeout(() => {

            $('.search-place ul').html('')

            store.dispatch('fetchSearchPlace', {
              search: value.trim()
            })

            if (this.searchPlace.length >= 1) {
              this.searchPlace.forEach(element => {
                $('.search-place ul').append('<li class="place-clic" data-adresse="' + element.formatted + '" data-pays="' + element.country + '" data-pays_code="' + element.country_code + '" data-departement="' + element.county + '" data-ville="' + element.city + '" data-postcode="' + element.postcode + '" data-department_code="' + element.department_COG + '"><i class="fa-solid fa-location-dot me-2"></i>' + element.formatted + '</li>')
              });
            } else {
              $('.search-place ul').html('<li>Il n\'y a aucun résultat correspondant à votre recherche !</li>')
              this.searchPlace = []
            }

          }, 2000);

        } else {
          $('.search-place').fadeOut(200)
          this.searchPlace = []
        }

      },
      searchPlace,
      plateform,
      application_id,
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
      reg_mobile: null,
      reg_phone: null,

      reg_pays,
      reg_pays_code,
      reg_departement,
      reg_ville,
      reg_postcode,
      reg_department_code,

      reg_status_legale: '1',
      reg_siret: null,
      reg_tva: null,
      reg_known: null,
      reg_budget: 0,

      password: (localStorage.getItem('password') !== null) ? localStorage.getItem('password') : null,
      rememberme: (localStorage.getItem('username') !== null && localStorage.getItem('password') !== null) ? "true" : "false",
      userLoggedIn: false,
      username: (localStorage.getItem('username') !== null) ? localStorage.getItem('username') : null,
    }
  },
  methods: {
    register (e) {

      e.preventDefault()

      var reg_location = $('#reg_location').val()

      this.v$.$validate() // checks all inputs

      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.reg_email)

      if (valid) {

        $('.' + 'reqEmail' + '_error').removeAttr()
        $('.' + 'reqEmail' + '_error').text("");

        fetch('https://api.ipify.org?format=json')
            .then(x => x.json())
            .then(({ ip }) => {

          var options = {
            'email': this.reg_email,
            'status_legale': this.reg_status_legale,
            'siret': this.reg_siret,
            'tva': this.reg_tva,
            'known': this.reg_known,
            'budget': this.reg_budget,
            'firstname': this.reg_firstname,
            'lastname': this.reg_lastname,
            'fonction': this.reg_function,
            'location': reg_location,
            'pays': reg_pays.value,
            'pays_code': reg_pays_code.value,
            'departement': reg_departement.value,
            'ville': reg_ville.value,
            'postcode': reg_postcode.value,
            'department_code': reg_department_code.value,
            'phone': this.reg_phone,
            'mobile': this.reg_mobile,
            'application_id': application_id.value,
            'ip': ip
          }

          if (this.reg_status_legale === '1' && this.reg_email && this.reg_firstname && this.reg_lastname && this.reg_function && reg_location) {

            this.showTextLoading()

            axios.post(process.env.WEBSITE + '/register', options)
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
                    reg_location = null
                    this.reg_mobile = null
                    this.reg_phone = null
                    this.pays.value = null
                    this.pays_code.value = null
                    this.departement.value = null
                    this.ville.value = null
                    this.postcode.value = null
                    this.department_code.value = null
                    this.req_status_legal = 1
                    this.reg_siret = null
                    this.reg_tva = null
                    this.reg_known = null
                    this.reg_budget = 0

                  }, 3500);

                } else {
                  this.errorNotif(res.data.message)
                }

              })
              .catch((error) => {
                this.errorNotif()
              })

          }

          if (this.reg_status_legale === '2' && this.reg_budget && this.reg_siret && this.reg_tva && this.reg_known && this.reg_email && this.reg_firstname && this.reg_lastname && this.reg_function && reg_location) {

            this.showTextLoading()

            axios.post(process.env.WEBSITE + '/register', options)
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
                    reg_location = null
                    this.reg_mobile = null
                    this.reg_phone = null
                    this.pays.value = null
                    this.pays_code.value = null
                    this.departement.value = null
                    this.ville.value = null
                    this.postcode.value = null
                    this.department_code.value = null
                    this.req_status_legal = 1
                    this.reg_siret = null
                    this.reg_tva = null
                    this.reg_known = null
                    this.reg_budget = 0

                  }, 3500);

                } else {
                  this.errorNotif(res.data.message)
                }

              })
              .catch((error) => {
                this.errorNotif()
              })

          }

       })

      } else {

        $('.' + 'reg_email' + '_error').attr('style', 'display: block')
        $('.' + 'reg_email' + '_error').text("Le champs adresse email n'est pas valide !");

      }

      if (!this.reg_budget && this.reg_status_legale === '2') {
        $('.' + 'reg_budget' + '_error').attr('style', 'display: block')
        $('.' + 'reg_budget' + '_error').text("Le champs budget est obligatoire !");
      } else {
        $('.' + 'reg_budget' + '_error').removeAttr()
        $('.' + 'reg_budget' + '_error').text("");
      }

      if (!this.reg_known && this.reg_status_legale === '2') {
        $('.' + 'reg_known' + '_error').attr('style', 'display: block')
        $('.' + 'reg_known' + '_error').text("Le champs histoire est obligatoire !");
      } else {
        $('.' + 'reg_tva' + '_error').removeAttr()
        $('.' + 'reg_known' + '_error').text("");
      }

      if (!this.reg_tva && this.reg_status_legale === '2') {
        $('.' + 'reg_tva' + '_error').attr('style', 'display: block')
        $('.' + 'reg_tva' + '_error').text("Le champs tva est obligatoire !");
      } else {
        $('.' + 'reg_tva' + '_error').removeAttr()
        $('.' + 'reg_tva' + '_error').text("");
      }

      if (!this.reg_siret && this.reg_status_legale === '2') {
        $('.' + 'reg_siret' + '_error').attr('style', 'display: block')
        $('.' + 'reg_siret' + '_error').text("Le champs siret est obligatoire !");
      } else {
        $('.' + 'reg_siret' + '_error').removeAttr()
        $('.' + 'reg_siret' + '_error').text("");
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

      if (!reg_location) {
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

          fetch('https://api.ipify.org?format=json')
            .then(x => x.json())
            .then(({ ip }) => {

              axios.post(process.env.WEBSITE + '/login', { 'username': this.username, 'password': this.password, 'application_id': application_id.value, 'ip' : ip })
                .then((res) => {

                  this.showTextLoading('login')

                  if (res.data.success === true) {

                    const token = res.data.token

                    this.stateUser.token = token;

                    sessionStorage.setItem('token', token)

                    this.showNotif('Connection réussie à My Bakery.')

                    setTimeout(() => {
                      $(document).find('.error-text').text('')
                      $(document).find('.error-text').removeAttr()
                      $('#login').find('input').val('')

                      this.username = null
                      this.password = null

                      if (LocalStorage.has('prev_url')) {
                        this.$router.push(LocalStorage.getItem('prev_url'));
                      } else {
                        this.$router.push("/my-account-profil")
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

    if (this.$route.params.token !== undefined) {

      this.showTextLoading('login')

      const token = this.$route.params.token

      axios.post(process.env.WEBSITE + '/auth/google/validate', { 'token': token })
        .then((res) => {

          if (res.data.succes) {

            this.stateUser.token = res.data.token;

            sessionStorage.setItem('token', res.data.token)

            this.showNotif('Connection réussie à My Bakery.')

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
            this.$router.push("/my-account")

          }

        })

    }

    if (sessionStorage.getItem('token') !== null) {
      location.href = '/'
    }

    window.WonderPush = window.WonderPush || [];
    WonderPush.push(function () {

      WonderPush.getInstallationId().then(data => {
        application_id.value = data
      });

    });

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
      $('html, body').animate({ scrollTop: 0 }, 200)
    })

    $(document).on('click', '.place-clic', function (e) {

      e.preventDefault();

      var adresse = $(this).data('adresse'),
        pays = $(this).data('pays'),
        pays_code = $(this).data('pays_code'),
        departement = $(this).data('departement'),
        ville = $(this).data('ville'),
        postcode = $(this).data('postcode'),
        department_code = $(this).data('department_code')

      reg_pays.value = pays
      reg_pays_code.value = pays_code
      reg_departement.value = departement
      reg_ville.value = ville
      reg_postcode.value = postcode
      reg_department_code.value = department_code

      $('#reg_location').val(adresse)

      $('.search-place').fadeOut(200)

      setTimeout(() => {
        $('.search-place ul').html('')
        this.searchPlace = []
      }, 300);

    })

  }

})
</script>
