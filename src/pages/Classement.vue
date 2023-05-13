<template>
  <HeaderComponent />

  <ClassementComponent />

  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import ClassementComponent from 'components/Classement.vue'
import FooterComponent from 'components/Footer.vue'

export default defineComponent({
  name: 'Classement',
  components: {
    HeaderComponent,
    ClassementComponent,
    FooterComponent
  }
})
</script>
