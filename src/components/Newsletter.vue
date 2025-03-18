<template name="PaiementCancelComponent">

  <div class="background bb background5 u-column1">

    <div class="content">

      <h1>Désinscription à notre lettre d'actualité</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="active">Désinscription à notre lettre d'actualité</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="cart" class="page-paiment-cancel section fadeIn3">

    <div class="container">

      <div class="u-column1 cartEmpty" v-show="showSimulatedReturnData" v-if="newsletterUnsubscribe === true">

        <img src="bakerys/large-5.jpg" alt="My Bakery">

        <h3>Nous avons bien enregistré votre désinscription à notre lettre d'actualité.</h3>

        <p class="mt-1">Nous vous souhaitons un agréable moment sur My Bakery.</p>

        <a class="ps-btn" @click="this.$router.push('/')">Retour à l'accueil</a>

      </div>

      <div class="u-column1 cartEmpty" v-show="showSimulatedReturnData" v-else>

        <img src="bakerys/large-5.jpg" alt="My Bakery">

        <h3>Nous avons déjà enregistré votre désinscription à notre lettre d'actualité.</h3>

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

.page-paiment-cancel.section,
.page-paiment-cancel .section {
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
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({
  name: 'NewsletterComponent',
  setup () {
    const store = useStore()
    const route = useRoute()
    const showSimulatedReturnData = ref(true)
    const visible = ref(false)

    const newsletterUnsubscribe = computed(() => {
      return store.state.newsletterUnsubscribe
    })

    onMounted(() => {
      store.dispatch('fetchNewsLetterUnsubscribe', {
        id: route.params.id
      })
    })

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
      newsletterUnsubscribe,
      visible,
      showSimulatedReturnData,
    }

  },
  mounted () {

    $([document.documentElement, document.body]).animate({
      scrollTop: $('#cart').offset().top
    }, '200')

    this.showTextLoading()

  }

})

</script>
