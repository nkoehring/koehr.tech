import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article.vue'
import Archive from './views/Archive.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/a/',
        name: 'article',
        component: Article,
        children: [
          {
            path: 'create',
            name: 'create-article',
            component: () => import(/* webpackChunkName: "article_edit" */ './components/ArticleEdit.vue')
          },
          {
            path: ':slug/edit',
            name: 'edit-article',
            component: () => import(/* webpackChunkName: "article_edit" */ './components/ArticleEdit.vue')
          },
          {
            path: ':slug',
            name: 'view-article',
            component: () => import(/* webpackChunkName: "article_view" */ './components/ArticleView.vue')
          }
        ]
      },
      {
        path: '/u/',
        name: 'profile',
        component: Profile,
        children: [
          {
            path: ':id/edit',
            name: 'profile-edit',
            component: () => import(/* webpackChunkName: "profile_edit" */ './components/ProfileEdit.vue')
          },
          {
            path: ':id',
            name: 'profile-view',
            component: () => import(/* webpackChunkName: "profile_view" */ './components/ProfileView.vue')
          }
        ]
      },
      {
        path: '/archive',
        name: 'archive',
        component: Archive
      }
    ]
  })
}
