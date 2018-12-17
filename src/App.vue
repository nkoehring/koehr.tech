<template>
  <div id="app" :class="{ 'with-menu': navVisible }">
    <main-menu :visible.sync="navVisible" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'

export default {
  name: 'app',
  components: { MainMenu },
  watch: {
    $route () {
      this.navVisible = false
    }
  },
  data () {
    return {
      navVisible: false
    }
  }
}
</script>

<style>
:root {
  --menu-width: 300px;
  --header-height: 4rem;
  --highlight-color: #8BC51C;
  --page-max-width: 1280px;
}

html,body {
  margin: 0;
  padding: 0;
  background-color: #333;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  display: flex;
  color: #EEE0E0;
  font-size: 1.6rem;
  transform: translateX(calc(var(--menu-width) * -1));
  transition: transform .2s ease;
}
#app.with-menu {
  transform: translateX(0px);
}
#app > .content {
  width: calc(100vw - var(--menu-width));
  margin-top: var(--header-height);
  margin-left: 10rem;
  padding: 1em;
  vertical-align: top;
}
</style>
