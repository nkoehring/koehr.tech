import Vue from 'vue'
import Vuex from 'vuex'

import Home from './Home'
import Article from './Article'
import Profile from './Profile'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: { Home, Article, Profile }
  })
}
