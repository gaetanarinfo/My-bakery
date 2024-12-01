<template name="MapsComponent">

  <div style="position: relative;z-index: 999999999;overflow: visible;display: block;height: 600px;margin-top: 2rem;">
    <l-map :zoomAnimation="true" :fadeAnimation="true" :markerZoomAnimation="true" v-if="map" ref="map"
      v-model:zoom="zoom" :center="[lat, lng]">
      <l-tile-layer :url="urlMap" layer-type="base" name="OpenStreetMap"></l-tile-layer>
      <l-marker :lat-lng="[lat, lng]"></l-marker>
    </l-map>

    <div class="loadingDiv" v-else>
      <q-spinner-grid size="70px" color="info" />
    </div>

  </div>

</template>

<script>

import { defineComponent } from 'vue'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default defineComponent({
  name: 'MapsComponent',
  components: {
    LMap,
    LMarker,
    LTileLayer,
  },
  setup () {

    return {
      zoom: 18,
      urlMap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    }

  },
  data () {

    return {
    }

  },
  mounted () {

  },
  props: {
    lat: {
      type : String
    },
    lng: {
      type: String
    },
    map: {
      type: Number
    }
  }

})

</script>
