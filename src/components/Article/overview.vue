<template>
  <section name="article-overview" class="article-overview">
    <header>
      <h2>{{ title }}</h2>
      <small class="created-at" :title="lastUpdate">{{ createdAt | humanReadableDate }}</small>
      <p>{{ description }}</p>
    </header>
  </section>
</template>

<script>
import { dateFilter } from '@/filters/date'

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
  },
  computed: {
    lastUpdate () {
      if (!this.updatedAt || this.updatedAt === this.createdAt) return ''
      return `last update: ${dateFilter(this.updatedAt)}`
    }
  }
}
</script>

<style scoped>
</style>
