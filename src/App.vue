<template>
  <router-view v-if="show === true" />
</template>

<script>
import { defineComponent } from 'vue'
import { QSpinnerClock } from 'quasar'

export default defineComponent({
  name: 'App',

  data() {
    return {
      show: false
    }
  },
  methods: {

    showLoading() {
      this.$q.loading.show({
        spinner: QSpinnerClock,
        spinnerColor: 'light-green',
        spinnerSize: 75
      })

      // hiding in 2s
      setTimeout(() => {
        this.$q.loading.hide()
        this.show = true
      }, 2000)
    }
  },

  beforeUnmount() {
    setTimeout(() => {
      this.$q.loading.hide()
    }, 2000)
  },
  computed: {
  },

  mounted() {
    this.showLoading()
  }
})
</script>
