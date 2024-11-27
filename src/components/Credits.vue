<template name="ProductsComponent">

  <div class="background fadeIn2 bb background6">

    <div class="content">

      <h1>Échanger mes crédits</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Échanger mes crédits</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="products" class="credits section fadeIn3">

    <div class="container">

      <div class="row gutters-sm u-column1" v-show="showSimulatedReturnData">

        <div class="snip1265">

          <div :id="'product_' + credit.id" v-for="credit in credits" v-bind:key="credit.id"
            :class="(credit.ahead === 1) ? 'plan featured' : 'plan'">

            <header>

              <i :class="credit.image"></i>

              <h4 class="plan-title">
                {{ credit.title }}
              </h4>

              <div class="plan-cost"><span class="plan-price">{{ credit.credits, '.', ',' }} CREDITS</span></div>

            </header>

            <ul class="plan-features" v-html="credit.content"></ul>

            <div class="plan-select"><a @click="removeCredit(credit.id)">Confirmer mon choix</a></div>

          </div>

        </div>

      </div>

      <div class="creditsLoad loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>

</template>

<style lang="scss">
.credits .snip1265 header i {
  font-size: 40px;
}
</style>

<script>

import { SessionStorage, useQuasar } from 'quasar';
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

const showCart = ref(false)
const store = useStore()

export default defineComponent({
  name: 'CreditsComponent',
  setup () {
    const store = useStore()
    const $q = useQuasar()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)

    const stateUser = computed(() => {
      return store.state.stateUser
    })

    const user = computed(() => {
      return store.state.stateUser.user
    })

    const credits = computed(() => {
      return store.state.credits
    })

    const credits_debit = computed(() => {
      return store.state.credits_debit
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
        showSimulatedReturnData.value = false

        if (express === null) {
          setTimeout(() => {
            visible.value = false
            showSimulatedReturnData.value = true
          }, 2000)
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
          message: message ? message : 'Une erreur est survenue.'
        })
      },
      visible,
      showSimulatedReturnData,
      credits_debit,
      user,
      stateUser,
      credits,
      removeCredit: function (id) {

        axios.post(process.env.WEBSITE + '/credits-debit', { 'email': this.user.email, 'id': this.user.id, 'idProduct': id, idBakery: this.$route.params.id })
          .then((res) => {

            if (res.data.succes === true) {
              this.showNotif('Vous avez été débité de ' + res.data.credits + ' crédits !');
              this.showTextLoading()
              setTimeout(() => {
                this.showTextLoading()
              }, 1000);
            } else {
              this.showTextLoading()
              this.errorNotif('Vous n\'avez pas assez de crédit pour réaliser cette opération !')
            }

            if (res.data.succes === true) {
              axios.post(process.env.WEBSITE + '/credits-debit-validate', { 'email': this.user.email, 'id': this.user.id, 'idProduct': id, idBakery: this.$route.params.id })
                .then((res) => {
                })
            }

          })
      }
    }

  },
  data () {
    const store = useStore()

    return {

    }
  },
  mounted () {

    const store = useStore()

    this.showTextLoading()

    if (SessionStorage.getItem('token') === null) {
      this.$router.push('/')
    } else {
      setTimeout(() => {
        store.dispatch('fetchCredits', { email: this.user.email, id: this.user.id, idBakery: this.$route.params.id })
      }, 1000);
    }
  },
})

</script>
