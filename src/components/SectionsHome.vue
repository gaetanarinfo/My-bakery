<template name="SectionsHome">
  <Section1 />

  <Section2 />

  <Section3 />

  <Section4 />

  <Section9 />

  <Section5 />

  <Section6 />

  <Section8 />

  <Section10 />

  <Section7 />

  <Section11 />

</template>

<script>
import { defineComponent } from 'vue'
import Section1 from 'components/home/sections/Section1.vue'
import Section2 from 'components/home/sections/Section2.vue'
import Section3 from 'components/home/sections/Section3.vue'
import Section4 from 'components/home/sections/Section4.vue'
import Section9 from 'components/home/sections/Section9.vue'
import Section5 from 'components/home/sections/Section5.vue'
import Section6 from 'components/home/sections/Section6.vue'
import Section8 from 'components/home/sections/Section8.vue'
import Section7 from 'components/home/sections/Section7.vue'
import Section10 from 'components/home/sections/Section10.vue'
import Section11 from 'components/home/sections/Section11.vue'

export default defineComponent({
  name: 'SectionsHome',
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section9,
    Section5,
    Section8,
    Section6,
    Section7,
    Section10,
    Section11,
  }
})
</script>
