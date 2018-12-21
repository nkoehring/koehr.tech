<template>
  <div v-if="configLoading">loading...</div>
  <div v-else id="home">
    <header>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </header>

    <div v-if="articlesLoading">loading recent articles...</div>
    <ol v-else class="articles-list">
      <li :key="article.slug" v-for="article in articles">
        <router-link :to="{name: 'view-article', params: {slug: article.slug}}">
          <article-overview v-bind="article" />
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import ArticleOverview from '@/components/Article/overview'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('Home')

export default {
  name: 'home',
  components: { ArticleOverview },
  beforeMount () {
    this.fetchConfiguration()
    this.fetchRecentArticles()
    this.fetchTags()
  },
  methods: mapActions(['fetchConfiguration', 'fetchRecentArticles', 'fetchTags']),
  computed: mapState([
    'configLoading', 'articlesLoading', 'tagsLoading',
    'title', 'description', 'multiUser', 'articles', 'tags'
  ])
}
</script>

<style>
#home {
  display: block;
  max-width: 96rem;
  width: 100%;
  margin: auto;
}

#home > header {
  display: block;
  margin-bottom: 6em;
}

#home ol.articles-list > li {
  display: block;
  margin: 2em 0;
  padding: 1rem;
  border-left: .4rem solid transparent;
  box-shadow: var(--box-shadow-shift) var(--box-shadow-shift) var(--box-shadow-strength) var(--box-shadow-color);
  cursor: pointer;
}
#home ol.articles-list > li > a {
  color: inherit;
}

#home ol.articles-list > li:hover {
  border-left-color: var(--highlight-color);
}

.article-overview header > h2 {
  margin-top: 1em;
}
@media (max-width: 580px) {
  #home > header {
    margin-bottom: 4em;
  }
}
</style>
