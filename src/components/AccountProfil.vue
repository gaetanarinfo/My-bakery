<template name="AccountProfilComponent">

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

      <div class="row gutters-sm u-column1" v-show="showSimulatedReturnData">

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

              <li id="card4" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showCartOrder">
                  <i class="fa-solid fa-basket-shopping me-2"></i>Historique des Commandes <span
                    class="badge bg-warning float-right">{{
                      orders }}</span>
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

              <table v-if="activityTable.length >= 1" class="table table-striped">

                <thead>

                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Nom</th>
                    <th scope="col">Crée le</th>
                    <th scope="col"></th>
                  </tr>

                </thead>

                <tbody>

                  <tr :id="'activityRow-' + activity.id" v-for="activity in activityTable" :key="activity.id">
                    <th scope="row">{{ activity.id }}</th>
                    <td><a :href="'#/bakery/' + activity.url">{{ activity.title }}</a></td>
                    <td>{{ moment(activity.userCreatedAt).format('DD MMMM YYYY') }}</td>
                    <td>

                      <a :href="'#/bakery/' + activity.url" class="text-success cursor-pointer me-2"><i
                          class="fa fa-eye"></i></a>

                      <a @click="deleteActivity(activity.id)" class="text-danger cursor-pointer"><i
                          class="fa fa-trash"></i></a>

                    </td>
                  </tr>

                </tbody>

              </table>

              <p v-else class="fw-bolder">
                <i class="fa fa-warning text-warning"></i>
                Vous n'avez pas encore d'activité sur My Nakery.
              </p>

            </div>

          </div>

          <div v-show="cardOrder" class="card">

            <div id="orderCard">

              <h3 class="text-bold">Résumé de vos commandes</h3>

              <ag-grid-vue v-if="ordersTable.length >= 1" :paginationPageSize="paginationPageSize"
                :paginationPageSizeSelector="paginationPageSizeSelector" :tooltipShowDelay="tooltipShowDelay"
                :tooltipHideDelay="tooltipHideDelay" :localeText="localeText" :rowData="rowData" :columnDefs="colDefs"
                :pagination="true" class="ag-theme-quartz table-ag-grid">
              </ag-grid-vue>

              <p v-else class="fw-bolder">
                <i class="fa fa-warning text-warning"></i>
                Vous n'avez pas encore de commande sur My Nakery.
              </p>

            </div>

          </div>

        </div>

      </div>

      <div class="loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>

</template>

<style lang="css">
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
</style>

<script>

import { defineComponent, onMounted, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { useStore } from 'vuex'
import { SessionStorage, useQuasar } from 'quasar'
import moment from 'moment'
import { ref } from 'vue'
import { Cookies } from 'quasar'
import axios from 'axios'
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component
import { AG_GRID_LOCALE_FR } from '@ag-grid-community/locale';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

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
  cardOrder = ref(false),
  activity = ref(0),
  orders = ref(0),
  ordersTable = ref([]),
  activityTable = ref([]),
  tooltipShowDelay = ref(null),
  tooltipHideDelay = ref(null);

// Row Data: The data to be displayed.
const rowData = ref([]),
  paginationPageSize = ref(''),
  paginationPageSizeSelector = ref('')

export default defineComponent({
  name: 'AccountProfilComponent',
  components: {
    AgGridVue,
  },
  data () {

    // Column Definitions: Defines the columns to be displayed.
    const colDefs = ref([
      { field: "CreatedAt", hide: true },
      { field: "idProduct", hide: true },
      { field: "TooltipStatus", hide: true },
      { field: "Nom2", hide: true },
      { field: "IconPack", hide: true },
      { field: "PaiementStatus", hide: true },
      { field: "Id", hide: true },
      { field: "#", filter: false, maxWidth: 80 },
      {
        field: "Nom", cellRenderer (params) {
          return `<div><span class="missionSpan"><i class="${params.data.IconPack} missionIcon" /><span class="missionTexte">${params.data.Nom2}</span></span></div>`
        }, filter: true, sortable: false, maxWidth: 150
      },
      { field: "Quantité", filter: false, maxWidth: 120, cellClass: 'cellCenter' },
      { field: "Total HT", filter: true, maxWidth: 130 },
      { field: "Total TTC", filter: true, maxWidth: 140 },
      {
        field: "Statut", cellRenderer (params) {
          return '<span class="missionSpan"><img src="' + params.data.PaiementStatus + '" class="missionIcon"/></span>'
        }, filter: false, sortable: false, maxWidth: 80, cellClass: 'cellCenter', tooltipValueGetter (p) {
          return p.data.TooltipStatus
        }
      },
      { field: "Crée le", filter: false },
      { field: "Payé le", filter: false },
      { field: "Rembourser le", filter: false },
      {
        field: "Actions", filter: false, sortable: false, cellRenderer (params) {
          return '<a id="refundButton" data-id="' + params.data.idProduct + '" data-token="' + params.data.Id + '" data-date="' + params.data.CreatedAt + '" class="text-danger cursor-pointer"><i class="fa-solid fa-cart-arrow-down"></i></a>'
        }, maxWidth: 100, cellClass: 'cellCenter'
      }
    ]);

    return {
      tooltipShowDelay,
      tooltipHideDelay,
      localeText: AG_GRID_LOCALE_FR,
      rowData,
      colDefs,
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
      cardOrder,
      v$: useValidate(),
      activity,
      activityTable,
      orders,
      ordersTable,

      reg_naissance: null,
      reg_firstname: null,
      reg_lastname: null,
      reg_function: null,
      reg_location: null,
      reg_mobile: null,
      reg_phone: null,

      replaces: function (st, rep, repWith) {
        const result = st.split(rep).join(repWith)
        return result;
      },
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

    // sets 10 rows per page (default is 100)
    paginationPageSize.value = 10;

    // allows the user to select the page size from a predefined list of page sizes
    paginationPageSizeSelector.value = [5, 10, 20, 40, 60, 80, 100];

    return {
      paginationPageSize,
      paginationPageSizeSelector,
      deleteActivity (id) {

        if (confirm("Êtes-vous sûr de vouloir supprimer cette activité ?")) {

          axios.get(process.env.WEBSITE + '/user-activity-delete/' + this.user.email + '/' + this.user.id + '/' + id)
            .then((res) => {
              if (res.status === 200) {
                //window.location.reload()
                $('#activityRow-' + id).fadeOut(200)
                $('#activityRow-' + id).remove()
              }
            })

        }

      },
      showProfil () {
        cardProfil.value = true
        cardUpdateProfil.value = false
        cardActivity.value = false
        cardOrder.value = false
        $('#card1').addClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
      },
      showUpdateProfil () {
        cardProfil.value = false
        cardUpdateProfil.value = true
        cardActivity.value = false
        cardOrder.value = false
        $('#card1').removeClass('active-list');
        $('#card2').addClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
      },
      showActivity () {
        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = true
        cardOrder.value = false
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').addClass('active-list');
        $('#card4').removeClass('active-list');
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
          }, 1500)
        }
      },
      showCartOrder () {
        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = false
        cardOrder.value = true
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').addClass('active-list');
      },
      deleteAccount () {

        if (confirm("Êtes-vous sûr de vouloir supprimer votre compte My Bakery ?")) {

          axios.get(process.env.WEBSITE + '/user-delete/' + this.user.email + '/' + this.user.id)
            .then((res) => {
              if (res.status === 200) {
                sessionStorage.removeItem('email')
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
  },
  beforeMount () {
    tooltipShowDelay.value = 0;
    tooltipHideDelay.value = 2000;
  },
  mounted () {

    const $q = useQuasar()
    const store = useStore()

    this.showTextLoading()

    setTimeout(() => {
      if (sessionStorage.getItem('token') !== null) {
        axios.get(process.env.WEBSITE + '/user-profil/' + SessionStorage.getItem('email'))
          .then((res) => {
            if (res.status === 200) {

              var userId = res.data.user.id

              cardProfil.value = true
              cardUpdateProfil.value = false
              cardActivity.value = false
              $('#card1').addClass('active-list');
              $('#card2').removeClass('active-list');
              $('#card3').removeClass('active-list');

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

              axios.get(process.env.WEBSITE + '/user-activity/' + res.data.user.email + '/' + res.data.user.id)
                .then((res) => {
                  if (res.status === 200) {
                    // Static values
                    activity.value = (res.data.activity == []) ? 0 : res.data.activity
                    activityTable.value = res.data.activityTable
                  }
                })

              axios.get(process.env.WEBSITE + '/user-orders/' + res.data.user.email + '/' + res.data.user.id)
                .then((res) => {
                  if (res.status === 200) {
                    // Static values
                    orders.value = (res.data.orders == []) ? 0 : res.data.orders
                    ordersTable.value = res.data.ordersTable

                    res.data.ordersTable.forEach(element => {

                      var paypal_id = element.paypal_id

                      rowData.value.push({
                        'CreatedAt': moment(element.created_at).format('YYYY-MM-DD'),
                        'idProduct': element.id,
                        'TooltipStatus': element.titleStatus,
                        'Nom2': 'Pack ' + element.title,
                        'IconPack': element.image,
                        'PaiementStatus': (element.status === 1) ? 'cross-in-warning.png' : (element.status === 2) ? 'tick-in-circle.png' : (element.status === 3) ? 'cross-in-circle.png' : (element.status === 4) ? 'cross-in-circle.png' : '',
                        'Id': element.paypal_id,
                        '#': element.id,
                        'Quantité': element.qte,
                        'Total HT': element.total_ht + ' €',
                        'Total TTC': element.total_ttc + ' €',
                        'Statut': true,
                        'Crée le': (element.created_at !== null) ? moment(element.created_at).format('DD MMMM YYYY à HH:mm') : '/',
                        'Payé le': (element.validate_at !== null) ? moment(element.validate_at).format('DD MMMM YYYY à HH:mm') : '/',
                        'Rembourser le': (element.refund_at !== null) ? moment(element.refund_at).format('DD MMMM YYYY à HH:mm') : '/',
                      })

                    })

                    function showNotif (message) {
                      $q.notify({
                        type: 'success-form',
                        message: message
                      })
                    }

                    function errorNotif (message = null) {
                      $q.notify({
                        type: 'error-form',
                        message: message ? message : 'Votre demande de remboursement ne peut pas aboutir !'
                      })
                    }

                    function refundOrder (id, tokenPaiement, date) {

                      if (moment().add(14, 'days').format('YYYY-MM-DD') >= moment(date).format('YYYY-MM-DD')) {

                        store.dispatch('fetchRefundOrder', { 'tokenPaiement': tokenPaiement })

                        const paiement_status = computed(() => {
                          return store.state.paiement_status
                        })

                        if (paiement_status.value.succes === true) {
                          showNotif('Votre demande de remboursement à bien été pris en compte !');

                          rowData.value = []

                          setTimeout(() => {

                            axios.get(process.env.WEBSITE + '/user-orders/' + email.value + '/' + userId)
                              .then((res) => {
                                if (res.status === 200) {
                                  // Static values
                                  orders.value = (res.data.orders == []) ? 0 : res.data.orders
                                  ordersTable.value = res.data.ordersTable

                                  res.data.ordersTable.forEach(element => {

                                    var paypal_id = element.paypal_id

                                    rowData.value.push({
                                      'CreatedAt': moment(element.created_at).format('YYYY-MM-DD'),
                                      'idProduct': element.id,
                                      'TooltipStatus': element.titleStatus,
                                      'Nom2': 'Pack ' + element.title,
                                      'IconPack': element.image,
                                      'PaiementStatus': (element.status === 1) ? 'cross-in-warning.png' : (element.status === 2) ? 'tick-in-circle.png' : (element.status === 3) ? 'cross-in-circle.png' : (element.status === 4) ? 'cross-in-circle.png' : '',
                                      'Id': element.paypal_id,
                                      '#': element.id,
                                      'Quantité': element.qte,
                                      'Total HT': element.total_ht + ' €',
                                      'Total TTC': element.total_ttc + ' €',
                                      'Statut': true,
                                      'Crée le': (element.created_at !== null) ? moment(element.created_at).format('DD MMMM YYYY à HH:mm') : '/',
                                      'Payé le': (element.validate_at !== null) ? moment(element.validate_at).format('DD MMMM YYYY à HH:mm') : '/',
                                      'Rembourser le': (element.refund_at !== null) ? moment(element.refund_at).format('DD MMMM YYYY à HH:mm') : '/',
                                    })

                                  })

                                }
                              })

                          }, 1000);

                        } else {
                          errorNotif(paiement_status.value.message);
                        }

                      } else {
                        errorNotif('Votre demande de remboursement ne peut pas aboutir !');
                      }

                    }

                    $(document).on('click', '#refundButton', function (e) {

                      e.preventDefault()

                      var id = $(this).data('id'),
                        date = $(this).data('date'),
                        tokenPaiement = $(this).data('token')

                      refundOrder(id, tokenPaiement, date)

                    })

                  }
                })
            }
          })

      } else {
        this.$router.push('/')
      }
    }, 200)

  }
})

</script>
