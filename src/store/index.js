import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    bakerys: [],
    blogs: []
  },
  getters: {
    getBakerys: (state) => state.bakerys,
    getBlogs: (state) => state.blogs
  },
  actions: {

    async fetchBakerys({ commit }) {
      try {
        const getUrl = await axios.get('http://my-bakery.fr:4800/bakerys')

        this.bakerys = getUrl.data.bakerys
        commit('SET_BAKERYS', getUrl.data.bakerys)
        console.log(getUrl.data.bakerys);
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },

    async fetchBlogs({ commit }) {
      try {
        const getUrl = await axios.get('http://my-bakery.fr:4800/blogs')

        this.blogs = getUrl.data.blogs
        commit('SET_BLOGS', getUrl.data.blogs)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  mutations: {

    SET_BAKERYS(state, bakerys) {
      state.bakerys = bakerys
    },

    SET_BLOGS(state, blogs) {
      state.blogs = blogs
    }
  }
})
