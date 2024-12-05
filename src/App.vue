<template>

  <router-view v-if="show === true" />

  <div v-if="show === false">

    <div class="loadings">

      <img src="logo-light.png">

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { Cookies } from 'quasar'

export default defineComponent({
  name: 'App',

  data () {
    return {
      show: false,
      Cookies: Cookies,
    }
  },
  methods: {

    showLoading () {
      // hiding in 2s
      setTimeout(() => {
        this.show = true
      }, 1500)
    }
  },

  beforeUnmount () {
    setTimeout(() => {
      this.$q.loading.hide()
    }, 1500)
  },
  computed: {
  },

  mounted () {
    this.showLoading()

    function onDeviceReady() {
      // Prompt user for push subscription
      WonderPush.subscribeToNotifications();
    }
    // In this example, we'll prompt the user as soon as the 'deviceready' event is fired
    // There's good chances you'll find a more suitable moment in the user journey
    document.addEventListener('deviceready', onDeviceReady);

    if(Cookies.has('bakerysList') === false) {
      Cookies.set('bakerysList', '')
    }
  }
})
</script>
