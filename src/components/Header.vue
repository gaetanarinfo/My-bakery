<template name="HeaderComponent">
  <div class="searchbox">

    <div class="searchbox-remove">
      <i class="fa fa-remove"></i>
    </div>

    <div class="container">

      <header>

        <p>Entrer un mot clé :</p>

        <form id="search-header-product">

          <input v-model="searchHeader" @keyup="searchBlog(this.searchHeader)" type="text" class="form-control">

          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>

        </form>

      </header>

      <div class="searchbox-result section last-blog">

        <div class="column-inner">

          <div class="wrapper">

            <div class="bloc container">

              <div class="hp-container">

                <div class="section text-center">

                  <div id="blocGrids" v-show="showSimulatedReturnData" class="row">

                  </div>

                  <q-inner-loading style="z-index: 9999;" size="5rem" color="blue-5" :showing="visible" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <footer class="text-center"></footer>

    </div>

  </div>

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

          </ul>

        </div>

        <div class="nav-center">
          <a @click="this.$router.push('/')" class="logo">
            <img src="logo-light.png" alt="My Bakery - classement des meilleurs boulangerie de France">
          </a>
        </div>

        <div class="nav-right">

          <ul class="menu-right">

            <li class="menu-item"><a @click="this.$router.push('/bakerys');"
                v-bind:class="this.$route.path === '/bakerys' ? 'active' : 'btn-target'">Boulangeries</a></li>

            <li class="menu-item"><a @click="this.$router.push('/blogs');"
                v-bind:class="this.$route.path === '/blogs' ? 'active' : 'btn-target'">Blog</a></li>

          </ul>

          <div class="actions">

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

            <a role="button" @click="this.$router.push('/cart');">
              <span class="material-symbols-outlined">
                shopping_cart
              </span>
            </a>

            <a v-if="!isLoggedIn" @click="this.$router.push('/my-account');" role="button">
              <span class="material-symbols-outlined">
                login
              </span>
            </a>

            <a v-if="isLoggedIn" @click="this.$router.push('/my-account-profil');" role="button">
              <span class="material-symbols-outlined">
                account_circle
              </span>
            </a>

            <a v-if="isLoggedIn" @click="logout" role="button">
              <span class="material-symbols-outlined">
                logout
              </span>
            </a>

            <a role="button" @click="this.$router.push('/my-bakerys');" class="heart-btn">
              <span class="material-symbols-outlined">
                favorite
              </span>
            </a>

            <a href="">
              <span class="material-symbols-outlined search-btn">
                search
              </span>
            </a>

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
            <a @click="this.$router.push('/bakerys');">Boulangeries</a>
          </li>

          <li class="menu-item">
            <a @click="this.$router.push('/blogs');">Blog</a>
          </li>

          <li class="menu-item">
            <a @click="this.$router.push('/products')">Nos produits</a>
          </li>

        </ul>

        <div class="menu-toggle-2"><span></span></div>

        <div class="actions">

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

          <a role="button" @click="this.$router.push('/cart');">
            <span class="material-symbols-outlined">
              shopping_cart
            </span>
          </a>

          <a v-if="!isLoggedIn" @click="this.$router.push('/my-account');" role="button">
            <span class="material-symbols-outlined">
              login
            </span>
          </a>

          <a v-if="isLoggedIn" @click="this.$router.push('/my-account-profil');" role="button">
            <span class="material-symbols-outlined">
              account_circle
            </span>
          </a>

          <a v-if="isLoggedIn" @click="logout" role="button">
            <span class="material-symbols-outlined">
              logout
            </span>
          </a>

          <a role="button" @click="this.$router.push('/my-bakerys');" class="heart-btn">
            <span class="material-symbols-outlined">
              favorite
            </span>
          </a>

          <a href="">
            <span class="material-symbols-outlined search-btn">
              search
            </span>
          </a>

        </div>

      </div>

    </nav>

  </header>
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import moment from 'moment'
import { ref } from 'vue'
import axios from 'axios'

const searchHeader = null,
  geolocation = ref(true)

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
    searchBlog (search = null) {

      if (this.searchHeader.length >= 3) {
        this.showTextLoading()
      }

      setTimeout(() => {
        if (this.searchHeader.length >= 3) {

          axios.get(process.env.WEBSITE + '/search/' + search.trim())
            .then((res) => {

              $('.searchbox-result #blocGrids').html('')

              if (res.data.searchAll.length != 0) {

                $.each(res.data.searchAll, function (index, blog) {

                  var vues = ''

                  if (blog.vue >= 2) {
                    vues = '<span>s</span>'
                  } else {
                    vues = ''
                  }

                  $('.searchbox-result #blocGrids').append('<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><article><div class="thumbnail"><a href="blogs/' + blog.url + '" title="' + blog.title + '"></a><img width="450" height="300" src="blogs/' + blog.image + '" alt=""></div><div class="content text-start"><span class="date"><i class="fa-solid fa-clock me-1"></i> Créer le ' + moment(blog.created_at).format('DD MMMM YYYY à H:mm') + '</span><h3 class="title">' + blog.title + '</h3><span class="author">Par <span>' + blog.author + '</span></span><span class="views me-2"><i class="fa-solid fa-eye me-1"></i> ' + blog.views + ' vue' + vues + '</span><p>' + blog.small_content + '</p><a href="blogs/' + blog.url + '" title="' + blog.title + '" class="btn btn-bakery">Lire la suite</a></div></article></div>')

                })

              } else {

                $('.searchbox-result #blocGrids').html('<div class="alert alert-info">Aucun article n\'a été trouvé.</div>')

              }

            })
            .catch((error) => {
              console.log(error);
            })
        }
      }, 1500);

    },
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
