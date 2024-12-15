<template name="SectionHome6">

  <div id="blog" class="section fadeIn6 last-blog mb-0">

    <div class="column-inner">

      <div class="wrapper">

        <div class="bloc container">

          <div class="hp-container">

            <div class="section-blog text-center">

              <h2 class="title">Notre blog</h2>

              <p class="description">Consulter les dernières actualités de My Bakery.</p>

              <div>
                <img class="delicious" src="floral.png" alt="Delicieux">
              </div>

            </div>

            <div class="section section-spec text-center mb-0">

              <div class="row">

                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for="blog in blogs" :key="blog.id">

                  <article>

                    <div class="thumbnail">

                      <div class="pic" :style="'background: url(' + 'blogs/' + blog.image + ')'">

                      </div>

                      <div class="blog-pic-inner home">

                        <div class="label">{{ blog.name }}</div>

                        <ul>
                          <li>Par <span>{{ blog.author }}</span></li>
                          <li><i class="fa-solid fa-clock me-1"></i> Créer le {{
                            moment(blog.created_at).format('DD MMMM YYYY à H:mm') }}</li>
                          <li>{{ blog.views }} vues</li>
                        </ul>

                      </div>

                    </div>

                    <div class="content text-start">

                      <a @click="this.$router.push('/article/' + blog.url)" :title="blog.title">
                        <h3 class="title">{{ blog.title }}</h3>
                      </a>

                      <p>{{ substrats(blog.small_content) }}</p>

                      <a @click="this.$router.push('/article/' + blog.url)" :title="blog.title"
                        class="btn btn-bakery">Lire la
                        suite</a>

                    </div>

                  </article>

                </div>

                <div class="mt-3">

                  <a @click="this.$router.push('/blogs-bakerys');" class="btn btn-bakery">Voir les autres articles</a>

                </div>

                <BannerComponent :margin="false" :top="true" />

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
import moment from 'moment'
import BannerComponent from 'components/Banner.vue'

moment.locale('fr')

export default defineComponent({
  name: 'SectionHome6',
  components: {
    BannerComponent,
  },
  setup () {
    const store = useStore()

    const blogs = computed(() => {
      return store.state.blogs
    })

    onMounted(() => {
      store.dispatch('fetchBlogs')
    })

    return {
      blogs,
      moment: moment,
    }
  },
  methods: {
    substrats (value) {
      return value.substr(0, 249) + '...'
    }
  }
})
</script>
