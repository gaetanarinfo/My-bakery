<template>
  <router-view v-if="show === true" />
</template>

<script>
import { defineComponent } from 'vue'
import { QSpinnerBox } from 'quasar'

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
        spinner: QSpinnerBox,
        spinnerColor: 'blue-6',
        backgroundColor: 'white',
        spinnerSize: 75
      })

      // hiding in 2s
      setTimeout(() => {
        this.$q.loading.hide()
        this.show = true
      }, 3500)
    }
  },

  beforeUnmount() {
    setTimeout(() => {
      this.$q.loading.hide()
    }, 3500)
  },
  computed: {
  },

  mounted() {
    this.showLoading()
  }
})
</script>
