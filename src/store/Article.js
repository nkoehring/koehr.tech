import { fetchArticle, fetchArticleComments } from '@/api'

const state = {
  title: '',
  description: '',
  slug: '',
  authorId: '',
  body: '',
  createdAt: 0,
  updatedAt: 0,
  favorited: false,
  favoritesCount: 0,
  tagList: [],
  comments: [],
  isLoading: false
}

const mutations = {
  setLoadingState (state, loadingState) {
    state.isLoading = !!loadingState
  },
  setArticle (state, payload) {
    // TODO: verbosity vs security...
    state.title = payload.title || 'without title'
    state.description = payload.description || ''
    state.slug = payload.slug || state.title.toLocaleLowerCase().replace(/[^a-z0-9]/g, '-')
    state.authorId = payload.author.id
    state.body = payload.body
    state.createdAt = payload.createdAt
    state.updatedAt = payload.updatedAt || payload.createdAt
    state.favorited = payload.favorited
    state.favoritesCount = payload.favoritesCount
    state.tagList = payload.tagList
    // comments are committed separately but a new article always brings its own
  },
  setComments (state, payload) {
    state.comments = payload
  },
  clearComments (state) {
    state.comments = []
  }
}

const actions = {
  async fetch ({ commit, state }, slug) {
    if (state.slug !== slug) {
      commit('setIsLoading', true)

      // comment loading can happen async, no need for await
      commit('clearComments')
      fetchArticleComments(slug).then(comments => {
        commit('setComments', comments)
      })

      const article = await fetchArticle(slug)
      commit('setArticle', article)
      commit('setIsLoading', false)
    }
    return Promise.resolve()
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
