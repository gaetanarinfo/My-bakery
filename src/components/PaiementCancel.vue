<template name="PaiementCancelComponent">

  <div class="background bb background5 u-column1" v-show="showSimulatedReturnData">

    <div class="content">

      <h1>{{ paiement_status.title }}</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="before"><a href="#/cart">Panier</a></li>

            <li class="active">{{ paiement_status.title }}</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="cart" class="section fadeIn3">

    <div class="container">

      <div class="u-column1 cartEmpty" v-show="showSimulatedReturnData" v-if="paiement_status.status === 1">

        <img src="bakerys/large-5.jpg" alt="My Bakery">

        <h3>Votre commande a été annulé</h3>

        <p class="mt-1">Nous vous souhaitons un agréable moment sur My Bakery.</p>

        <a class="ps-btn ps-btn-mobile me-2"
          @click="this.$router.push('/my-account-profil/historique-commandes')">Historique de mes commandes</a>

        <a class="ps-btn" href="#/">Retour à l'accueil</a>

      </div>

      <div class="u-column1 cartEmpty" v-show="showSimulatedReturnData" v-else-if="paiement_status.status === 3">

        <img src="bakerys/large-5.jpg" alt="My Bakery">

        <h3>Oups {{ paiement_status.firstname }},<br />votre commande a déjà été annulé</h3>

        <p class="mt-1">Nous vous souhaitons un agréable moment sur My Bakery.</p>

        <a class="ps-btn ps-btn-mobile me-2"
          @click="this.$router.push('/my-account-profil/historique-commandes')">Historique de mes commandes</a>

        <a class="ps-btn" href="#/">Retour à l'accueil</a>

      </div>

      <div class="loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>

</template>


<script>

import { LocalStorage, SessionStorage } from 'quasar';
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import axios from 'axios'

const firstname = ref('')

export default defineComponent({
  name: 'PaiementCancelComponent',
  setup () {
    const store = useStore()
    const route = useRoute()
    const showSimulatedReturnData = ref(true)
    const visible = ref(false)
    const user = computed(() => {
      return store.state.stateUser.user
    })

    const paiement_status = computed(() => {
      return store.state.paiement_status
    })

    if (route.params.paymentId !== null) {
      store.dispatch('setOrderCancel', { 'status': 3, 'paymentId': route.params.paymentId })
      LocalStorage.removeItem('shopping_cart_qte')
      LocalStorage.removeItem('shopping_total_ht')
      LocalStorage.removeItem('shopping_total_ttc')
      LocalStorage.removeItem('shopping_cart')
      LocalStorage.removeItem('shopping_product_id')
      LocalStorage.removeItem('prev_url')
    } else {
      this.$router.push('/')
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
          }, 1500)
        }
      },
      visible,
      showSimulatedReturnData,
      user,
      firstname,
      paiement_status
    }

  },
  mounted () {

    this.showTextLoading()

    setTimeout(() => {
      if (sessionStorage.getItem('token') !== null) {
        axios.get(process.env.WEBSITE + '/user-profil/' + SessionStorage.getItem('email'))
          .then((res) => {
            if (res.status === 200) {

              // Static values
              firstname.value = res.data.user.firstname
            }
          })
      } else {
        this.$router.push('/')
      }
    }, 200)

  }

})

</script>
