<template name="SectionHome5">
  <div class="section fadeIn5 ratings">

    <div class="background-p">

      <div class="pre-container">

        <div class="container">

          <div :id="'slide-' + rating.id" v-for="rating in ratings" :key="rating.id"
            v-bind:class="rating.id === 1 ? 'card-p active' : 'card-p'">

            <div class="user">
              <img :src="'ratings/' + rating.avatar" :alt="rating.author" />
            </div>

            <div class="content">

              <div class="ft-starts">

                <div class="br-widget">

                  <a href="#" v-for="note in 5" :key="note" :data-rating-value="note" :data-rating-text="note"
                    v-bind:class="note > rating.note ? '' : 'br-selected'"></a>

                  <div class="br-current-rating">{{ rating.note }}</div>

                </div>

              </div>

              <p>“{{ rating.content }}”</p>

            </div>

            <div class="footer">

              <p><strong>{{ rating.author }}</strong> - Utilisateur de My bakery</p>

            </div>

          </div>

          <div class="controls">

            <div class="dots">

              <div :data-slide="rating.id" v-bind:class="rating.id === 1 ? 'dot active' : 'dot'" v-for="rating in ratings"
                :key="rating.id"><span></span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SectionHome5',
  setup() {
    const store = useStore()

    const ratings = computed(() => {
      return store.state.ratings
    })

    onMounted(() => {
      store.dispatch('fetchRatings')
    })

    return {
      ratings
    }
  }
})
</script>
