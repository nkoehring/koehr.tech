import { fetchRecentArticles, fetchTags } from '@/api'

const state = {
  articlesLoading: false,
  tagsLoading: false,
  articles: [],
  tags: []
}

const mutations = {
  setArticlesLoading (state, loadingState) {
    state.articlesLoading = loadingState
  },
  setTagsLoading (state, loadingState) {
    state.tagsLoading = loadingState
  },
  setArticles (state, { articles, articlesCount }) {
    state.articles = articles
  },
  setTags (state, { tags }) {
    state.tags = tags
  }
}

const actions = {
  async fetchRecentArticles ({ commit }) {
    commit('setArticlesLoading', true)
    const articleData = await fetchRecentArticles()
    commit('setArticles', articleData)
    commit('setArticlesLoading', false)
  },
  async fetchTags ({ commit }) {
    commit('setTagsLoading', true)
    const tags = await fetchTags()
    commit('setTags', tags)
    commit('setTagsLoading', false)
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
