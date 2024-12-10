<template name="SectionHome13" >

  <div v-if="enableMap" class="section fadeIn14 ratings">

    <div class="background-p">


    </div>

  </div>


  <div v-if="enableMap" id="bakery-list" class="section fadeIn9">

    <div class="column-inner">

      <div class="wrapper">

        <div class="site-features">

          <div class="container">

            <div class="bloc container">

              <div class="hp-container">

                <div class="section text-center">

                  <h2 class="title">Les boulangeries autour de chez vous</h2>

                  <p class="description">Grâce à votre localisation, découvrez les meilleures boulangerie autour de
                    vous.</p>

                  <div>
                    <img class="delicious" src="floral.png" alt="Delicieux">
                  </div>

                </div>

              </div>

            </div>

            <div class="row">

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                <div class="map"
                  style="position: relative;z-index: 1;overflow: visible;display: block;min-height: 550px; max-height: 550px;height:550px;margin-top: 0;">
                  <l-map :zoomAnimation="true" :fadeAnimation="true" :markerZoomAnimation="true"
                    v-if="Boolean(this.map)" ref="map" v-model:zoom="zoom" :center="center">
                    <l-tile-layer :url="urlMap" layer-type="base" name="OpenStreetMap"></l-tile-layer>
                    <l-marker v-for="markerBakery in markersBakerysHome.markers"
                      :key="'marker_popup_' + markerBakery.id" :lat-lng="[markerBakery.lat, markerBakery.lng]">
                      <l-popup :id="'marker-popup-' + markerBakery.id">
                        <p class="mb-0 text-bold">{{ markerBakery.title }}</p>
                        <p>{{ markerBakery.adresse }}</p>
                        <a class="cursor-pointer" @click="this.$router.push('/bakery/' + markerBakery.url)"
                          style="text-decoration: none;text-decoration: none;text-align: right;display: block; color: #cd9b33;font-weight: 700;">Voir
                          la bolangerie</a>
                      </l-popup>
                    </l-marker>
                  </l-map>

                  <div :class="(this.map === 1) ? 'loadingDiv loaderMap hide' : 'loadingDiv loaderMap'">
                    <q-spinner-gears size="70px" color="warning" />
                  </div>

                </div>

              </div>

              <div class="row search-region col-lg-6 col-md-6 col-sm-12 col-xs-12">

                <div class="search-body">
                  <p>Rechercher une boulangerie</p>
                  <input name="search-bakerys" id="search-bakerys" class="form-control"
                    placeholder="Exemple : Le Mans..." type="text">
                </div>

                <div class="list-bakery">

                  <ul class="list-bakery-marker">

                    <div v-for="markerBakery in markersBakerysHome2.markers" class="bakerys_name hide">{{
                      markerBakery.title
                      }}
                    </div>
                    <li v-for="markerBakery in markersBakerysHome2.markers" class="bakerys">
                      <a
                        @click="search(markerBakery.id, markerBakery.lat, markerBakery.lng, markerBakery.adresse, markerBakery.title, markerBakery.url)">{{
                          markerBakery.title }} ({{ markerBakery.postcode }})</a>
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

import { defineComponent, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { marker } from 'leaflet';

const enableMap = ref(true);

export default defineComponent({
  name: 'SectionHome13',
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LPopup,
  },
  setup () {

    const store = useStore();

    const center = ref([46.232192999999995, 2.209666999999996]);
    const zoom = ref(6);

    const markersBakerysHome = computed(() => {
      return store.state.markersBakerysHome
    })

    const markersBakerysHome2 = computed(() => {
      return store.state.markersBakerysHome2
    })

    return {
      enableMap,
      search (id, lat, lng, adresse, title, url) {

        markersBakerysHome.value.markers = [{
          id,
          lat,
          lng,
          adresse,
          title,
          url
        }];

        this.center = [lat, lng]

      },
      markersBakerysHome,
      markersBakerysHome2,
      urlMap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom,
      center
    }

  },
  data () {

    return {
      map: null
    }

  },
  mounted () {

    const store = useStore();

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function (position) {

      store.dispatch('fetchMarkersBakerysHome',
        {
          'lat': position.coords.latitude,
          'lng': position.coords.longitude
        })

      store.dispatch('fetchMarkersBakerysHome2',
        {
          'lat': position.coords.latitude,
          'lng': position.coords.longitude
        })

      enableMap.value = true

    };

    // onError Callback receives a PositionError object
    //
    function onError (error) {
      enableMap.value = false
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    if (enableMap.value) {

    setTimeout(() => {

        this.map = 1

        if (this.markersBakerysHome2.markers !== undefined) {

          const toSlugAdvanced = (str) => {
            return str
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/[\W_]+/g, "-")
              .toLowerCase()
              .replace(/^-+|-+$/g, "");
          };

          /**
          * Trie pour la barre de recherche
          * @param {*} letter
          * @param {*} nakery
          * @param {*} elements
          */
          function filterCity (letter, city, elements) {
            for (let i = 0; i < city.length; i++) {
              if (toSlugAdvanced(city[i].textContent).includes(letter)) {
                elements[i].style.display = "block";
              } else {
                elements[i].style.display = "none";
              }
            }
          }

          /**
           * Gestion barre de recherche
           */
          $(document).on("input", "#search-bakerys", function (e) {

            let searchValue = e.target.value;
            let elements = $(".bakerys");
            let bakerys_name = $(".bakerys_name");

            if (searchValue != "") {
              filterCity(toSlugAdvanced(searchValue), bakerys_name, elements);
            } else {
              elements.each(function (index, element) {
                element.style.display = "block";
              });
            }

          });

        }

    }, 3500);

  }

  },

})

</script>
