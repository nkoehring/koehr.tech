<template>
  <div id="home" v-once>
    <h1>Welcome</h1>
    <ol>
      <li :key="article.slug" v-for="article in articles">
        <article-overview v-bind="article" />
      </li>
    </ol>
  </div>
</template>

<script>
import ArticleOverview from '@/components/Article/overview'
import articles from '@/testdata/articles.json'

export default {
  name: 'home',
  components: { ArticleOverview },
  data () {
    return { articles }
  }
}
</script>

<style scoped>
#home {
  display: block;
  max-width: 96rem;
  width: 100%;
  margin: auto;
}
ol {
  list-style: none;
}
</style>
