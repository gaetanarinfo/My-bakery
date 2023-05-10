<template name="SliderComponent">
  <div class="container-xl fadeIn">

    <div id="sliders" class="carousel slide carousel-fade" data-bs-ride="carousel">

      <div class="carousel-inner">

        <div class="carousel-item active">
          <img src="slides/slider-1.png" class="d-block" alt="Croissants">
        </div>

        <div class="carousel-item">
          <img src="slides/slider-2.png" class="d-block" alt="Panier">
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SliderComponent',
  props: {}
})
</script>
