<template>
  <router-view v-if="show === true" />
</template>

<script>
import { defineComponent } from 'vue'
import { QSpinnerBall } from 'quasar'

export default defineComponent({
  name: 'App',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      show: false
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    showLoading() {
      this.$q.loading.show({
        spinner: QSpinnerBall,
        spinnerColor: 'orange',
        spinnerSize: 100
      })

      // hiding in 2s
      setTimeout(() => {
        this.$q.loading.hide()
        this.show = true
      }, 2000)
    }
  },
  // eslint-disable-next-line space-before-function-paren
  beforeUnmount() {
    setTimeout(() => {
      this.$q.loading.hide()
    }, 2000)
  },
  computed: {
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    this.showLoading()
  }
})
</script>
