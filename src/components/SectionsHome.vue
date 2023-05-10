<template name="SectionsHome">
  <Section1 />

  <Section2 />

  <Section3 />

  <Section4 />

  <Section5 />

  <Section6 />

  <Section7 />
</template>

<script>
import { defineComponent } from 'vue'
import Section1 from 'components/home/sections/section1.vue'
import Section2 from 'components/home/sections/section2.vue'
import Section3 from 'components/home/sections/section3.vue'
import Section4 from 'components/home/sections/section4.vue'
import Section5 from 'components/home/sections/section5.vue'
import Section6 from 'components/home/sections/section6.vue'
import Section7 from 'components/home/sections/section7.vue'

export default defineComponent({
  name: 'SectionsHome',
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7
  }
})
</script>
