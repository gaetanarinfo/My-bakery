<template name="MyBakerys">
  <div class="background fadeIn2 bb background2">

    <div class="content">

      <h1>Liste de souhaits</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Liste de souhaits</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="section fadeIn3">

    <div class="ps-content b-80 b-80">

      <div class="container">

        <div class="table-responsive">

          <table id="table-list" class="table b-table b-table-whishlist">

            <thead>

              <tr>

                <th></th>

                <th>Nom</th>

                <th>Description</th>

                <th>Vue(s)</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              <tr v-if="!Cookies.has('bakerysList')">

                <td colspan="5">

                  <div class="alert alert-info">Aucune boulangerie n'est présente dans votre liste.</div>

                </td>

              </tr>

              <tr v-for="favorite in bakerysFavorites" v-bind:id="'tr-' + favorite.id">

                <td colspan="2">

                  <div class="grid-t-m">

                    <div class="image">
                      <img :src="favorite.image" width="90" height="90" alt="">
                    </div>

                    <div class="title">
                      <h5>{{ favorite.title }}</h5>
                      <p class="location">{{ favorite.adresse + ' ' + favorite.ville + ' ' + favorite.cp }}</p>
                    </div>

                  </div>

                </td>

                <td>
                  <p class="small-content">{{ favorite.small_content }}</p>
                </td>

                <td>
                  <p class="text-center" v-if="favorite.views !== 0"><b>{{ favorite.views }}</b> vue(s)</p>
                  <p class="text-center" v-else><b>0</b> vue</p>
                </td>

                <td>

                  <div>

                    <a role="button" :data-id="favorite.id" @click="removeFavorite(favorite.id)">
                      <i class="icono-trash text-danger"></i>
                    </a>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>

  <div id="classement-my-bakerys" class="section last-bakery">

    <div class="column-inner">

      <div class="wrapper">

        <div class="bloc container">

          <div class="hp-container">

            <div class="section text-center">

              <h2 class="title">Ces boulangeries pourrait vous intéresser&nbsp;!</h2>

              <p>&nbsp;</p>

              <div>
                <img class="delicious" src="floral.png" alt="Delicieux">
              </div>

            </div>

            <div class="section">

              <div class="row">

                <div class="col-lg-4 col-md-4 bakery" v-for="bakery in bakerys" :key="bakery.id">

                  <div class="row">

                    <div>

                      <div :id="'carouselBakery' + bakery.id" class="carousel slide slider-bakery carousel-fade"
                        data-ride="carousel">

                        <div class="carousel-indicators">

                          <button type="button" :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>

                          <button type="button" :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>

                            <button type="button" :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>

                            <button type="button" :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>

                        </div>

                        <div class="carousel-inner">

                          <div class="carousel-item active">

                            <a :href="'#/bakery/' + bakery.url">
                              <img class="d-block w-100" :src="'bakerys/' + bakery.image" :alt="bakery.title">
                            </a>

                          </div>

                          <div class="carousel-item">

                            <a :href="'#/bakery/' + bakery.url">
                              <img class="d-block w-100" :src="'bakerys/' + bakery.image_2" :alt="bakery.title">
                            </a>

                          </div>

                          <div class="carousel-item">

                            <a :href="'#/bakery/' + bakery.url">
                              <img class="d-block w-100" :src="'bakerys/' + bakery.image_3" :alt="bakery.title">
                            </a>

                          </div>

                          <div class="carousel-item">

                            <a :href="'#/bakery/' + bakery.url">
                              <img class="d-block w-100" :src="'bakerys/' + bakery.image_4" :alt="bakery.title">
                            </a>

                          </div>

                        </div>

                        <button class="carousel-control-prev" type="button"
                          :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button"
                          :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>

                      </div>

                      <a :href="'#/bakery/' + bakery.url" class="title">{{ bakery.title }}</a>

                      <div>
                        <p class="content">{{ bakery.small_content }}</p>
                      </div>

                    </div>

                    <div>
                      <div class="devanture">

                        <span>Devanture du magasin :</span>

                        <div class="br-widget">

                          <a href="#" v-if="bakery.counter_devanture !== 0" v-for="note in 5" :key="note"
                            :data-rating-value="note" :data-rating-text="note"
                            v-bind:class="note > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture) ? '' : 'br-selected'"></a>

                          <a href="#" v-if="bakery.counter_devanture === 0" v-for="note in 5" :key="note" class=""></a>

                          <div v-if="bakery.counter_devanture !== 0" class="br-current-rating">{{
                            Math.round(bakery.counter_devanture * 5 /
                              bakery.sum_devanture) }}</div>

                          <div class="br-current-rating" v-else>0</div>
                        </div>

                      </div>

                      <div class="proprete">

                        <span>Propreté du magasin :</span>

                        <div class="br-widget">

                          <a href="#" v-if="bakery.counter_proprete !== 0" v-for="note2 in 5" :key="note2"
                            :data-rating-value="note2" :data-rating-text="note2"
                            v-bind:class="note2 > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete) ? '' : 'br-selected'"></a>

                          <a href="#" v-if="bakery.counter_proprete === 0" v-for="note2 in 5" :key="note2" class=""></a>

                          <div class="br-current-rating" v-if="bakery.counter_proprete !== 0">{{
                            Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)
                          }}</div>

                          <div class="br-current-rating" v-else>0</div>

                        </div>

                      </div>

                      <div class="prix">

                        <span>Prix des produits :</span>

                        <div class="br-widget">

                          <a href="#" v-if="bakery.counter_prix !== 0" v-for="note3 in 5" :key="note3"
                            :data-rating-value="note3" :data-rating-text="note3"
                            v-bind:class="note3 > Math.round(bakery.counter_prix * 5 / bakery.sum_prix) ? '' : 'br-selected'"></a>

                          <a href="#" v-if="bakery.counter_prix === 0" v-for="note3 in 5" :key="note3" class=""></a>

                          <div v-if="bakery.counter_prix !== 0" class="br-current-rating">{{
                            Math.round(bakery.counter_prix * 5 / bakery.sum_prix)
                          }}</div>

                          <div class="br-current-rating" v-else>0</div>

                        </div>

                      </div>

                      <div class="choix">

                        <span>Choix des produits :</span>

                        <div class="br-widget">

                          <a href="#" v-if="bakery.counter_choix !== 0" v-for="note4 in 5" :key="note4"
                            :data-rating-value="note4" :data-rating-text="note4"
                            v-bind:class="note4 > Math.round(bakery.counter_choix * 5 / bakery.sum_choix) ? '' : 'br-selected'"></a>

                          <a href="#" v-if="bakery.counter_choix === 0" v-for="note4 in 5" :key="note4" class=""></a>

                          <div v-if="bakery.counter_choix !== 0" class="br-current-rating">{{
                            Math.round(bakery.counter_choix * 5 / bakery.sum_choix)
                          }}</div>

                          <div class="br-current-rating" v-else>0</div>

                        </div>

                      </div>

                      <p class="location">
                        <i class="fa-solid fa-map-location me-1"></i> {{ bakery.adresse }}
                      </p>

                      <div class="text-end">

                        <p class="mb-1"><strong>Dernier commentaire :</strong></p>

                        <div v-if="bakery.author_comment !== null">

                          <p class="last-ratings">Par <strong>{{ bakery.author_comment }}</strong> - <span>le {{
                            moment(bakery.created_at_comment).format('DD MMMM YYYY à H:mm') }}</span></p>

                          <p class="last-ratings">{{ bakery.content_comment }}</p>

                        </div>

                        <div class="empty-comments" v-else>

                          Aucun commentaire pour cette boulangerie !

                        </div>

                      </div>

                    </div>

                    <div class="text-end mt-3 grid-mobile">

                      <div v-if="Cookies.has('bakerysList') !== false">

                        <a v-if="Cookies.get('bakerysList').indexOf(bakery.id) != -1" @click="saveBakeryList(bakery.id)"
                          :class="'btn btn-bakery me-3 delete-bakery-list-' + bakery.id"><i
                            class="fa-solid fa-heart me-2 text-danger"></i>Supprimer</a>

                        <a v-else @click="saveBakeryList(bakery.id)"
                          :class="'btn btn-bakery me-3 bakery-list-' + bakery.id"><i
                            class="fa-solid fa-heart-circle-xmark me-2 text-danger"></i>Ajouter à ma liste</a>

                        <a :href="'#/bakery/' + bakery.url" class="btn btn-bakery">En savoir +</a>

                      </div>

                      <div v-else>

                        <a @click="saveBakeryList(bakery.id)" :class="'btn btn-bakery me-3 bakery-list-' + bakery.id"><i
                            class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>

                        <a :href="'#/bakery/' + bakery.url" class="btn btn-bakery">En savoir +</a>

                      </div>

                    </div>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
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
import { Cookies } from 'quasar'

moment.locale('fr')

var bakerysFavorites = ''

export default defineComponent({
  name: 'BlogcComponent',
  setup() {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)

    const bakerys = computed(() => {
      return store.state.bakerys
    })

    onMounted(() => {
      store.dispatch('fetchBakerys', { 'limite': 3 })
    })

    if (Cookies.has('bakerysList')) {

      bakerysFavorites = computed(() => {
        return store.state.bakerysFavorites
      })

      onMounted(() => {
        store.dispatch('fetchBakerysFavorites', {
          'favorites': Cookies.get('bakerysList')
        })
      })

    } else {
      bakerysFavorites = []
    }

    return {
      showTextLoading() {
        visible.value = true
        showSimulatedReturnData.value = true

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 3000)
      },
      visible,
      moment: moment,
      Cookies: Cookies,
      bakerys,
      bakerysFavorites,
      showSimulatedReturnData,
    }
  },
  methods: {
    saveBakeryList(id) {

      const bakerysList = Cookies.has('bakerysList'),
        cookies = Cookies.get('bakerysList')

      $('.bakery-list-' + id).html('<i class="fa-solid fa-heart-circle-xmark text-danger me-2"></i> Supprimer')

      if ($(document).find('.bakery-list-' + id).length !== 0) {

        if (!bakerysList) {
          Cookies.set('bakerysList', id, { expires: 30000 })
        } else {
          Cookies.set('bakerysList', Cookies.get('bakerysList') + '-' + id)
        }

      } else {

        var total = cookies.replace('-' + id, '');

        if (cookies.indexOf(id + '-') != -1) {

          var total = cookies.replace(id + '-', '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        } else if (cookies.indexOf('-' + id) != -1) {

          var total = cookies.replace('-' + id, '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        }

        if (cookies.split('-').length === 1) {
          Cookies.remove('bakerysList');
        }

        $('.delete-bakery-list-' + id).removeClass('delete-bakery-list-' + id).addClass('bakery-list-' + id)
        $('.bakery-list-' + id).removeClass('delete-bakery-list').addClass('bakery-list')

      }

      $('.bakery-list-' + id).removeClass('bakery-list-' + id).addClass('delete-bakery-list-' + id)

    },
    removeFavorite(id) {

      if (Cookies.has('bakerysList')) {

        var cookies = Cookies.get('bakerysList')

        var total = cookies.replace('-' + id, '')

        if (cookies.indexOf(id + '-') != -1) {

          var total = cookies.replace(id + '-', '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        } else if (cookies.indexOf('-' + id) != -1) {

          var total = cookies.replace('-' + id, '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        }

        if (cookies.split('-').length === 1) {
          Cookies.remove('bakerysList')
          $('#table-list tbody tr').html('<td colspan="5"><div class="alert alert-info">Aucune boulangerie n\'est présente dans votre liste.</div></td>')
        } else {
          $('#tr-' + id).fadeOut(600)
          setTimeout(() => {
            $('#tr-' + id).remove()
          }, 600);
        }

      }

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

