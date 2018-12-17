<template>
  <article :id="`view--${$route.params.slug}`" v-html="content" />
</template>

<script>
// TODO: replace with actual markdown parser
function renderMarkdown (markdown) {
  return markdown
}

export default {
  name: 'article-view-content',
  props: {
    markdown: String
  },
  computed: {
    content () {
      return renderMarkdown(this.markdown)
    }
  }
}
</script>

<style scoped>
</style>
