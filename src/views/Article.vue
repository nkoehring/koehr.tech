<template>
  <div id="article">
    <h1>ARTICLE</h1>
    <router-view />
  </div>
</template>

<script>
// import Foo from '@/components/Foo.vue'

export default {
  name: 'article-view',
  // components: { Foo }
  data () {
    return {}
  }
}
</script>

<style scoped>
#article {
  color: 'rose';
}
</style>
