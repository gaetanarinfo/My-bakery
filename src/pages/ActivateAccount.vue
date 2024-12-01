<template>
  <HeaderComponent />

  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>Activation de votre compte</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Activation de votre compte</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="login" class="section fadeIn3">

    <div class="content b-80 b-80" style="min-height: 100%;">

      <div class="container">

        <div v-if="activateAccount.activateAccount !== false">
          <div class="text-center mb-5">
            <img src="check.png" style="max-width: 200px;">
          </div>
          <h3 class="text-center text-success" style="line-height: 40px;" v-html="activateAccount.message"></h3>
          <div class="text-center mt-5">
            <a @click="this.$router.push('/my-account');" class="btn btn-bakery">Connexion</a>
          </div>
        </div>

        <div v-else>
          <div class="text-center mb-5">
            <img src="error.png" style="max-width: 200px;">
          </div>
          <h3 class="text-center text-warning mb-5" style="line-height: 40px;" v-html="activateAccount.message"></h3>
          <div class="text-center mt-5">
            <a @click="this.$router.push('/my-account');" class="btn btn-bakery">Retour</a>
          </div>
        </div>

      </div>

    </div>

  </div>

  <Section7 />

  <FooterComponent />
</template>

<style lang="css">
.last-bakery .column-inner .wrapper .bloc .section:last-child img {
  max-width: 100%;
  cursor: pointer;
  width: 100%;
  height: 300px;
}

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
</style>


<script>
import { defineComponent, onMounted, computed } from 'vue'
import HeaderComponent from 'components/Header.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ActivateAccount',
  setup() {

    const route = useRoute()
    const store = useStore()

    const activateAccount = computed(() => {
      return store.state.activateAccount
    })

    onMounted(() => {
      store.dispatch('fetchActivateAccount',
        {
          'token': route.params.token
        })
    })

    return {
      activateAccount,
    }

  },
  components: {
    HeaderComponent,
    FooterComponent,
    Section7,
  },
  mounted() {

    if (sessionStorage.getItem('token') !== null) {
      location.href = '/'
    }

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
      }, '200')
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
      console.log('test')
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
