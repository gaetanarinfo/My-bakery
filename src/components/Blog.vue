<template name="BlogComponent">
  <div class="background fadeIn2 bb">

    <div class="content">

      <h1>Notre blog</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Blog</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="blog" class="section fadeIn3 last-blog">

    <div class="column-inner">

      <div class="wrapper">

        <div class="bloc container">

          <div class="hp-container">

            <div class="section text-center">

              <div v-show="showSimulatedReturnData" id="blocGrid" class="row">

                <div v-show="showSimulatedReturnData" class="col-lg-4 col-md-4 col-sm-12 col-xs-12"
                  v-for="blog in blogsAll" :key="blog.id">

                  <article>

                    <div class="thumbnail">

                      <a :href="'#/blog/' + blog.url" :title="blog.title"></a>

                      <img width="450" height="300" :src="'blogs/' + blog.image" alt="">

                    </div>

                    <div class="content text-start">

                      <span class="date"><i class="fa-solid fa-clock me-1"></i> Créer le {{
                        moment(blog.created_at).format('DD MMMM YYYY à H:mm') }}</span>

                      <h3 class="title">{{ blog.title }}</h3>

                      <span class="author">Par <span>{{ blog.author }}</span></span>
                      <span class="views me-2"><i class="fa-solid fa-eye me-1"></i>{{ blog.views }} vue<span
                          v-if="blog.views >= 2">s</span></span>

                      <p>{{ blog.small_content }}</p>

                      <a :href="'#/blog/' + blog.url" :title="blog.title" class="btn btn-bakery">Lire la suite</a>

                    </div>

                  </article>

                </div>

              </div>

              <div class="mt-5" v-show="showSimulatedReturnData">

                <div class="b-pagination">

                  <ul class="pagination">

                    <li>
                      <a role="button" v-bind:class="this.current === 1 ? 'disabled' : ''"
                        @click="chargeBlog(this.current - 1)"><i class="fa fa-angle-left"></i></a>
                    </li>

                    <li v-for="page in max" :key="page" v-bind:class="current === page ? 'active' : ''">
                      <a role="button" @click="chargeBlog(page)">{{ page }}</a>
                    </li>

                    <li>
                      <a role="button"
                        v-bind:class="this.current === Math.round(this.blogsAllCount / 9) ? 'disabled' : ''"
                        @click="chargeBlog(this.current + 1)"><i class="fa fa-angle-right"></i></a>
                    </li>

                  </ul>

                </div>

              </div>

              <q-inner-loading style="z-index: 9999;" size="5rem" color="blue-5" :showing="visible" />

            </div>

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
import { ref } from 'vue'
import axios from 'axios'

moment.locale('fr')

var counter = 1

export default defineComponent({
  name: 'BlogcComponent',
  setup() {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)

    const blogsAll = computed(() => {
      return store.state.blogsAll
    })

    const blogsAllCount = computed(() => {
      return store.state.blogsAllCount
    })

    onMounted(() => {
      store.dispatch('fetchBlogsAll')
    })

    return {
      showTextLoading() {
        visible.value = true
        showSimulatedReturnData.value = true

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 3000)
      },
      blogsAll,
      blogsAllCount,
      visible,
      moment: moment,
      showSimulatedReturnData,
    }
  },
  data() {
    return {
      current: ref(1),
      max: 1,
    }
  },
  methods: {
    chargeBlog(getPage) {

      axios.get(process.env.WEBSITE + '/blogs-page/' + getPage)
        .then((res) => {

          this.current = getPage

          $('#blocGrid').html('')

          $([document.documentElement, document.body]).animate({
            scrollTop: $('#blocGrid').offset().top
          }, 'slow')

          this.showTextLoading()

          $.each(res.data.blogsAll, function (index, blog) {

            var vues = ''

            if (blog.vue >= 2) {
              vues = '<span>s</span>'
            } else {
              vues = ''
            }

            $('#blocGrid').append('<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><article><div class="thumbnail"><a href="#/blog/' + blog.url + '" title="' + blog.title + '"></a><img width="450" height="300" src="blogs/' + blog.image + '" alt=""></div><div class="content text-start"><span class="date"><i class="fa-solid fa-clock me-1"></i> Créer le ' + moment(blog.created_at).format('DD MMMM YYYY à H:mm') + '</span><h3 class="title">' + blog.title + '</h3><span class="author">Par <span>' + blog.author + '</span></span><span class="views me-2"><i class="fa-solid fa-eye me-1"></i> ' + blog.views + ' vue' + vues + '</span><p>' + blog.small_content + '</p><a href="#/blog/' + blog.url + '" title="' + blog.title + '" class="btn btn-bakery">Lire la suite</a></div></article></div>')

          })

        })
        .catch((error) => {
          console.log(error);
        })

    },
    countBlog() {
      if (counter <= 1) {
        setTimeout(() => {
          if (this.blogsAll.length <= 8) this.max = 1;
          else this.max = Math.round(this.blogsAllCount / 9);
          counter++;
        }, 300);
      }
    }
  },
  mounted() {

    setTimeout(() => {
      this.countBlog()
    }, 1000);

    // Header

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 300) {
        $('header').removeClass('navigation-sticky navigation-unpin')
      } else {
        $('header').removeClass('navigation-sticky navigation-unpin')
      }
    })

    $('.header').addClass('h-blog')
    $('body').removeClass('loading')
    $('.fadeIn').fadeIn(600)
    $('.fadeIn2').fadeIn(600)
    $('.fadeIn3').fadeIn(600)
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
