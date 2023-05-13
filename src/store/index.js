import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    bakerys: [],
    bakerysAll: [],
    bakerysAllCount: [],
    blogs: [],
    blogsAll: [],
    blogsAllCount: 0,
    ratings: []
  },
  getters: {
    getBakerys: (state) => state.bakerys,
    getBakerysAll: (state) => state.bakerysAll,
    getBakerysAllCount: (state) => state.bakerysAllCount,
    getBlogs: (state) => state.blogs,
    getBlogsAll: (state) => state.blogsAll,
    getBlogsAllCount: (state) => state.blogsAllCount,
    getRatings: (state) => state.ratings
  },
  actions: {

    // Liste des boulangeries en France
    async fetchBakerys({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/bakerys')

        this.bakerys = getUrl.data.bakerys
        commit('SET_BAKERYS', getUrl.data.bakerys)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBakerysAll({ commit }) {
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

    // Liste des articles sur le blog
    async fetchBlogs({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/blogs')

        this.blogs = getUrl.data.blogs
        commit('SET_BLOGS', getUrl.data.blogs)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBlogsAll({ commit }) {
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

    // Vote du site internet
    async fetchRatings({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/ratings')

        this.blogs = getUrl.data.ratings
        commit('SET_RATINGS', getUrl.data.ratings)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {

    SET_BAKERYS(state, bakerys) {
      state.bakerys = bakerys
    },

    SET_BAKERYS_ALL(state, bakerysAll) {
      state.bakerysAll = bakerysAll
    },

    SET_BAKERYS_ALL_COUNT(state, bakerysAllCount) {
      state.bakerysAllCount = bakerysAllCount
    },

    SET_BLOGS(state, blogs) {
      state.blogs = blogs
    },

    SET_BLOGS_ALL(state, blogsAll) {
      state.blogsAll = blogsAll
    },

    SET_BLOGS_ALL_COUNT(state, blogsAllCount) {
      state.blogsAllCount = blogsAllCount
    },

    SET_RATINGS(state, ratings) {
      state.ratings = ratings
    }
  }
})
