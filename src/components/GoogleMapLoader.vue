<template>
  <div class="mt-5 mb-5 w-100">
    <div class="google-map" ref="googleMap"
      style="position: relative;z-index: 999999999;overflow: visible;display: block;height: 600px;"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<style>
/* The popup bubble styling. */
.popup-bubble {
  /* Position the bubble centred-above its parent. */
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
  /* Style the bubble. */
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  font-family: sans-serif;
  overflow-y: auto;
  max-height: 60px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
}

/* The parent of the bubble. A zero-height div at the top of the tip. */
.popup-bubble-anchor {
  /* Position the div a fixed distance above the tip. */
  position: absolute;
  width: 100%;
  bottom: 8px;
  left: 0;
}

/* This element draws the tip. */
.popup-bubble-anchor::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  /* Center the tip horizontally. */
  transform: translate(-50%, 0);
  /* The tip is a https://css-tricks.com/snippets/css/css-triangle/ */
  width: 0;
  height: 0;
  /* The tip is 8px high, and 12px wide. */
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid white;
}

/* JavaScript will position this div at the bottom of the popup tip. */
.popup-container {
  cursor: auto;
  height: 0;
  position: absolute;
  /* The max width of the info window. */
  width: 200px;
}

.gm-style-iw {
  padding: 0 !important;
}

.gm-style img {
    max-width: 100% !important;
    margin-bottom: 1rem !important;
    border-radius: 10px !important;
    padding: 0 !important;
}

.gm-style-iw-d {
  padding: 0.5rem 0.5rem 0 0.5rem !important;
}

</style>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
  },
  data() {
    return {
      google: null,
      map: null,
    }
  },
  async mounted() {

    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {

      const mapContainer = this.$refs.googleMap
      const vl = this

      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)

      // Create Tooltip
      const infowindow = new vl.google.maps.InfoWindow({
        // Set tooltip html
        content: `
            <img src="bakerys/${this.mapConfig.marker[0].image}" />
            <h3><b>${this.mapConfig.marker[0].caption}</b></h3>
            <p style="font-size: 14px; line-height: 1rem;font-family: Arial, sans-serif;">${this.mapConfig.marker[0].content}</p>
            <p style="font-size: 14px; line-height: 1.25rem;font-family: Arial, sans-serif;"><b>${this.mapConfig.marker[0].address}</b></p>
            `,
        maxWidth: 260
      })

      const velp = new vl.google.maps.Marker({
        position: this.mapConfig.marker[0].position,
        marker: this.marker,
        map: this.map,
        title: this.mapConfig.marker[0].caption,
        address: this.mapConfig.marker[0].address,
      })

      // add click open marker event
      velp.addListener('click', function () {
        infowindow.open(this.map, velp)
      })

    }
  }
}

</script>
