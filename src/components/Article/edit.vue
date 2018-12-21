<template>
  <article :id="`edit--${$route.params.slug}`">
    <header>
      <input v-model="title" />
    </header>
    <textarea v-model="markdown" />
    <button @click="save">save</button>
    <button @click="reset">reset</button>
  </article>
</template>

<script>
export default {
  name: 'article-edit',
  props: {
    _title: String,
    _markdown: String
  },
  data () {
    return {
      title: '',
      markdown: ''
    }
  },
  ready () {
    this.reset()
  },
  methods: {
    save () {
      const { title, markdown } = this
      this.$emit('update', { title, markdown })
    },
    reset () {
      this.title = this._title
      this.markdown = this._markdown
    }
  }
}
</script>

<style scoped>
</style>
