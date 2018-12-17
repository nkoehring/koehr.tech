<template>
  <div id="profile">
    <h1>PROFILE</h1>
    <router-view />
  </div>
</template>

<script>
// import Foo from '@/components/Foo.vue'

export default {
  name: 'profile',
  // components: { Foo }
  data () {
    return {}
  }
}
</script>

<style scoped>
#profile {
  color: 'rose';
}
</style>
