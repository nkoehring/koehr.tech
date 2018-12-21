import Vue from 'vue'
import dateFilters from './date'

export function registerFilters () {
  Object.keys(dateFilters).forEach(name => {
    Vue.filter(name, dateFilters[name])
  })
}
