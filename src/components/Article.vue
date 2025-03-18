<template name="ArticleComponent">

  <div class="background bb background2" v-show="showSimulatedReturnData">

    <div class="content">

      <h1>{{ blog.title }}</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="breadcrumb">

            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a
                @click="this.$router.push('/')" itemprop="item" href="https://my-bakery.fr">
                <span itemprop="name">Accueil</span>
              </a>
              <meta itemprop="position" content="1" />
            </li>

            <li class="before" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a role="button" itemscope itemtype="https://schema.org/WebPage" itemprop="item"
                itemid="https://my-bakery.fr/blogs/bakerys" @click="this.$router.push('/blogs-bakerys')">
                <span itemprop="name">Blog</span>
              </a>
              <meta itemprop="position" content="2" />
            </li>

            <li class="active" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <span itemprop="name">{{ blog.title }}</span>
              <meta itemprop="position" content="3" />
            </li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div itemscope itemtype="https://schema.org/Article" class="page-article-blog blog-single section fadeIn3 last-blog">

    <div class="container" v-show="showSimulatedReturnData">

      <div class="row">

        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">

          <div class="post-detail">

            <article>

              <div class="thumbnail">

                <div class="pic" :style="'background: url(' + 'blogs/' + blog.image + ')'"></div>
                <img style="display: none;" itemprop="image" :src="'blogs/' + blog.image" :alt="blog.title">

                <div class="blog-pic-inner">

                  <div class="label">{{ blog.name }}</div>

                  <ul>
                    <li itemprop="author" itemscope itemtype="https://schema.org/Person"><span class="d-none"
                        itemprop="url" :content="'https://my-bakery.fr/article/' + blog.url"></span>Par <span
                        itemprop="name">{{
                          blog.author }}</span></li>
                    <li itemprop="datePublished" :content="moment(blog.created_at).format('YYYY-MM-DDTHH:mm:ss+08:00')">
                      <i class="fa-solid fa-clock me-1"></i> Créer le {{
                        moment(blog.created_at).format('DD MMMM YYYY à H:mm') }}
                    </li>
                    <li>{{ blog.views }} vues</li>
                  </ul>

                </div>

              </div>

              <div class="content text-start">

                <div class="post-container none">

                  <a @click="this.$router.push('/article/' + blog.url)" :title="blog.title">
                    <h3 itemprop="headline" class="title">{{ blog.title }}</h3>
                  </a>

                  <div class="post-content-inner" itemprop="text" v-html="blog.large_description">
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

            </article>

            <BannerComponent :margin="false" />

          </div>

          <div class="clearfix"></div>

        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 column-search-blog">

          <div class="column-search widget categories-2 widget-categories widget-category">

            <h5 class="widget-title">Catégories</h5>

            <div class="widget-content">

              <ul class="list-arrow">

                <li :class="(blog.categorie === categorie.id) ? 'active cat-item' : 'cat-item'"
                  v-for="categorie in categoriesBlogs"><a>{{ categorie.name }} <span>{{
                    categorie.counter }}</span></a></li>

              </ul>

            </div>

          </div>

          <div class="column-search">

            <h5>Articles populaires</h5>

            <div class="blog-sidebar-recent">

              <a @click="" v-for="views in viewsBlogs" class="blog-sidebar-recent-item">

                <div class="blog-sidebar-recent-item-pic">

                  <img :src="'blogs/' + views.image" :alt="views.title">

                </div>

                <div class="blog-sidebar-recent-item-text">

                  <a @click="this.$router.push('/article/' + views.url)" :title="views.title">
                    <h4>{{ views.title }}</h4>
                  </a>

                  <span>{{ moment(views.created_at).format('DD MMMM YYYY à H:mm') }}</span>

                </div>

              </a>

            </div>

          </div>


          <div class="column-search widget tag-cloud-2 widget-tags">

            <h5 class="widget-title">Tags</h5>

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

    const categoriesBlogs = computed(() => {
      return store.state.categoriesBlogs
    })

    const blog_tags = computed(() => {
      return store.state.blog_tags
    })

    const viewsBlogs = computed(() => {
      return store.state.viewsBlogs
    })

    onMounted(() => {
      store.dispatch('fetchBlogsCategoires')
      store.dispatch('fetchBlogsViews')
    })

    return {
      viewsBlogs,
      categoriesBlogs,
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

  }
})
</script>
