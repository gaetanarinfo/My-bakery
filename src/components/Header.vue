<template name="HeaderComponent">

  <header class="header">
    <nav class="navigation">

      <div class="hn-container">

        <div class="nav-left">

          <ul class="menu-left">
            <li class="menu-item"><a @click="this.$router.push('/')"
                v-bind:class="this.$route.path === '/' ? 'active' : ''" aria-current="page">Accueil</a></li>

            <li class="menu-item"><a role="button"
                v-bind:class="this.$route.path === '/' ? 'scroll-click' : 'scroll-click-s'" data-scroll="a-propos">À
                propos</a></li>

            <li class="menu-item"><a :href="this.$route.path !== '/' ? '' : ''"
                v-bind:class="this.$route.path === '/' ? 'scroll-click' : 'scroll-click-s'"
                data-scroll="contact">Contact</a>
            </li>

            <li class="menu-item"><a @click="this.$router.push('/bakerys-pastry');"
                v-bind:class="this.$route.path === '/bakerys-pastry' ? 'active' : 'btn-target'">Boulangeries</a>
            </li>

            <li class="menu-item"><a @click="this.$router.push('/blogs-bakerys');"
                v-bind:class="this.$route.path === '/blogs-bakerys' ? 'active' : 'btn-target'">Blog</a></li>

            <li class="menu-item"><a @click="this.$router.push('/products');"
                  v-bind:class="this.$route.path === '/products' ? 'active' : 'btn-target'">Boutique</a></li>

          </ul>

        </div>

        <div class="nav-center">
          <a @click="this.$router.push('/')" class="logo">
            <img src="logo-light.png" alt="My Bakery - classement des meilleurs boulangerie de France">
          </a>
        </div>

        <div class="nav-right">

          <div class="actions">

            <a href="https://www.paypal.com/donate/?hosted_button_id=4VAGCN2585TPL&locale.x=fr_FR" role="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                  d="M8.32 21.97a.546.546 0 0 1-.26-.32c-.03-.15-.06.11.6-4.09c.6-3.8.59-3.74.67-3.85c.13-.17.11-.17 1.61-.18c1.32-.03 1.6-.03 2.19-.12c3.25-.45 5.26-2.36 5.96-5.66c.04-.22.08-.41.09-.41c0-.01.07.04.15.1c1.03.78 1.38 2.22.99 4.14c-.46 2.29-1.68 3.81-3.58 4.46c-.81.28-1.49.39-2.69.42c-.8.04-.82.04-1.05.19c-.17.17-.16.14-.55 2.55c-.27 1.7-.37 2.25-.41 2.35c-.07.16-.21.3-.37.38l-.11.07H10c-1.29 0-1.62 0-1.68-.03m-4.5-2.23c-.19-.1-.32-.27-.32-.47C3.5 19 6.11 2.68 6.18 2.5c.09-.18.32-.37.5-.44L6.83 2h3.53c3.91 0 3.76 0 4.64.2c2.62.55 3.82 2.3 3.37 4.93c-.5 2.93-1.98 4.67-4.5 5.3c-.87.21-1.48.27-3.14.27c-1.31 0-1.41.01-1.67.15c-.26.15-.47.42-.56.75c-.04.07-.27 1.47-.53 3.1a241.3 241.3 0 0 0-.47 3.02l-.03.06H5.69c-1.58 0-1.8 0-1.87-.04z"
                  fill="#38b0d5" />
              </svg>
            </a>

            <a v-if="geolocation" @click="this.$route.path !== '/' ? this.$router.push('/') : ''" role="button">
              <span class="material-symbols-outlined animated text-success">
                location_on
              </span>
            </a>

            <a v-else role="button" @click="errorNotif('Assurez-vous d\'activer votre localisation !')">
              <span class="material-symbols-outlined text-danger">
                location_off
              </span>
            </a>

            <a v-if="!isLoggedIn" v-bind:class="this.$route.path === '/my-account' ? 'active' : ''"
              @click="this.$router.push('/my-account');" role="button">
              <span class="material-symbols-outlined">
                login
              </span>
            </a>

            <a v-if="isLoggedIn" v-bind:class="this.$route.path === '/my-account-profil' ? 'active' : ''"
              @click="this.$router.push('/my-account-profil');" role="button">
              <span class="material-symbols-outlined">
                account_circle
              </span>
            </a>

            <a v-if="isLoggedIn" @click="logout" role="button">
              <span class="material-symbols-outlined">
                logout
              </span>
            </a>

            <a role="button" v-bind:class="this.$route.path === '/my-bakerys' ? 'active heart-btn' : 'heart-btn'"
              @click="this.$router.push('/my-bakerys');">
              <span class="material-symbols-outlined">
                favorite
              </span>
            </a>

            <div class="d-flex cart-nav">

              <a role="button" v-bind:class="this.$route.path === '/cart' ? 'active' : ''"
                @click="this.$router.push('/cart');">
                <span class="material-symbols-outlined">
                  shopping_cart
                </span>
              </a>

              <div class="cart-price"><span>{{ cart }} €</span></div>

            </div>

          </div>

        </div>

      </div>

    </nav>

    <nav class="navigation-mobile">

      <div class="hn-container">

        <a class="logo" @click="this.$router.push('/')">
          <img src="logo-light.png" alt="My Bakery - classement des meilleurs boulangerie de France">
        </a>

        <ul id="menu-main-menu">

          <li class="menu-item">
            <a @click="this.$router.push('/')" class="active" aria-current="page">Accueil</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click-s" data-scroll="a-propos">À propos de nous</a>
          </li>

          <li class="menu-item"><a :href="this.$route.path !== '/' ? '' : ''"
              v-bind:class="this.$route.path === '/' ? 'scroll-click' : 'scroll-click-s'"
              data-scroll="contact">Contact</a>
          </li>

          <li class="menu-item">
            <a @click="this.$router.push('/bakerys-pastry');">Boulangeries</a>
          </li>

          <li class="menu-item">
            <a @click="this.$router.push('/blogs-bakerys');">Blog</a>
          </li>

          <li class="menu-item">
            <a @click="this.$router.push('/products')">Boutique</a>
          </li>

          <li class="menu-item">
            <a href="https://www.paypal.com/donate/?hosted_button_id=4VAGCN2585TPL&locale.x=fr_FR">Faire un don</a>
          </li>

        </ul>

        <div class="menu-toggle-2"><span></span></div>

        <div class="actions">

          <a href="https://www.paypal.com/donate/?hosted_button_id=4VAGCN2585TPL&locale.x=fr_FR" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path
                d="M8.32 21.97a.546.546 0 0 1-.26-.32c-.03-.15-.06.11.6-4.09c.6-3.8.59-3.74.67-3.85c.13-.17.11-.17 1.61-.18c1.32-.03 1.6-.03 2.19-.12c3.25-.45 5.26-2.36 5.96-5.66c.04-.22.08-.41.09-.41c0-.01.07.04.15.1c1.03.78 1.38 2.22.99 4.14c-.46 2.29-1.68 3.81-3.58 4.46c-.81.28-1.49.39-2.69.42c-.8.04-.82.04-1.05.19c-.17.17-.16.14-.55 2.55c-.27 1.7-.37 2.25-.41 2.35c-.07.16-.21.3-.37.38l-.11.07H10c-1.29 0-1.62 0-1.68-.03m-4.5-2.23c-.19-.1-.32-.27-.32-.47C3.5 19 6.11 2.68 6.18 2.5c.09-.18.32-.37.5-.44L6.83 2h3.53c3.91 0 3.76 0 4.64.2c2.62.55 3.82 2.3 3.37 4.93c-.5 2.93-1.98 4.67-4.5 5.3c-.87.21-1.48.27-3.14.27c-1.31 0-1.41.01-1.67.15c-.26.15-.47.42-.56.75c-.04.07-.27 1.47-.53 3.1a241.3 241.3 0 0 0-.47 3.02l-.03.06H5.69c-1.58 0-1.8 0-1.87-.04z"
                fill="#38b0d5" />
            </svg>
          </a>

          <a v-if="geolocation" @click="this.$route.path !== '/' ? this.$router.push('/') : ''" role="button">
            <span class="material-symbols-outlined animated text-success">
              location_on
            </span>
          </a>

          <a v-else role="button" @click="errorNotif('Assurez-vous d\'activer votre localisation !')">
            <span class="material-symbols-outlined text-danger">
              location_off
            </span>
          </a>

          <a v-if="!isLoggedIn" v-bind:class="this.$route.path === '/my-account' ? 'active' : ''"
            @click="this.$router.push('/my-account');" role="button">
            <span class="material-symbols-outlined">
              login
            </span>
          </a>

          <a v-if="isLoggedIn" v-bind:class="this.$route.path === '/my-account-profil' ? 'active' : ''"
            @click="this.$router.push('/my-account-profil');" role="button">
            <span class="material-symbols-outlined">
              account_circle
            </span>
          </a>

          <a v-if="isLoggedIn" @click="logout" role="button">
            <span class="material-symbols-outlined">
              logout
            </span>
          </a>

          <a role="button" v-bind:class="this.$route.path === '/my-bakerys' ? 'active heart-btn' : 'heart-btn'"
            @click="this.$router.push('/my-bakerys');">
            <span class="material-symbols-outlined">
              favorite
            </span>
          </a>

          <div class="d-flex cart-nav">

            <a role="button" v-bind:class="this.$route.path === '/cart' ? 'active' : ''"
              @click="this.$router.push('/cart');">
              <span class="material-symbols-outlined">
                shopping_cart
              </span>
            </a>

            <div class="cart-price"><span>{{ cart }} €</span></div>

          </div>

        </div>

      </div>

    </nav>

  </header>
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { LocalStorage, SessionStorage, useQuasar } from 'quasar'
import { useStore } from 'vuex'
import moment from 'moment'
import { ref } from 'vue'

const searchHeader = null,
  geolocation = ref(true),
  cart = ref((LocalStorage.hasItem('shopping_total_ttc')) ? LocalStorage.getItem('shopping_total_ttc') : '0.00')

export default defineComponent({
  name: 'HeaderComponent',
  setup () {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const $q = useQuasar()

    const searchAll = computed(() => {
      return store.state.searchAll
    })

    const user = computed(() => {
      return store.state.stateUser.user
    })

    if (sessionStorage.getItem('token') !== null) {

      onMounted(() => {
        store.dispatch('fetchVerificationAccount')
      })

    }

    $q.notify.registerType('error-form', {
      icon: 'location_off',
      progress: false,
      color: 'red-6',
      textColor: 'white',
      classes: 'glossy',
      timeout: 3500
    })

    return {
      cart,
      errorNotif (message = null) {
        $q.notify({
          type: 'error-form',
          message
        })
      },
      geolocation,
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = true

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 1500)
      },
      isLoggedIn: store.getters.isLoggedIn,
      user,
      visible,
      searchHeader: searchHeader,
      moment: moment,
      showSimulatedReturnData,
    }
  },
  methods: {
    logout (e) {

      e.preventDefault()

      sessionStorage.removeItem('email')
      sessionStorage.removeItem('token')

      setTimeout(() => {
        location.reload()
      }, 1500);

    }
  },
  mounted () {

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function (position) {
      geolocation.value = true
    }

    // onError Callback receives a PositionError object
    //
    function onError (error) {
      geolocation.value = false
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

  },
})
</script>
