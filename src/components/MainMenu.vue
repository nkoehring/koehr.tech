<template>
  <nav :class="{ visible }">
    <div class="toggle" @click="$emit('update:visible', !visible)">
      <span class="burger-bar top">&nbsp;</span>
      <span class="burger-bar middle">&nbsp;</span>
      <span class="burger-bar bottom">&nbsp;</span>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/archive">Archive</router-link>
  </nav>
</template>

<script>
export default {
  name: 'main-menu',
  props: {
    visible: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
nav {
  position: relative;
  flex: 0 0 auto;
  width: calc(var(--menu-width) - 1em);
  height: calc(100vh - 4em);
  padding: 4em 0 0 1em;
  background: #333;
  z-index: 1;
}

a {
  display: inline-block;
  width: 110px;
  height: 110px;
  margin: 5px;
  line-height: 110px;
  color: #333;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background: #baa;
  border: 5px solid #999;
}
a.router-link-exact-active {
  color: black;
  border: 5px solid #595;
}
.toggle {
  position: absolute;
  top: 1em;
  right: 1em;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  width: 36px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  transition: transform .2s ease;
  transform: translate(4.5em);
}
.toggle > .burger-bar {
  background: #595;
  flex: 0 0 auto;
  width: 100%;
  height: 20%;
  transition: transform .2s linear, opacity .1s linear;
}

nav.visible > .toggle {
  transform: translate(0px);
}
nav.visible > .toggle > .burger-bar.top {
  transform-origin: left top;
  transform: rotate(45deg);
}
nav.visible > .toggle > .burger-bar.middle {
  opacity: 0;
}
nav.visible > .toggle > .burger-bar.bottom {
  transform-origin: left bottom;
  transform: rotate(-45deg);
}
</style>
