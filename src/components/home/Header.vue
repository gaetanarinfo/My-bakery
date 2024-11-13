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

  <header class="fadeIn header">
    <nav class="navigation">

      <div class="hn-container">

        <div class="nav-left">

          <ul class="menu-left">
            <li class="menu-item"><a href="/" v-bind:class="this.$route.path === '/' ? 'active' : ''"
                aria-current="page">Accueil</a></li>

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
          <a href="" class="logo">
            <img src="logo-light.png" alt="My bakery - classement des meilleurs boulangerie de France">
          </a>
        </div>

        <div class="nav-right">

          <ul class="menu-right">

            <li class="menu-item"><a :href="this.$route.path !== '/' ? '#/bakerys  ' : ''"
                v-bind:class="this.$route.path === '/bakerys' ? 'active' : ''" class="scroll-click"
                data-scroll="classement">Boulangeries</a></li>

            <li class="menu-item"><a :href="this.$route.path !== '/' ? '#/blog' : ''"
                v-bind:class="this.$route.path === '/blog' ? 'active' : ''" class="scroll-click"
                data-scroll="blog">Blog</a></li>

          </ul>

          <div class="actions">

            <a v-if="!isLoggedIn" @click="this.$router.push('/my-account');" role="button"><i
                class="icono-user"></i></a>

            <a v-if="isLoggedIn" @click="this.$router.push('/my-account-profil');" role="button"><i class="icono-user"></i></a>

            <a v-if="isLoggedIn" @click="logout" role="button"><i class="icono-signOut"></i></a>

            <a @click="this.$router.push('/my-bakerys');" class="heart-btn"><i class="icono-heart"></i></a>

            <a href="#" class="search-btn"><i class="icono-search"></i></a>

          </div>

        </div>

      </div>

    </nav>

    <nav class="navigation-mobile">

      <div class="hn-container">

        <a class="logo" href="/">
          <img src="logo-light.png" alt="My bakery - classement des meilleurs boulangerie de France">
        </a>

        <ul id="menu-main-menu">

          <li class="menu-item">
            <a href="/" class="active" aria-current="page">Accueil</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click" data-scroll="a-propos">À propos de nous</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click" data-scroll="contact">Contact</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click" data-scroll="classement">Boulangeries</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click" data-scroll="blog">Blog</a>
          </li>

        </ul>

        <div class="menu-toggle"><span></span></div>

        <div class="actions">

          <a v-if="!isLoggedIn" @click="this.$router.push('/my-account');" role="button"><i class="icono-user"></i></a>

          <a v-if="isLoggedIn" @click="this.$router.push('/my-account-profil');" role="button"><i class="icono-user"></i></a>

          <a role="button" @click="this.$router.push('/my-bakerys');" class="heart-btn"><i class="icono-heart"></i></a>

          <a v-if="isLoggedIn" @click="logout" role="button"><i class="icono-signOut"></i></a>

          <a href="#" class="search-btn"><i class="icono-search"></i></a>

        </div>

      </div>

    </nav>

  </header>
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'
import { ref } from 'vue'
import axios from 'axios'

const searchHeader = null

export default defineComponent({
  name: 'HeaderComponent',
  setup () {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)

    const searchAll = computed(() => {
      return store.state.searchAll
    })

    const user = computed(() => {
      return store.state.stateUser.user
    })

    onMounted(() => {
      store.dispatch('fetchSearchAll')
    })

    if (sessionStorage.getItem('token') !== null) {

      onMounted(() => {
        store.dispatch('fetchVerificationAccount')
      })

    }

    return {
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

      if (search.trim() != "" && this.searchHeader.length >= 3) {
        this.showTextLoading()
      }

      setTimeout(() => {
        if (search.trim() != "" && this.searchHeader.length >= 3) {

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

                  $('.searchbox-result #blocGrids').append('<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><article><div class="thumbnail"><a href="#/blogs/' + blog.url + '" title="' + blog.title + '"></a><img width="450" height="300" src="blogs/' + blog.image + '" alt=""></div><div class="content text-start"><span class="date"><i class="fa-solid fa-clock me-1"></i> Créer le ' + moment(blog.created_at).format('DD MMMM YYYY à H:mm') + '</span><h3 class="title">' + blog.title + '</h3><span class="author">Par <span>' + blog.author + '</span></span><span class="views me-2"><i class="fa-solid fa-eye me-1"></i> ' + blog.views + ' vue' + vues + '</span><p>' + blog.small_content + '</p><a href="#/blogs/' + blog.url + '" title="' + blog.title + '" class="btn btn-bakery">Lire la suite</a></div></article></div>')

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

      sessionStorage.removeItem('token')

      setTimeout(() => {
        location.reload()
      }, 1500);

    }
  },
  props: {}
})
</script>
