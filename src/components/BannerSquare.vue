<template name="BannerSquareComponent">

  <div
    :class="(margin === false) ? 'container-xl container-square section fadeIn padding' : 'container-xl container-square section fadeIn'">

    <div
      :class="(margin === false) ? 'ads_campaign square margin' : (top === true) ? 'ads_campaign square top' : 'ads_campaign square'">

      <a v-show="showSimulatedReturnDataBannerSquare" v-if="(moment().format('YYYY-MM-DD') >= moment(banner.start).format('YYYY-MM-DD') || moment().format('YYYY-MM-DD') <= moment(banner.end).format('YYYY-MM-DD')) && banner.counterId >= 1"
        @click="addClick(banner.id, '/bakery/' + banner.bakeryUrl, this.$route.path.slice(1))" target="_blank"
        :title="'Boulangerie ' + banner.bakeryTitle">
        <img :src="folderPicture + banner.banner_square_name" :alt="'Boulangerie ' + banner.bakeryTitle">
      </a>

      <a v-show="showSimulatedReturnDataBannerSquare" v-else @click="this.$router.push('/products')" target="_blank" title="Acheter un emplacement de bannière">
        <img :src="folderPicture + 'default-2.jpg'" alt="Acheter un emplacement de bannière">
      </a>

      <div class="loadingDiv banner-square" v-show="visibleBannerSquare">
        <q-spinner-gears size="50px" color="orange" />
      </div>

    </div>

  </div>

</template>

<script>
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue'
import moment from 'moment'
import { useRoute } from 'vue-router';
import { ref } from 'vue'

export default defineComponent({
  name: 'BannerSquareComponent',
  components: {
  },
  setup () {

    const store = useStore()
    const route = useRoute()
    const visibleBannerSquare = ref(true)
    const showSimulatedReturnDataBannerSquare = ref(false)

    const banner = computed(() => {
      return store.state.banner
    })

    store.dispatch('fetchBanner')

    return {
      showSimulatedReturnDataBannerSquare,
      visibleBannerSquare,
      moment,
      folderPicture: process.env.WEBSITE + '/banners/images/',
      banner,
      showTextLoading () {
        visibleBannerSquare.value = true
        showSimulatedReturnDataBannerSquare.value = false

        setTimeout(() => {
          visibleBannerSquare.value = false
          showSimulatedReturnDataBannerSquare.value = true
        }, 3000);
      },
      addClick (id, url, page) {

        fetch('https://api.ipify.org?format=json')
          .then(x => x.json())
          .then(({ ip }) => {

            store.dispatch('fetchBannerAddCLick', {
              bannerId: id,
              ip,
              page: page,
              type: 'square'
            })

          }).then(res => {
            setTimeout(() => {
              window.location.href = process.env.BANNER_URL + '/#' + url
              location.reload()
            }, 200);
          })

      }
    }

  },
  data () {

    return {

    }

  },
  mounted () {

    const store = useStore()
    const route = useRoute()

    this.showTextLoading()

    if (this.banner.length >= 1) {

      fetch('https://api.ipify.org?format=json')
        .then(x => x.json())
        .then(({ ip }) => {

          store.dispatch('fetchBannerAddViews', {
            bannerId: this.banner.id,
            ip,
            page: route.path.slice(1),
            type: 'square'
          })

        })

    }

  },
  props: {
    margin: {
      type: Boolean,
      default: true
    },
    top: {
      type: Boolean,
      default: false
    },
  }

})

</script>
