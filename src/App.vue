<template>
  <div id="app">
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

<style src="@/assets/base.css" />
<style>
:root {
  --menu-width: 300px;
  --header-height: 6rem;
  --highlight-color: #8BC51C;
  --page-max-width: 1280px;
}

#app {
  display: block;
  width: 100vw;
  font-size: 1.6rem;
}
#app > .content {
  max-width: 70rem;
  width: calc(100% - 6em);
  margin: var(--header-height) auto;
}
@media (max-width: 580px) {
  #app > .content {
    width: calc(100% - 2em);
  }
}
</style>
