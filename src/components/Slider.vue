<template name="SliderComponent">
  <div class="container-xl fadeIn">

    <div id="sliders" class="carousel slide carousel-fade" data-bs-ride="carousel">

      <div class="carousel-indicators">

        <button type="button" data-bs-target="#sliders" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>

        <button type="button" data-bs-target="#sliders" data-bs-slide-to="1" aria-label="Slide 2"></button>

      </div>

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
