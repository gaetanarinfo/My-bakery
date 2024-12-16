<template name="PaiementSuccesComponent">

  <div class="background bb background5">

    <div class="content">

      <h1>Paiement accepter</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="before"><a @click="this.$router.push('/cart')">Panier</a></li>

            <li class="active">Paiement accepter</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="cart" class="page-paiment-succes section fadeIn3">

    <div class="container">

      <div class="cartEmpty u-column1" v-show="showSimulatedReturnData">

        <img src="bakerys/large-5.jpg" alt="My Bakery">

        <h3>Merci pour votre commande</h3>

        <p class="mt-3 mb-1">Félicitations pour l'achat de votre pack sur My Bakery.</p>

        <p class="mt-1 mb-1">Dans quelques instants, vous pourrez profiter de celui-ci.</p>

        <p class="mt-1">Nous vous souhaitons un agréable moment sur My Bakery.</p>

        <a class="ps-btn" @click="this.$router.push('/')">Retour à l'accueil</a>

      </div>

      <div class="loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>

</template>

<style lang="css">
.disabled {
  pointer-events: none;
}

.page-paiment-succes.section,
.page-paiment-succes .section {
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

import { LocalStorage, SessionStorage } from 'quasar';
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios'

const firstname = ref('')

export default defineComponent({
  name: 'PaiementSuccesComponent',
  setup () {
    const route = useRoute()
    const showSimulatedReturnData = ref(true)
    const visible = ref(false)

    return {
      showTextLoading (express = null) {
        visible.value = true
        $('.u-column1').fadeOut(300)
        showSimulatedReturnData.value = false

        if (express === null) {
          setTimeout(() => {
            visible.value = false
            showSimulatedReturnData.value = true
          }, 2500)
        }
      },
      visible,
      showSimulatedReturnData,
    }

  },
  mounted () {

    if (LocalStorage.getItem('shopping_cart') !== null) {

      if (LocalStorage.getItem('shopping_cart') === "5") {
        window.location.href = 'https://gaetan-seigneur.fr/download-apps/18/1'
      }

      LocalStorage.removeItem('shopping_cart_qte')
      LocalStorage.removeItem('shopping_total_ht')
      LocalStorage.removeItem('shopping_total_ttc')
      LocalStorage.removeItem('shopping_cart')
      LocalStorage.removeItem('shopping_product_id')
      LocalStorage.removeItem('prev_url')
      LocalStorage.removeItem('additional_information')
      LocalStorage.removeItem('banner_date_start')
      LocalStorage.removeItem('banner_date_end')
      LocalStorage.removeItem('banner_name')
      LocalStorage.removeItem('bakery_id_event')
    } else {
      this.$router.push('/')
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: $('#cart').offset().top
    }, '200')

    this.showTextLoading()

  }

})

</script>
