import { createStore } from 'vuex'

import axios from 'axios'
import { SessionStorage } from 'quasar';

export default createStore({
  state: {
    bakery: [],
    bakeryComments: [],
    bakerys: [],
    bakerysAll: [],
    bakerysAllCount: [],
    blogs: [],
    blogsAll: [],
    blogsAllCount: 0,
    ratings: [],
    villesFrance: [],
    searchAll: [],
    bakerysFavorites: [],
    bakeryHours: [],
    blog: [],
    blog_tags: [],
    activateAccount: [],
    markersBakerys: [],
    products_cart: [],
    paiement_status: [],
    show_order: [],
    show_budget: [],
    user_bakery: [],
    credits: [],
    banner: [],
    bakerysList: [],
    stateUser: {
      user: null,
      token: null,
    },
    products: [],
  },
  getters: {
    getBakery: (state) => state.bakery,
    getBakeryComments: (state) => state.bakeryComments,
    getBakeryHours: (state) => state.bakeryHours,
    getBakerys: (state) => state.bakerys,
    getBakerysAll: (state) => state.bakerysAll,
    getBakerysAllCount: (state) => state.bakerysAllCount,
    getBlog: (state) => state.blog,
    getBlogTags: (state) => state.blog_tags,
    getBlogs: (state) => state.blogs,
    getBlogsAll: (state) => state.blogsAll,
    getBlogsAllCount: (state) => state.blogsAllCount,
    getRatings: (state) => state.ratings,
    getVillesFrance: (state) => state.villesFrance,
    getSearchAll: (state) => state.searchAll,
    getBakerysFavorites: (state) => state.bakerysFavorites,
    getActivateAccount: (state) => state.activateAccount,
    getToken: (state) => state.stateUser.token,
    getMarkerBakerys: (state) => state.markersBakerys,
    getProducts: (state) => state.products,
    getProductsCart: (state) => state.products_cart,
    getPaiementStatus: (state) => state.paiement_status,
    getShowOrder: (state) => state.show_order,
    getShowBudget: (state) => state.show_budget,
    getUserBakery: (state) => state.user_bakery,
    getCredits: (state) => state.credits,
    getBanner: (state) => state.banner,
    getBakerysList: (state) => state.bakerysList,
    isLoggedIn: (state) => {

      if (sessionStorage.getItem('token') === null) {
        return !!state.stateUser.token;
      } else {
        return sessionStorage.getItem('token');
      }
    },
  },
  actions: {

    // Liste des boulangeries en France
    async fetchBakerys ({ commit, state }, data) {
      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/bakerys/' + data.limite)

        this.bakerys = getUrl.data.bakerys
        commit('SET_BAKERYS', getUrl.data.bakerys)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBakerysAll ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/bakerys-all')
        this.bakerysAll = getUrl.data.bakerysAll
        commit('SET_BAKERYS_ALL', getUrl.data.bakerysAll)

        this.bakerysAll = getUrl.data.bakerysAllCount
        commit('SET_BAKERYS_ALL_COUNT', getUrl.data.bakerysAllCount)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBakery ({ commit, state }, data) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/bakery/' + data.url)

        if (getUrl.data.bakery !== undefined) {

          this.bakery = getUrl.data.bakery

          commit('SET_BAKERY', getUrl.data.bakery)

          this.bakeryComments = getUrl.data.bakeryComments

          commit('SET_BAKERY_COMMENTS', getUrl.data.bakeryComments)

          this.bakeryHours = getUrl.data.bakeryHours

          commit('SET_BAKERY_HOURS', getUrl.data.bakeryHours)

        } else {
          this.$router.push('/bakerys')
        }
      } catch (error) {
        console.log(error)
      }

    },
    async fetchBakeryUpdate ({ commit, state }, data) {
      try {
        await axios.post(process.env.WEBSITE + '/bakery-update', { ip: data.ip, bakeryId: data.bakeryId })
      } catch (error) {
        console.log(error)
      }

    },

    // Liste des articles sur le blog
    async fetchBlogs ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/blogs')

        this.blogs = getUrl.data.blogs
        commit('SET_BLOGS', getUrl.data.blogs)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBlogsAll ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/blogs-all')

        this.blogsAll = getUrl.data.blogsAll
        commit('SET_BLOGS_ALL', getUrl.data.blogsAll)

        this.blogsAll = getUrl.data.blogsAllCount
        commit('SET_BLOGS_ALL_COUNT', getUrl.data.blogsAllCount)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBlog ({ commit, state }, data) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/blogs/' + data.url)

        if (getUrl.data.blog !== undefined) {

          localStorage.removeItem('article-title')
          localStorage.removeItem('article-description')
          localStorage.removeItem('article-url')
          localStorage.removeItem('article-image')

          localStorage.setItem('article-title', getUrl.data.blog.title)
          localStorage.setItem('article-description', getUrl.data.blog.small_content)
          localStorage.setItem('article-url', 'https://my-bakery.fr/#/blogs/' + getUrl.data.blog.url)
          localStorage.setItem('article-image', 'https://my-bakery.fr/blogs/' + getUrl.data.blog.image)

          this.blog = getUrl.data.blog
          this.blog_tags = getUrl.data.tags

          commit('SET_BLOG', getUrl.data.blog)
          commit('SET_BLOG_TAGS', getUrl.data.tags)

        } else {
          this.$router.push('/blogs')
        }
      } catch (error) {
        console.log(error)
      }
    },

    // Vote du site internet
    async fetchRatings ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/ratings')

        this.ratings = getUrl.data.ratings
        commit('SET_RATINGS', getUrl.data.ratings)
      } catch (error) {
        console.log(error)
      }
    },

    // Vote du site internet
    async fetchVillesFrance ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/villes-france-home')

        this.villesFrance = getUrl.data.villesFrance
        commit('SET_VILLES_FRANCE', getUrl.data.villesFrance)
      } catch (error) {
        console.log(error)
      }
    },

    // Listes des boulangeries en favoris
    async fetchBakerysFavorites ({ commit, state }, data) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/favorites/' + data.favorites)

        this.favorites = getUrl.data.favorites
        commit('SET_FAVORITES', getUrl.data.favorites)
      } catch (error) {
        console.log(error)
      }
    },

    // My account
    async fetchActivateAccount ({ commit, state }, data) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/activate-account/' + data.token)

        if (getUrl.data.activateAccount !== undefined) {

          this.activateAccount = getUrl.data

          commit('SET_ACTIVATE_ACCOUNT', getUrl.data)

        } else {
          this.$router.push('/my-account')
        }
      } catch (error) {
        console.log(error)
      }
    },

    // Verification Account
    async fetchVerificationAccount () {
      try {

        if (sessionStorage.getItem('token') === null) {
          this.$router.push('/my-account')
        } else {

          const getUrl = await axios.get(process.env.WEBSITE + '/authenticate/' + sessionStorage.getItem('token'))

          if (getUrl.data.user !== undefined) {
            this.state.stateUser.user = getUrl.data.user
            SessionStorage.setItem('email', getUrl.data.user.email)
          } else {
            this.$router.push('/my-account')
          }

        }
      } catch (error) {
        console.log(error)
      }
    },

    // Verification Token Forgot Password
    async fetchVerificationTokenForgot ({ commit, state }, data) {
      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/forgot-verif-password-token/' + data.token)

        if (getUrl.data.success === false) {
          this.$router.push('/my-account')
        }

      } catch (error) {
        console.log(error)
      }
    },

    async fetchMarkersBakerys ({ commit, state }, data) {
      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/bakerys-markers/' + data.region)

        if (getUrl.data.markers.length >= 1) {

          this.markersBakerys = getUrl.data

          commit('SET_MARKER_BAKERY', getUrl.data)

        } else {
          this.$router.push('/')
        }

      } catch (error) {
        console.log(error)
      }
    },

    async fetchProducts ({ commit, state }, data) {
      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/products')

        if (getUrl.data.products.length >= 1) {

          this.products = getUrl.data.products

          commit('SET_PRODUCTS', getUrl.data.products)

        } else {
          this.$router.push('/')
        }

      } catch (error) {
        console.log(error)
      }
    },

    async fetchProductsCart ({ commit, state }, data) {

      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/products-cart/' + data.cart)

        if (getUrl.data.products_cart.length >= 1) {

          this.products_cart = getUrl.data.products_cart

          commit('SET_PRODUCTS_CART', getUrl.data.products_cart)

        }

      } catch (error) {
        console.log(error)
      }

    },

    async setInsertCommandeClient ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/order-insert', {
        'user_id': data.user_id,
        'product_id': data.product_id,
        'status': data.status,
        'qte': data.qte,
        'total_ht': data.total_ht,
        'total_ttc': data.total_ttc,
        'dateStart': data.dateStart,
        'dateEnd': data.dateEnd,
        'additional_information': data.additional_information,
        'banner_name': data.banner_name,
        'banner_square_name': data.banner_square_name,
        'bakery_id_event': data.bakery_id_event,
      })
        .then((res) => {
          if (res.data.succes === true) {
            location.href = process.env.WEBSITE + '/paypal/create/' + res.data.order_id
          }
        })
        .catch((error) => {
          console.log(error)
        })

    },

    async fetchRefundOrder ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/order-refund', { 'tokenPaiement': data.tokenPaiement })
        .then((res) => {
          this.paiement_status = res.data
          commit('SET_PAIEMENT_STATUS', res.data)
        })
        .catch((error) => {
          console.log(error)
        })

    },

    async setOrderValidate ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/order-validate', { 'paymentId': data.paymentId, 'status': data.status })
        .then((res) => {

          if (res.data.succes === true) {
            this.paiement_status = res.data
            commit('SET_PAIEMENT_STATUS', res.data)
          } else {
            this.$router.push('/')
          }

        })
        .catch((error) => {
          console.log(error)
        })

    },

    async setOrderCancel ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/order-cancel', { 'paymentId': data.paymentId, 'status': data.status })
        .then((res) => {
          if (res.data.succes === true) {
            this.paiement_status = res.data
            commit('SET_PAIEMENT_STATUS', res.data)
          } else {
            this.$router.push('/')
          }

        })
        .catch((error) => {
          console.log(error)
        })

    },

    async fetchShowOrder ({ commit, state }, data) {

      axios.get(process.env.WEBSITE + '/order-show/' + data.paypalId)
        .then((res) => {
          if (res.data.succes === true) {
            this.show_order = res.data
            commit('SET_SHOW_ORDER', res.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })

    },

    async fetchBudget ({ commit, state }, data) {

      axios.get(process.env.WEBSITE + '/user-budgets/' + data.year)
        .then((res) => {
          if (res.data.succes === true) {
            this.show_budget = res.data
            commit('SET_SHOW_BUDGET', res.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })

    },

    async fetchUserBakery ({ commit, state }, data) {
      axios.get(process.env.WEBSITE + '/user-bakery/' + data.email + '/' + data.id)
        .then((res) => {
          if (res.data.succes === true) {
            this.user_bakery = res.data
            commit('SET_USER_BAKERY', res.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    async fetchCredits ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/credits', { 'email': data.email, 'id': data.id, 'idBakery': data.idBakery })
        .then((res) => {
          if (res.data.succes === true) {
            this.credits = res.data.credits
            commit('SET_CREDITS', res.data.credits)
          } else {
            this.$router.push('/my-account-profil')
          }
        })

    },

    async fetchClickBakery ({ commit, state }, data) {
      fetch('https://api.ipify.org?format=json')
        .then(x => x.json())
        .then(({ ip }) => {
          axios.post(process.env.WEBSITE + '/bakery-click', { bakeryId: data.bakeryId, ip })
            .then((res) => { })
        });
    },

    async fetchBanner ({ commit, state }, data) {

      axios.get(process.env.WEBSITE + '/banner')
        .then((res) => {
          if (res.data.succes === true) {
            this.banner = res.data.banner
            commit('SET_BANNER', res.data.banner)
          }
        })

    },

    async fetchBakeryList ({ commit, state }, data) {

      axios.get(process.env.WEBSITE + '/bakerys-list')
        .then((res) => {
          if (res.data.succes === true) {
            this.bakerysList = res.data.bakerys
            commit('SET_BAkERYS_LIST', res.data.bakerys)
          }
        })

    },

    async fetchBannerAddCLick ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/banner-add-click', { bannerId: data.bannerId, ip: data.ip, page: data.page, type: data.type })
        .then((res) => {})

    },

    async fetchBannerAddViews ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/banner-add-views', { bannerId: data.bannerId, ip: data.ip, page: data.page, type: data.type })
        .then((res) => {})

    },

  },
  mutations: {

    SET_BAkERYS_LIST (state, bakerysList) {
      state.bakerysList = bakerysList
    },

    SET_BANNER (state, banner) {
      state.banner = banner
    },

    SET_CREDITS (state, credits) {
      state.credits = credits
    },

    SET_USER_BAKERY (state, user_bakery) {
      state.user_bakery = user_bakery
    },

    SET_SHOW_BUDGET (state, show_budget) {
      state.show_budget = show_budget
    },

    SET_SHOW_ORDER (state, show_order) {
      state.show_order = show_order
    },

    SET_PAIEMENT_STATUS (state, paiement_status) {
      state.paiement_status = paiement_status
    },

    SET_PRODUCTS_CART (state, products_cart) {
      state.products_cart = products_cart
    },

    SET_PRODUCTS (state, products) {
      state.products = products
    },

    SET_MARKER_BAKERY (state, markersBakerys) {
      state.markersBakerys = markersBakerys
    },

    SET_BAKERYS (state, bakerys) {
      state.bakerys = bakerys
    },

    SET_BAKERY (state, bakery) {
      state.bakery = bakery
    },

    SET_BAKERY_COMMENTS (state, bakeryComments) {
      state.bakeryComments = bakeryComments
    },

    SET_BAKERYS_ALL (state, bakerysAll) {
      state.bakerysAll = bakerysAll
    },

    SET_BAKERYS_ALL_COUNT (state, bakerysAllCount) {
      state.bakerysAllCount = bakerysAllCount
    },

    SET_BLOGS (state, blogs) {
      state.blogs = blogs
    },

    SET_BLOG (state, blog) {
      state.blog = blog
    },

    SET_BLOG_TAGS (state, blog_tags) {
      state.blog_tags = blog_tags
    },

    SET_BLOGS_ALL (state, blogsAll) {
      state.blogsAll = blogsAll
    },

    SET_BLOGS_ALL_COUNT (state, blogsAllCount) {
      state.blogsAllCount = blogsAllCount
    },

    SET_RATINGS (state, ratings) {
      state.ratings = ratings
    },

    SET_VILLES_FRANCE (state, villesFrance) {
      state.villesFrance = villesFrance
    },

    SET_SEARCH_ALL (state, searchAll) {
      state.searchAll = searchAll
    },

    SET_FAVORITES (state, bakerysFavorites) {
      state.bakerysFavorites = bakerysFavorites
    },

    SET_BAKERY (state, bakery) {
      state.bakery = bakery
    },

    SET_BAKERY_HOURS (state, bakeryHours) {
      state.bakeryHours = bakeryHours
    },

    SET_ACTIVATE_ACCOUNT (state, activateAccount) {
      state.activateAccount = activateAccount
    }

  }
})
