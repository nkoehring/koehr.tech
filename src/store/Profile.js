import { fetchProfile } from '@/api'

const state = {
  id: '',
  username: '',
  bio: '',
  following: false,
  image: null
}

const mutations = {
  setLoadingState (state, loadingState) {
    state.isLoading = !!loadingState
  },
  setProfile (state, payload) {
    // TODO: verbosity vs security...
    state.id = payload.id
    state.username = payload.username
    state.bio = payload.bio || ''
    state.following = !!payload.following
    state.image = payload.image
  }
}

const actions = {
  async fetch ({ commit, state }, id) {
    if (state.id !== id) {
      commit('setIsLoading', true)
      const profile = await fetchProfile(id)
      commit('setProfile', profile)
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
