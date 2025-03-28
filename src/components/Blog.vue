<template name="BlogComponent">
  <div class="background fadeIn2 bb background2">

    <div class="content">

      <h1>Notre blog</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="breadcrumb">

            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a
                @click="this.$router.push('/')" itemprop="item" href="https://my-bakery.fr">
                <span itemprop="name">Accueil</span>
              </a>
              <meta itemprop="position" content="1" />
            </li>

            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" class="active">
              <span itemprop="name">Blog</span>
              <meta itemprop="position" content="2" />
            </li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="blog" class="page-blog section fadeIn3 last-blog">

    <div class="column-inner">

      <div class="wrapper">

        <BannerComponent v-show="showSimulatedReturnData" :margin="false" :top="false" />

        <div class="bloc container">

          <div class="hp-container" v-show="showSimulatedReturnData">

            <div class="section text-center">

              <div class="row mobile">

                <div v-if="blogsAllCount >= 1" id="blocGrid" class="col-lg-8 col-md-8 col-sm-12 col-xs-12">

                  <article itemscope itemtype="https://schema.org/Article" v-for="blog in blogsAll" :key="blog.id">

                    <div class="thumbnail">

                      <div class="pic" :style="'background: url(' + 'blogs/' + blog.image + ')'"></div>
                      <img style="display: none;" itemprop="image" :src="'blogs/' + blog.image" alt="">

                      <div class="blog-pic-inner">

                        <div class="label">{{ blog.name }}</div>

                        <ul>
                          <li itemprop="author" itemscope itemtype="https://schema.org/Person"><span class="d-none"
                              itemprop="url" :content="'https://my-bakery.fr/article/' + blog.url"></span>Par <span
                              itemprop="name">{{ blog.author }}</span></li>
                          <li itemprop="datePublished"
                            :content="moment(blog.created_at).format('YYYY-MM-DDTHH:mm:ss+08:00')"><i
                              class="fa-solid fa-clock me-1"></i> Créer le {{
                                moment(blog.created_at).format('DD MMMM YYYY à H:mm') }}</li>
                          <li>{{ blog.views }} vues</li>
                        </ul>

                      </div>

                    </div>

                    <div class="content text-start">

                      <a @click="this.$router.push('/article/' + blog.url)" :title="blog.title">
                        <h3 itemprop="headline" class="title">{{ blog.title }}</h3>
                      </a>

                      <p itemprop="text">{{ substrats(blog.small_content) }}</p>

                      <a @click="this.$router.push('/article/' + blog.url)" :title="blog.title"
                        class="btn btn-bakery">Lire la
                        suite</a>

                    </div>

                    <div>
                      <Adsense adStyle="display:block" clientId="ca-pub-1970778156829593" slotId="4678295428"></Adsense>
                    </div>

                  </article>

                </div>

                <div v-else id="blocGrid" class="col-lg-8 col-md-8 col-sm-12 col-xs-12"
                  style="display: flex; align-items: center;justify-content: center;">

                  <div class="cartEmpty">

                    <img style="max-width: 500px" src="bakerys/large-5.jpg" alt="My Bakery">

                    <h3>Aucun résultat ne correspond<br />aux critères de recherche.</h3>

                    <p>Vous le saviez ? avec My Bakery, vous pouvez commander à tout moment,<br class="br-no"> notre
                      service technique
                      vous
                      livrera vos produits dans les plus brefs délais.</p>

                    <a class="ps-btn cursor-pointer" @click="this.$router.push('/products')">Nos produits</a>

                  </div>

                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 column-search-blog">

                  <div class="form-order">

                    <div class="column-search">

                      <h5>Rechercher</h5>

                      <div class="form-group">

                        <p class="mb-0"><strong>{{ blogsAllCount }}</strong> actualités</p>

                      </div>

                      <div class="form-group">

                        <span class="select">
                          <input v-model="search" type="text" class="form-control" placeholder="Entrer un mot clé...">
                        </span>

                      </div>

                      <div class="form-group validate mt-0">

                        <a role="button" class="btn btn-bakery me-3"
                          @click="chargeBlog(current, search, categorieId, true)">Rechercher</a>

                        <a role="button" class="btn btn-bakery"
                          @click="chargeBlog(current, search, categorieId, true, true)">Effacer</a>

                      </div>

                      <hr class="w-100" />

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

                    <div class="column-search">

                      <h5>Catégories</h5>

                      <div class="blog-sidebar-item-categories">

                        <ul>
                          <li v-for="categorie in categoriesBlogs"><a class="addTagCategorie" :data-id="categorie.id"
                              @click="changeCategorie(categorie.id), chargeBlog(current, search, categorieId)">{{
                                categorie.name }} <span>{{
                                categorie.counter }}</span></a></li>
                        </ul>

                      </div>

                    </div>

                    <BannerSquareComponent />

                  </div>

                </div>

              </div>

              <div v-if="pagination">

                <div class="b-pagination">

                  <ul class="pagination">

                    <li>
                      <a role="button" v-bind:class="current === 1 ? 'disabled' : ''"
                        @click="chargeBlog(current - 1, search, categorieId)"><i class="fa fa-angle-left"></i></a>
                    </li>

                    <li v-for="page in max" :key="page" v-bind:class="current === page ? 'active' : ''">
                      <a role="button" @click="chargeBlog(page, search, categorieId)">{{ page }}</a>
                    </li>

                    <li>
                      <a role="button" v-bind:class="current === Math.round(blogsAllCount / 9) ? 'disabled' : ''"
                        @click="chargeBlog(current + 1, search, categorieId)"><i class="fa fa-angle-right"></i></a>
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

          <div class="loadingDiv" v-show="visible">
            <q-spinner-grid size="70px" color="info" />
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style lang="css">
.page-blog .loadingDiv {
  margin-bottom: 5rem;
}

@media all and (max-width: 768px) {
  .page-blog .loadingDiv {
    margin-bottom: 2rem;
  }
}

#blog.page-blog .section {
  margin-bottom: 5rem;
}

@media all and (max-width: 768px) {
  #blog.page-blog .section {
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {

  #blog.page-blog .ban_campaign {
    margin-bottom: 0 !important;
  }

}

#blog.page-blog .container-xl.section.fadeIn.padding {
  padding-top: 0 !important;
  padding-right: var(--bs-gutter-x, 0.75rem) !important;
  padding-left: var(--bs-gutter-x, 0.75rem) !important;
}

.disabled {
  pointer-events: none;
}

.page-blog.section,
.page-blog .section {
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

#blog.page-blog {
  padding: 5rem 0 0 0;
}

@media all and (max-width: 768px) {

  #blog.page-blog {
    padding: 2rem 0 0 0;
  }

  #blog {
    padding: 2rem 0;
  }

  .page-blog.section,
  .page-blog .section {
    margin-bottom: 2rem;
  }

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
import { ref } from 'vue'
import axios from 'axios'
import BannerComponent from 'components/Banner.vue'
import BannerSquareComponent from 'components/BannerSquare.vue'
import { Adsense } from 'vue3-google-adsense';

moment.locale('fr')

var counter = 1

const pageMax = ref(0),
  max = ref(1),
  blogsAll = ref([]),
  blogsAllCount = ref([]),
  current = ref(1),
  search = ref(''),
  showSimulatedReturnData = ref(false),
  visible = ref(true),
  pagination = ref(false),
  categorieId = ref(0)

export default defineComponent({
  name: 'BlogcComponent',
  components: {
    BannerComponent,
    BannerSquareComponent,
    Adsense,
  },
  setup () {
    const store = useStore()

    const categoriesBlogs = computed(() => {
      return store.state.categoriesBlogs
    })

    const viewsBlogs = computed(() => {
      return store.state.viewsBlogs
    })

    onMounted(() => {
      store.dispatch('fetchBlogsCategoires')
      store.dispatch('fetchBlogsViews')
    })

    return {
      changeCategorie (id) {
        categorieId.value = id
      },
      categorieId,
      viewsBlogs,
      categoriesBlogs,
      pagination,
      max,
      pageMax,
      current,
      search,
      blogsAll,
      blogsAllCount,
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = false
      },
      visible,
      moment: moment,
      showSimulatedReturnData,
    }
  },
  methods: {
    substrats (value) {
      return value.substr(0, 249) + '...'
    },
    chargeBlog (page, searchs = null, categorieIds, button = false, deletes = false) {

      if (deletes) {
        current.value = 1
        page = 1
        search.value = ''
        categorieId.value = 0
        $(document).find('.addTagCategorie').removeClass('active')
      }

      if (button) {
        current.value = 1
        page = 1
      }

      $([document.documentElement, document.body]).animate({
        scrollTop: $('#blog').offset().top
      }, '600')

      this.showTextLoading()

      setTimeout(() => {

        axios.post(process.env.WEBSITE + '/blogs-page-search', { page, search: searchs, categorieId: categorieIds })
          .then((res) => {

            current.value = page
            blogsAll.value = []
            blogsAllCount.value = 0
            counter = 1

            if (res.data.succes === true) {
              blogsAll.value = res.data.search
              blogsAllCount.value = res.data.blogsAllCount

              if (res.data.blogsAllCount <= 10) {
                pagination.value = false
              } else {
                pagination.value = true
              }

              visible.value = false
              showSimulatedReturnData.value = true

              this.countBlog(res.data.search, res.data.blogsAllCount)

            }

          })


      }, 2500);

    },
    countBlog (data1, data2) {

      max.value = 0
      pageMax.value = 0

      if (counter <= 1) {

        setTimeout(() => {

          if ((Math.round((data2) / data1.length)) <= 8) max.value = Math.round((data2) / data1.length) - 1;
          else max.value = data1.length

          if ((Math.round((data2) / data1.length)) <= 8) pageMax.value = Math.round((data2) / data1.length);
          else pageMax.value = Math.round((data2) / 9)


          counter++;

        }, 300);

      }

    }

  },
  mounted () {

    this.showTextLoading()

    setTimeout(() => {

      axios.get(process.env.WEBSITE + '/blogs-all').then(res => {

        if (res.data.succes === true) {

          current.value = 1
          blogsAll.value = []
          blogsAllCount.value = 0
          counter = 1
          blogsAll.value = res.data.blogsAll
          blogsAllCount.value = res.data.blogsAllCount

          if (res.data.blogsAllCount <= 10) {
            pagination.value = false
          } else {
            pagination.value = true
          }

          if (counter <= 1) {
            if ((Math.round((res.data.blogsAllCount) / res.data.blogsAll.length)) <= 8) max.value = Math.round((res.data.blogsAllCount) / res.data.length) - 1;
            else max.value = res.data.blogsAll.length

            pageMax.value = Math.round((res.data.blogsAllCount) / res.data.blogsAll.length);
            counter++;
          }

          visible.value = false
          showSimulatedReturnData.value = true

        }

      })

    }, 1000);

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

    $(document).on('click', '.addTagCategorie', function (e) {

      e.preventDefault()

      $(document).find('.addTagCategorie').removeClass('active')
      $(this).addClass('active')

    })

  }
})
</script>
