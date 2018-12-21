<template>
  <article :id="`edit--u-${$route.params.id}`">
    <header>
      <input v-model="name" />
    </header>
    <p>more to come...</p>
  </article>
</template>

<script>
export default {
  name: 'profile-view',
  props: {
    _name: String
  },
  data () {
    return {
      name: ''
    }
  },
  ready () {
    this.reset()
  },
  methods: {
    save () {
      this.$emit('update', { name })
    },
    reset () {
      this.title = this._title
    }
  }
}
</script>

<style scoped>
</style>
