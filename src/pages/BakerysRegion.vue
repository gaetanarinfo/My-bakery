<template name="BakerysRegion">

  <HeaderComponent />

  <div class="background fadeIn2 bb background4">

    <div class="content">

      <h1>{{ markersBakerys.nom }}</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active link-letter">{{ markersBakerys.nom }}</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="bakery-single section fadeIn3">

    <div class="container">

      <div class="bakery-detail">

        <div class="bakery">

          <div class="row">

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div
                style="position: relative;z-index: 999999999;overflow: visible;display: block;min-height: 550px; max-height: 550px;height:100%;margin-top: 0;">
                <l-map :zoomAnimation="true" :fadeAnimation="true" :markerZoomAnimation="true" v-if="Boolean(this.map)"
                  ref="map" v-model:zoom="zoom" :center="[46.232192999999995, 2.209666999999996]">
                  <l-tile-layer :url="urlMap" layer-type="base" name="OpenStreetMap"></l-tile-layer>
                  <l-marker v-for="markerBakery in markersBakerys.markers" :key="'marker_popup_' + markerBakery.id"
                    :lat-lng="[markerBakery.lat, markerBakery.lng]">
                    <l-popup :id="'marker-popup-' + markerBakery.id">
                      <p class="mb-0 text-bold">{{ markerBakery.title }}</p>
                      <p>{{ markerBakery.adresse }}</p>
                      <a :href="'#/bakery/' + markerBakery.url" style="text-decoration: none;text-decoration: none;text-align: right;display: block; color: #cd9b33;font-weight: 700;">Voir la bolangerie</a>
                    </l-popup>
                  </l-marker>
                </l-map>

                <div class="loadingDiv" v-else>
                  <q-spinner-grid size="70px" color="info" />
                </div>

              </div>

            </div>

            <div class="list-bakery col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <ul class="list-bakery-marker">

                <li v-for="markerBakery in markersBakerys.markers">
                  <a @click="search(markerBakery.id)" :id="'marker-' + markerBakery.id">{{ markerBakery.title }}</a>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  <Section7 />

  <FooterComponent />

</template>


<style lang="css">
.bb .content {
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  max-width: 1170px;
  text-align: center;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

@media all and (max-width: 768px) {
  .bb .content {
    padding: 2rem 2rem;
  }
}

.disabled {
  pointer-events: none;
}

.section {
  margin-bottom: 0;
}

.h-bakery {
  min-height: 200px;
}

@media all and (max-width: 768px) {
  .h-bakery {
    min-height: auto;
  }
}

#classement {
  padding: 5rem 0;
}

.b-pagination {
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

@media all and (max-width: 768px) {
  .b-pagination .pagination li {
    margin-bottom: 1rem;
  }
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

.last-bakery .column-inner .wrapper {
  background: none;
}

.last-bakery .column-inner .wrapper .bloc {
  padding: 0 0;
}
</style>

<script>
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { useRoute } from 'vue-router';
import HeaderComponent from 'components/Header.vue'
import Section7 from 'components/home/sections/Section7.vue'
import FooterComponent from 'components/Footer.vue'
import { marker } from 'leaflet';

export default defineComponent({
  name: 'BakerysRegion',
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LPopup,
    HeaderComponent,
    Section7,
    FooterComponent,
  },
  setup () {

    const store = useStore()
    const route = useRoute();

    const markersBakerys = computed(() => {
      return store.state.markersBakerys
    })

    onMounted(() => {

      store.dispatch('fetchMarkersBakerys',
        {
          'region': route.params.region
        })

    })

    return {
      markersBakerys,
      urlMap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 6,
    }

  },
  data () {

    return {
      map: null
    }

  },
  methods: {
  },
  mounted () {

    setTimeout(() => {
      this.map = 1

      if (this.markersBakerys.markers !== undefined) {

        this.markersBakerys.markers.forEach(element => {

          $(document).on('click', '#marker-' + element.id, function (e) {

            e.preventDefault();
            // console.log($(document).find('#marker-popup-' + element.id));
            // $('#marker-popup-' + element.id).openPopup();

          })

        });

        }

  }, 1200);


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

$(document).on('click', '#blog .btn-target', function (e) {
  e.preventDefault()
  var url = $(this).attr('href')
  location.href = url
})

// Header

$(window).scroll(function () {
  if ($(this).scrollTop() >= 1500) {
    $('header').removeClass('navigation-sticky navigation-unpin')
  } else {
    $('header').removeClass('navigation-sticky navigation-unpin')
  }
})

$('.header').addClass('h-bakery')
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
  $('html, body').animate({ scrollTop: 0 })
})

// Header menu

$(document).on('click', '.menu-toggle', function (e) {
  e.preventDefault()

  $(this).toggleClass('active')

  $('#menu-main-menu').fadeToggle(300)
})

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

}, 100)

  }
})
</script>
