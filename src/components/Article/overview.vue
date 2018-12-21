<template>
  <section name="article-overview" class="article-overview">
    <header>
      <h1>{{ title }}</h1>
      <small class="created-at">{{ createdAt | humanReadableDate }}</small>
    </header>
  </section>
</template>

<script>
export default {
  name: 'article-overview',
  props: {
    slug: String,
    title: String,
    description: String,
    author: Object,
    category: String,
    createdAt: Number,
    updatedAt: Number,
    tagList: Array,
    favorited: Boolean,
    favoritesCount: Number
  }
}
</script>

<style scoped>
</style>
