<template>
  <article :id="`view--${$route.params.slug}`">
    <mark-down :text="md" />
  </article>
</template>

<script>
import MarkDown from '@/components/MarkDown'
const md = '# HOME\n\nThis page is meant to show a static front page.\n\nThis should be another paragraph.\n\n```js\nconst here = "you have some code"```\n'

export default {
  name: 'article-view-content',
  components: { MarkDown },
  data () {
    return { md }
  }
}
</script>

<style scoped>
</style>
