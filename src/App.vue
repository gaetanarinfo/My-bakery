<template>

  <router-view v-if="show === true" />

  <div v-if="show === false">

    <div class="loading">

      <img src="logo-light.png">

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { QSpinnerBox } from 'quasar'

export default defineComponent({
  name: 'App',

  data () {
    return {
      show: false
    }
  },
  methods: {

    showLoading () {
      // hiding in 2s
      setTimeout(() => {
        this.show = true
      }, 2500)
    }
  },

  beforeUnmount () {
    setTimeout(() => {
      this.$q.loading.hide()
    }, 2500)
  },
  computed: {
  },

  mounted () {
    this.showLoading()
  }
})
</script>
