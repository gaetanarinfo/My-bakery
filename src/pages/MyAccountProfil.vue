<template name="MyAccountProfil">

  <HeaderComponent />

  <div class="background fadeIn2 bb background3">

    <div class="content">

      <h1 class="text-white">Gestion de mon compte</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/" class="text-white">Accueil</a></li>

            <li class="active">Gestion de mon compte</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="my-account-profil" class="section fadeIn3">

    <div class="container">

      <div class="row gutters-sm">

        <div class="col-md-3 mb-3">

          <div class="card">

            <div class="card-body">

              <div class="d-flex flex-column align-items-center text-center">

                <img class="rounded-circle" src="users/avatar.png" alt="">

                <div class="mt-3">

                  <h4>{{ firstname + ' ' + lastname }}</h4>

                  <p class="text-secondary text-bold mb-1"><i class="fa-solid fa-briefcase text-blue me-1"></i>
                    {{ fonction }}</p>

                  <p class="text-muted text-bold font-size-sm"><i class="fa-solid fa-location-dot text-green me-1"></i>
                    {{ location }}</p>

                </div>

              </div>

            </div>

          </div>

          <div class="card mt-3">

            <ul class="list-group list-clic list-group-flush">

              <li id="card1"
                class="active-list list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showProfil">
                  <p class="mb-0"><i class="fa fa-user me-2"></i>Mon profil</p>
                </a>
              </li>

              <li id="card2" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showUpdateProfil">
                  <p class="mb-0"><i class="fa fa-edit me-2"></i>Modifier mon profil</p>
                </a>
              </li>

              <li id="card3" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showActivity">
                  <i class="fa fa-calendar me-2"></i>Activité récente <span class="badge bg-warning float-right">{{
                    activity }}</span>
                </a>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="deleteAccount">
                  <p class="mb-0"><i class="fa-solid fa-user-minus me-2"></i>Supprimer mon compte</p>
                </a>
              </li>

            </ul>

          </div>

        </div>

        <div class="col-md-9">

          <div v-show="cardProfil" class="card">

            <div class="panel-body bio-graph-info">

              <h3 class="text-bold">Mon profil</h3>

              <div class="row">

                <div class="bio-row">
                  <p><span class="text-bold">Prénom </span>: {{ firstname }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Nom </span>: {{ lastname }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Location </span>: {{ location }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Date de naissance</span>: {{ naissance }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Poste </span>: {{ fonction }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Email </span>: {{ email }}</p>
                </div>

                <div class="bio-row mb-0">
                  <p class="mb-0"><span class="text-bold">Mobile </span>: {{ mobile }}</p>
                </div>

                <div class="bio-row mb-0">
                  <p class="mb-0"><span class="text-bold">Téléphone </span>: {{ phone }}</p>
                </div>

              </div>

            </div>

          </div>

          <div v-show="cardUpdateProfil" class="card">

            <div id="card-update-profil">

              <h3 class="text-bold">Modifier mon profil</h3>

              <form method="post" class="d-grid bakery-detail">

                <div class="p-2">
                  <p class="form-group">
                    <label for="reg_firstname">Prénom <span class="required">*</span></label>
                    <input v-model="reg_firstname" type="text" class="form-control" name="firstname" id="reg_firstname">
                  <p class="error-text reg_firstname_error"></p>
                  </p>
                </div>

                <div class="p-2">
                  <p class="form-group">
                    <label for="reg_lastname">Nom <span class="required">*</span></label>
                    <input v-model="reg_lastname" type="text" class="form-control" name="lastname" id="reg_lastname">
                  <p class="error-text reg_lastname_error"></p>
                  </p>
                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_function">Poste occupé <span class="required">*</span></label>
                    <input v-model="reg_function" type="text" placeholder="ex : Ouvrier" class="form-control"
                      name="function" id="reg_function">
                  <p class="error-text reg_function_error"></p>
                  </p>

                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_naissance">Date de naissance <span class="required">*</span></label>
                    <input v-model="reg_naissance" placeholder="02/12/1999" type="text" class="form-control"
                      name="naissance" id="reg_naissance">
                  <p class="error-text reg_naissance_error"></p>
                  </p>

                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_location">Localisation <span class="required">*</span></label>
                    <input v-model="reg_location" placeholder="ex : Le Mans" type="text" class="form-control"
                      name="location" id="reg_location">
                  <p class="error-text reg_location_error"></p>
                  </p>

                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_mobile">Mobile</label>
                    <input v-model="reg_mobile" type="tel" class="form-control" name="mobile" id="reg_mobile">
                  </p>

                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_phone">Téléphone fixe</label>
                    <input v-model="reg_phone" type="tel" class="form-control" name="fixe" id="reg_phone">
                  </p>

                </div>

                <div class="p-2">

                </div>

                <div class="p-2">

                  <p class="form-group woocomerce-FormRow form-row">
                    <button @click="updateProfil" type="submit" class="btn btn-bakery">Valider</button>
                  </p>

                </div>


              </form>

            </div>

          </div>

          <div v-show="cardActivity" class="card">

            <div id="activityCard">

              <h3 class="text-bold">Résumé de votre activité</h3>

              <table class="table table-striped">

                <thead>

                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Nom</th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Description</th>
                    <th scope="col">Crée le</th>
                  </tr>

                </thead>

                <tbody>

                  <tr v-for="activity in activityTable" :key="activity.id">
                    <th scope="row">{{ activity.id }}</th>
                    <td>{{ activity.title }}</td>
                    <td>{{ activity.adresse }}</td>
                    <td>{{ activity.small_content }}</td>
                    <td>{{ moment(activity.userCreatedAt).format('DD MMMM YYYY') }}</td>
                  </tr>

                </tbody>

                <tfoot>

<tr>
  <th scope="col"></th>
  <th scope="col">Nom</th>
  <th scope="col">Adresse</th>
  <th scope="col">Description</th>
  <th scope="col">Crée le</th>
</tr>

                </tfoot>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  <Section7 />

  <FooterComponent />

</template>

<style lang="css">
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

.b-pagination {
  padding-top: 40px;
  text-align: center;
}

.b-pagination .pagination {
  margin: 0;
  display: inline-block;
}

.b-pagination .pagination li {
  display: inline-block;
  margin-right: 15px;
  text-align: center;
}

.b-pagination .pagination li>a:before,
.b-pagination .pagination li>a:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: -2;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.b-pagination .pagination li.active {
  border: none;
}

.b-pagination .pagination li a {
  text-decoration: none;
  padding: 0 17px;
  position: relative;
  display: inline-block;
  z-index: 30;
  font-family: "Lora", serif;
  font-size: 16px;
  color: #313131;
  line-height: 50px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
  border: none;
  background-color: transparent !important;
}

.b-pagination .pagination li.active a,
.b-pagination .pagination li a:hover {
  color: #fff;
}

.b-pagination .pagination li.active a:before,
.b-pagination .pagination li a:hover:before {
  background-color: #cd9b33;
}

.b-pagination .pagination li.active a:after {
  visibility: visible;
  opacity: 1;
}

.b-pagination .pagination li a:before {
  width: 50px;
  height: 50px;
  background-color: #e4e4e4;
}

.b-pagination .pagination li a:after {
  width: 45px;
  height: 45px;
  background-color: #cd9b33;
  z-index: -1;
  visibility: hidden;
  opacity: 0;
}
</style>


<script>

import { defineComponent, onMounted, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import moment from 'moment'
import { ref } from 'vue'
import { Cookies } from 'quasar'
import HeaderComponent from 'components/Header.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'
import axios from 'axios'

moment.locale('fr')

const email = ref(null),
  firstname = ref(null),
  lastname = ref(null),
  fonction = ref(null),
  location = ref(null),
  phone = ref(null),
  mobile = ref(null),
  naissance = ref(null),
  cardProfil = ref(true),
  cardUpdateProfil = ref(false),
  cardActivity = ref(false),
  activity = ref(0),
  activityTable = ref([])

export default defineComponent({
  name: 'MyAccountProfil',
  data () {

    return {
      email,
      firstname,
      lastname,
      fonction,
      location,
      phone,
      mobile,
      naissance,
      cardProfil,
      cardUpdateProfil,
      cardActivity,
      v$: useValidate(),
      activity,
      activityTable,

      reg_naissance: null,
      reg_firstname: null,
      reg_lastname: null,
      reg_function: null,
      reg_location: null,
      reg_mobile: null,
      reg_phone: null,
    }
  },
  setup () {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const $q = useQuasar()

    const stateUser = computed(() => {
      return store.state.stateUser
    })

    const user = computed(() => {
      return store.state.stateUser.user
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
      showProfil () {
        cardProfil.value = true
        cardUpdateProfil.value = false
        cardActivity.value = false
        $('#card1').addClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
      },
      showUpdateProfil () {
        cardProfil.value = false
        cardUpdateProfil.value = true
        cardActivity.value = false
        $('#card1').removeClass('active-list');
        $('#card2').addClass('active-list');
        $('#card3').removeClass('active-list');
      },
      showActivity () {
        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = true
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').addClass('active-list');
      },
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
      deleteAccount () {

        if (confirm("Êtes-vous sûr de vouloir supprimer votre compte My Bakery ?")) {

          axios.get(process.env.WEBSITE + '/user-delete/' + this.user.email + '/' + this.user.id)
            .then((res) => {
              if (res.status === 200) {
                sessionStorage.removeItem('token')
                window.location.reload()
              }
            })

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
      user,
      stateUser,
      moment: moment,
      Cookies: Cookies,
      showSimulatedReturnData,
    }
  },
  components: {
    HeaderComponent,
    Section7,
    FooterComponent,
  },
  methods: {
    updateProfil (e) {

      e.preventDefault()

      this.v$.$validate() // checks all inputs

      if (this.reg_firstname && this.reg_lastname && this.reg_function && reg_location) {

        this.showTextLoading()

        axios.post(process.env.WEBSITE + '/update-profil', {
          'id': this.user.id,
          'email': this.user.email,
          'firstname': this.reg_firstname,
          'lastname': this.reg_lastname,
          'naissance': this.reg_naissance,
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

              }, 3500);

            } else {
              this.errorNotif(res.data.message)
            }

          })
          .catch((error) => {
            this.errorNotif()
          })

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

    },
  },
  validations () {
    return {

    }
  },
  mounted () {

    if (sessionStorage.getItem('token') === null) {
      this.$router.push('/')
    }

    setTimeout(() => {
      if (sessionStorage.getItem('token') !== null) {
        axios.get(process.env.WEBSITE + '/user-profil/' + this.user.email)
          .then((res) => {
            if (res.status === 200) {

              // Static values
              email.value = res.data.user.email
              firstname.value = res.data.user.firstname
              lastname.value = res.data.user.lastname
              location.value = res.data.user.location
              fonction.value = res.data.user.fonction
              phone.value = res.data.user.phone
              mobile.value = res.data.user.mobile
              naissance.value = res.data.user.naissance

              // Form dynamique values
              this.reg_firstname = res.data.user.firstname
              this.reg_lastname = res.data.user.lastname
              this.reg_location = res.data.user.location
              this.reg_function = res.data.user.fonction
              this.reg_phone = res.data.user.phone
              this.reg_mobile = res.data.user.mobile
              this.reg_naissance = res.data.user.naissance
            }
          })

        axios.get(process.env.WEBSITE + '/user-activity/' + this.user.email + '/' + this.user.id)
          .then((res) => {
            if (res.status === 200) {
              // Static values
              activity.value = (res.data.activity == []) ? 0 : res.data.activity.counterId
              activityTable.value = res.data.activityTable
                }
          })
      } else {
        this.$router.push('/')
      }
    }, 200)

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
      }, 'slow')
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
