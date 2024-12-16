<template name="BakerysCityComponent">

  <div class="background fadeIn2 bb background4">

    <div class="content">

      <h1>Boulangerie à {{ markersBakerys.nom }}</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="active link-letter">Boulangerie à {{ markersBakerys.nom }}</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="page-region bakery-single section fadeIn3">

    <div class="container">

      <div class="bakery-detail" v-show="showSimulatedReturnData">

        <div class="bakery">

          <div class="row">

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div class="map"
                style="position: relative;z-index: 999999999;overflow: visible;display: block;min-height: 550px; max-height: 550px;height:100%;margin-top: 0;">
                <l-map :zoomAnimation="true" :fadeAnimation="true" :markerZoomAnimation="true" v-if="Boolean(this.map)"
                  ref="map" v-model:zoom="zoom" :center="center">
                  <l-tile-layer :url="urlMap" layer-type="base" name="OpenStreetMap"></l-tile-layer>
                  <l-marker v-for="markerBakery in markersBakerys.markers" :key="'marker_popup_' + markerBakery.id"
                    :lat-lng="[markerBakery.lat, markerBakery.lng]">
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
                <input name="search-bakerys" id="search-bakerys" class="form-control" placeholder="Exemple : Le Mans..."
                  type="text">
              </div>

              <div class="list-bakery">

                <ul class="list-bakery-marker">

                  <div v-for="markerBakery in markersBakerys2.markers" class="bakerys_name hide">{{ markerBakery.title
                    }}
                  </div>
                  <li v-for="markerBakery in markersBakerys2.markers" class="bakerys">
                    <a
                      @click="search(markerBakery.id, markerBakery.lat, markerBakery.lng, markerBakery.adresse, markerBakery.title, markerBakery.url)">{{
                        markerBakery.title }} ({{ markerBakery.postcode }})</a>
                  </li>

                </ul>

              </div>

            </div>

          </div>

          <BannerComponent :margin="true" :top="true" />

        </div>

      </div>

      <div class="loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>

</template>

<style lang="scss">
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

.page-region.section,
.page-region .section {
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

@media all and (max-width: 1268px) {
  .h-bakery {
    min-height: auto;
  }
}
</style>

<script>
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { useRoute } from 'vue-router';
import { marker } from 'leaflet';
import BannerComponent from 'components/Banner.vue'

export default defineComponent({
  name: 'BakerysCityComponent',
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LPopup,
    BannerComponent,
  },
  setup () {

    const store = useStore();
    const route = useRoute();
    const visible = ref(true);
    const showSimulatedReturnData = ref(false);
    const center = ref([46.232192999999995, 2.209666999999996]);
    const zoom = ref(6);

    const markersBakerys = computed(() => {
      return store.state.markersBakerys
    })

    const markersBakerys2 = computed(() => {
      return store.state.markersBakerys2
    })

    onMounted(() => {

      store.dispatch('fetchMarkersBakerys',
        {
          'ville': route.params.ville,
          'id': route.params.id
        })

      store.dispatch('fetchMarkersBakerys2',
        {
          'ville': route.params.ville,
          'id': route.params.id
        })
    })

    return {
      search (id, lat, lng, adresse, title, url) {

        markersBakerys.value.markers = [{
          id,
          lat,
          lng,
          adresse,
          title,
          url
        }];

        this.center = [lat, lng]

      },
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = false

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 1500);
      },
      showSimulatedReturnData,
      visible,
      markersBakerys,
      markersBakerys2,
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

    this.showTextLoading()

    setTimeout(() => {
      this.map = 1

      if (this.markersBakerys2.markers !== undefined) {

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

    }, 5000);

  }
})
</script>
