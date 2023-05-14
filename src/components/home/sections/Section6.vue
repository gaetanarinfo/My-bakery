<template name="SectionHome6">
  <div id="blog" class="section fadeIn6 last-blog">

    <div class="column-inner">

      <div class="wrapper">

        <div class="bloc container">

          <div class="hp-container">

            <div class="section text-center">

              <h2 class="title">Notre blog</h2>

              <p class="description">Consulter les dernières actualités de My bakery.</p>

              <div>
                <img class="delicious" src="floral.png" alt="Delicieux">
              </div>

            </div>

            <div class="section text-center">

              <div class="row">

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" v-for="blog in blogs" :key="blog.id">

                  <article>

                    <div class="thumbnail">

                      <a :href="'#/blog/' + blog.url" :title="blog.title"></a>

                      <img width="450" height="300" :src="'blogs/' + blog.image" alt="">

                    </div>

                    <div class="content text-start">

                      <span class="date"><i class="fa-solid fa-clock me-1"></i> Créer le {{
                        moment(blog.created_at).format('DD MMMM YYYY à H:mm') }}</span>

                      <h3 class="title">{{ blog.title }}</h3>

                      <span class="author">Par <span>{{ blog.author }}</span></span>
                      <span class="views me-2"><i class="fa-solid fa-eye me-1"></i>{{ blog.views }} vue<span
                          v-if="blog.views >= 2">s</span></span>

                      <p>{{ blog.small_content }}</p>

                      <a :href="'#/blog/' + blog.url" :title="blog.title" class="btn btn-bakery">Lire la suite</a>

                    </div>

                  </article>

                </div>

                <div class="mt-3">

                  <a @click="this.$router.push('/blog');" class="btn btn-bakery">Voir les autres articles</a>

                </div>

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

moment.locale('fr')

export default defineComponent({
  name: 'SectionHome6',
  setup() {
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
  }
})
</script>
