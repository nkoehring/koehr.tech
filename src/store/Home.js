import { fetchConfiguration, fetchRecentArticles, fetchTags } from '@/api'

const state = {
  title: '',
  description: '',
  multiUser: false,
  configLoading: false,
  articlesLoading: false,
  tagsLoading: false,
  articles: [],
  tags: []
}

const mutations = {
  setConfigLoading (state, loadingState) {
    state.configLoading = !!loadingState
  },
  setArticlesLoading (state, loadingState) {
    state.articlesLoading = !!loadingState
  },
  setTagsLoading (state, loadingState) {
    state.tagsLoading = !!loadingState
  },
  setConfig (state, { title, description, multiUser }) {
    state.title = title
    state.description = description
    state.multiUser = !!multiUser
  },
  setArticles (state, articles) {
    state.articles = articles
  },
  setTags (state, tags) {
    state.tags = tags
  }
}

const actions = {
  async fetchConfiguration ({ commit }) {
    commit('setConfigLoading', true)
    const configData = await fetchConfiguration()
    commit('setConfig', configData)
    commit('setConfigLoading', false)
  },
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
