<template name="BannerComponent">

  <div
    :class="(margin === false) ? 'container-xl container-large section fadeIn padding' : 'container-xl container-large section fadeIn'">

    <div :class="(margin === false) ? 'ads_campaign margin' : (top === true) ? 'ads_campaign top' : 'ads_campaign'">

      <a v-show="showSimulatedReturnDataBanner" v-if="(moment().format('YYYY-MM-DD') >= moment(banner.start).format('YYYY-MM-DD') || moment().format('YYYY-MM-DD') <= moment(banner.end).format('YYYY-MM-DD')) && banner.counterId >= 1"
        @click="addClick(banner.id, '/bakery/' + banner.bakeryUrl, this.$route.path.slice(1))" target="_blank"
        :title="'Boulangerie ' + banner.bakeryTitle">
        <img :src="folderPicture + banner.banner_name" :alt="'Boulangerie ' + banner.bakeryTitle">
      </a>

      <a v-show="showSimulatedReturnDataBanner" v-else @click="this.$router.push('/products')" target="_blank" title="Acheter un emplacement de bannière">
        <img :src="folderPicture + 'default.jpg'" alt="Acheter un emplacement de bannière">
      </a>

      <div class="loadingDiv banner" v-show="visibleBanner">
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
  name: 'BannerComponent',
  components: {
  },
  setup () {

    const store = useStore()
    const route = useRoute()
    const visibleBanner = ref(true)
    const showSimulatedReturnDataBanner = ref(false)

    const banner = computed(() => {
      return store.state.banner
    })

    store.dispatch('fetchBanner')

    return {
      showSimulatedReturnDataBanner,
      visibleBanner,
      moment,
      folderPicture: process.env.WEBSITE + '/banners/images/',
      banner,
      showTextLoading () {
        visibleBanner.value = true
        showSimulatedReturnDataBanner.value = false

        setTimeout(() => {
          visibleBanner.value = false
          showSimulatedReturnDataBanner.value = true
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
              type: 'large'
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
            type: 'large'
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
