<template name="ProductsComponent">

  <div class="background fadeIn2 bb background6">

    <div class="content">

      <h1>Échanger mes crédits</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="active">Échanger mes crédits</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="products" class="credits section fadeIn3">

    <div class="container">

      <div class="row gutters-sm u-column1 mb-5" v-show="showSimulatedReturnData">

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

      <BannerComponent v-show="showSimulatedReturnData" :margin="false" :top="true" />

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

<style lang="scss">
@import '../css/products.scss';
</style>

<style lang="css">
.u-section-2 {
  background-image: none
}

.u-section-2 .u-sheet-1 {
  min-height: 700px
}

.u-section-2 .u-text-1 {
  font-weight: 700;
  margin: 55px 0 0
}

.u-section-2 .u-text-2 {
  font-size: 1.5rem;
  margin: 2px auto 0
}

.u-section-2 .u-layout-wrap-1 {
  margin: 38px auto 55px 0
}

.u-section-2 .u-layout-cell-1 {
  min-height: 466px;
  background-image: none
}

.u-section-2 .u-container-layout-1 {
  padding: 30px
}

.u-section-2 .u-text-3 {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  margin: 0 -2px
}

.u-section-2 .u-text-4 {
  font-size: 3.75rem;
  margin: 8px auto 0 63px
}

.u-section-2 .u-text-5 {
  width: 168px;
  margin: 8px auto 0
}

.u-section-2 .u-icon-1 {
  height: 83px;
  width: 83px;
  margin: 10px auto 0
}

.u-section-2 .u-text-6 {
  line-height: 2;
  margin: 17px 11px 0
}

.u-section-2 .u-btn-1 {
  background-image: none;
  border-style: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 20px auto 0
}

.u-section-2 .u-layout-cell-2 {
  min-height: 466px;
  background-image: none
}

.u-section-2 .u-container-layout-2 {
  padding: 30px
}

.u-section-2 .u-text-7 {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  margin: 0 -2px
}

.u-section-2 .u-text-8 {
  font-size: 3.75rem;
  margin: 8px auto 0 63px
}

.u-section-2 .u-text-9 {
  width: 164px;
  margin: 8px auto 0
}

.u-section-2 .u-icon-2 {
  height: 83px;
  width: 83px;
  margin: 10px auto 0
}

.u-section-2 .u-text-10 {
  line-height: 2;
  width: 202px;
  margin: 17px auto 0
}

.u-section-2 .u-btn-2 {
  background-image: none;
  border-style: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 20px auto 0
}

.u-section-2 .u-layout-cell-3 {
  min-height: 466px
}

.u-section-2 .u-container-layout-3 {
  padding: 30px
}

.u-section-2 .u-text-11 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.875rem
}

.u-section-2 .u-text-12 {
  margin-top: 20px;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 2;
  margin-bottom: 0
}

.u-section-2 .u-line-1 {
  height: 3px;
  transform-origin: left center;
  margin: 20px auto 0 0
}

.u-section-2 .u-text-13 {
  margin: 20px auto 0 0
}

@media (max-width: 1199px) {
  .u-section-2 .u-sheet-1 {
    min-height: 618px
  }

  .u-section-2 .u-layout-wrap-1 {
    margin-right: initial;
    margin-left: initial
  }

  .u-section-2 .u-layout-cell-1 {
    min-height: 384px
  }

  .u-section-2 .u-container-layout-1 {
    padding-left: 20px;
    padding-right: 20px
  }

  .u-section-2 .u-text-3 {
    margin-left: 0;
    margin-right: 0
  }

  .u-section-2 .u-text-4 {
    margin-left: auto
  }

  .u-section-2 .u-text-5 {
    margin-left: 13px;
    margin-right: 13px
  }

  .u-section-2 .u-text-6 {
    margin-left: 0;
    margin-right: 0
  }

  .u-section-2 .u-layout-cell-2 {
    min-height: 384px
  }

  .u-section-2 .u-container-layout-2 {
    padding-left: 20px;
    padding-right: 20px
  }

  .u-section-2 .u-text-7 {
    margin-left: 0;
    margin-right: 0
  }

  .u-section-2 .u-text-8 {
    margin-left: auto
  }

  .u-section-2 .u-text-9 {
    margin-left: 15px;
    margin-right: 15px
  }

  .u-section-2 .u-text-10 {
    margin-left: 8px;
    margin-right: 8px;
    width: 199px
  }

  .u-section-2 .u-layout-cell-3 {
    min-height: 384px
  }

  .u-section-2 .u-container-layout-3 {
    padding-left: 20px;
    padding-right: 20px
  }

  .u-section-2 .u-line-1 {
    margin-right: initial;
    margin-left: initial
  }
}

@media (max-width: 991px) {
  .u-section-2 .u-sheet-1 {
    min-height: 334px
  }

  .u-section-2 .u-text-1 {
    margin-left: auto;
    margin-right: auto
  }

  .u-section-2 .u-layout-wrap-1 {
    margin-bottom: 60px;
    margin-right: initial;
    margin-left: initial
  }

  .u-section-2 .u-layout-cell-1 {
    min-height: 100px
  }

  .u-section-2 .u-text-3 {
    margin-left: 2px;
    margin-right: 2px
  }

  .u-section-2 .u-text-4 {
    font-size: 3rem
  }

  .u-section-2 .u-text-5 {
    width: 116px;
    margin-left: auto;
    margin-right: auto
  }

  .u-section-2 .u-text-6 {
    margin-left: 2px;
    margin-right: 2px
  }

  .u-section-2 .u-layout-cell-2 {
    min-height: 100px
  }

  .u-section-2 .u-text-8 {
    font-size: 3rem
  }

  .u-section-2 .u-text-9 {
    margin-left: 17px;
    margin-right: 17px;
    width: 140px
  }

  .u-section-2 .u-text-10 {
    margin-left: 17px;
    margin-right: 17px;
    width: 140px
  }

  .u-section-2 .u-layout-cell-3 {
    min-height: 100px
  }

  .u-section-2 .u-text-11 {
    font-size: 1.5rem
  }

  .u-section-2 .u-text-12 {
    font-size: 1rem
  }
}

@media (max-width: 767px) {
  .u-section-2 .u-sheet-1 {
    min-height: 434px
  }

  .u-section-2 .u-container-layout-1 {
    padding-left: 30px;
    padding-right: 30px
  }

  .u-section-2 .u-container-layout-2 {
    padding-left: 30px;
    padding-right: 30px
  }

  .u-section-2 .u-text-9 {
    width: 120px;
    margin-left: auto;
    margin-right: auto
  }

  .u-section-2 .u-text-10 {
    width: 120px;
    margin-left: auto;
    margin-right: auto
  }

  .u-section-2 .u-container-layout-3 {
    padding-left: 10px;
    padding-right: 10px
  }
}

@media (max-width: 575px) {
  .u-section-2 .u-container-layout-1 {
    padding-left: 10px;
    padding-right: 10px
  }

  .u-section-2 .u-text-3 {
    margin-left: 0;
    margin-right: 0
  }

  .u-section-2 .u-text-4 {
    font-size: 3.75rem
  }

  .u-section-2 .u-text-6 {
    margin-left: 0;
    margin-right: 0
  }

  .u-section-2 .u-container-layout-2 {
    padding-left: 10px;
    padding-right: 10px
  }

  .u-section-2 .u-text-8 {
    font-size: 3.75rem
  }
}
</style>

<style lang="css">
.disabled {
  pointer-events: none;
}

.page-credits.section,
.page-credits .section {
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

import { SessionStorage, useQuasar } from 'quasar';
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import BannerComponent from 'components/Banner.vue'

const showCart = ref(false)
const store = useStore()

export default defineComponent({
  name: 'CreditsComponent',
  components: {
    BannerComponent,
  },
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
                this.$router.push('/my-account-profil')
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
      }, 200);
    }
  },
})

</script>
