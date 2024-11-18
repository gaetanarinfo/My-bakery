<template name="ArticleComponent">
  <div class="background fadeIn2 bb background2">

    <div class="content">

      <h1>{{ blog.title }}</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="before"><a role="button" @click="this.$router.push('/blogs')">Blog</a></li>

            <li class="active">{{ blog.title }}</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="blog-single section fadeIn3">

    <div class="container">

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

            <div class="tagcloud"><a v-for="blog_tag in blog_tags" v-bind:id="blog_tag.id" role="button">{{ blog_tag.title
            }}</a></div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style lang="css">
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

.b-pagination {
  padding-top: 40px;
  text-align: center;
}

.b-pagination .pagination {
  margin: 0;
  display: inline-block;
}

.b-pagination .pagination li {
  display: inline-block;
  margin-right: 15px;
  text-align: center;
}

.b-pagination .pagination li>a:before,
.b-pagination .pagination li>a:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: -2;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.b-pagination .pagination li.active {
  border: none;
}

.b-pagination .pagination li a {
  text-decoration: none;
  padding: 0 17px;
  position: relative;
  display: inline-block;
  z-index: 30;
  font-family: "Lora", serif;
  font-size: 16px;
  color: #313131;
  line-height: 50px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
  border: none;
  background-color: transparent !important;
}

.b-pagination .pagination li.active a,
.b-pagination .pagination li a:hover {
  color: #fff;
}

.b-pagination .pagination li.active a:before,
.b-pagination .pagination li a:hover:before {
  background-color: #cd9b33;
}

.b-pagination .pagination li.active a:after {
  visibility: visible;
  opacity: 1;
}

.b-pagination .pagination li a:before {
  width: 50px;
  height: 50px;
  background-color: #e4e4e4;
}

.b-pagination .pagination li a:after {
  width: 45px;
  height: 45px;
  background-color: #cd9b33;
  z-index: -1;
  visibility: hidden;
  opacity: 0;
}
</style>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'
import { useRoute } from 'vue-router';

moment.locale('fr')

export default defineComponent({
  name: 'ArticleComponent',
  setup() {
    const store = useStore()
    const route = useRoute();

    const blog = computed(() => {
      return store.state.blog
    })

    const blog_tags = computed(() => {
      return store.state.blog_tags
    })

    store.dispatch('fetchBlog',
      {
        'url': route.params.url
      })

    return {
      blog,
      blog_tags,
      moment: moment,
    }
  },
  mounted() {

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
      }, 'slow')
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
