<template name="ArticleComponent">

  <div class="background bb background2" v-show="showSimulatedReturnData">

    <div class="content">

      <h1>{{ blog.title }}</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="before"><a role="button" @click="this.$router.push('/blogs')">Blog</a></li>

            <li class="active">{{ blog.title }}</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="page-article-blog blog-single section fadeIn3">

    <div class="container" v-show="showSimulatedReturnData">

      <div class="row">

        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">

          <div class="post-detail">

            <div class="post-thumbnail">

              <img width="675" height="450" :src="'blogs/' + blog.image" :alt="blog.title" />

            </div>

            <div class="post-content">

              <div class="post-container none">

                <div class="post-byline">

                  Par {{ blog.author }} - {{ blog.categorie }} - <span class="post-posted">
                    {{ moment(blog.created_at).format('DD MMMM YYYY') }}
                  </span>

                </div>

                <div class="post-content-inner" v-html="blog.large_description">
                </div>

                <div class="sharing">

                  <p class="text-right">Partager sur :

                    <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://my-bakery.fr' + $route.fullPath"><i
                        class="fa fa-facebook"></i></a>

                    <a :href="'https://twitter.com/share?url=https://my-bakery.fr' + $route.fullPath + '&text=' + blog.title + '&via=my-bakery'"
                      onclick="window.open(this.href);return false;"><i class="fa-brands fa-x-twitter"></i></a>

                    <a
                      :href="'https://www.linkedin.com/shareArticle?mini=true&url=https://my-bakery.fr' + $route.fullPath + '&text=' + blog.title"><i
                        class="fa fa-linkedin"></i></a>

                  </p>

                </div>

              </div>

            </div>

            <BannerComponent :margin="false" />

          </div>

          <div class="clearfix"></div>

        </div>

        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">

          <div class="widget categories-2 widget-categories widget-category">

            <h3 class="widget-title">Categories</h3>

            <div class="widget-content">

              <ul class="list-arrow">

                <li class="cat-item"><a>Blog</a></li>

              </ul>

            </div>

          </div>

          <div class="widget tag-cloud-2 widget-tags">

            <h3 class="widget-title">Tags</h3>

            <div class="tagcloud"><a v-for="blog_tag in blog_tags" v-bind:id="blog_tag.id" role="button">{{
              blog_tag.title
                }}</a></div>

          </div>

          <BannerSquareComponent />

        </div>

      </div>

    </div>

    <div class="loadingDiv" v-show="visible">
      <q-spinner-grid size="70px" color="info" />
    </div>

  </div>


</template>

<style lang="css">

.disabled {
  pointer-events: none;
}

.page-article-blog.section,
.page-article-blog .section {
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
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import moment from 'moment'
import { useRoute } from 'vue-router';
import BannerComponent from 'components/Banner.vue'
import BannerSquareComponent from 'components/BannerSquare.vue'

moment.locale('fr')

const visible = ref(false)
const showSimulatedReturnData = ref(true)

export default defineComponent({
  name: 'ArticleComponent',
  components: {
    BannerComponent,
    BannerSquareComponent,
  },
  setup () {
    const store = useStore()
    const route = useRoute();

    const blog = computed(() => {
      return store.state.blog
    })

    const blog_tags = computed(() => {
      return store.state.blog_tags
    })

    return {
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = false
      },
      showSimulatedReturnData,
      visible,
      blog,
      blog_tags,
      moment: moment,
    }
  },
  mounted () {

    const store = useStore();
    const route = useRoute();

    this.showTextLoading()

    store.dispatch('fetchBlog',
        {
          'url': route.params.url
        })

    setTimeout(() => {
      visible.value = false
      showSimulatedReturnData.value = true
    }, 1500);

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
      $('html, body').animate({ scrollTop: 0 }, 200)
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
