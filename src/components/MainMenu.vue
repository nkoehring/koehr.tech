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
  position: fixed;
  top: 0;
  width: calc(var(--menu-width) - 1em);
  height: 100vh;
  padding: 4em 0 0 1em;
  background: var(--menu-background-color);
  z-index: 1;
  transform: translateX(calc(var(--menu-width) * -1));
  transition: transform .2s ease;
}
nav.visible {
  transform: translateX(0);
}

a {
  display: block;
  width: 90%;
  height: 2em;
  line-height: 2em;
  color: var(--menu-item-foreground-color);
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background: var(--menu-item-background-color);
  border: 5px solid var(--menu-item-background-color);
}
a.router-link-exact-active {
  color: black;
  border: 5px solid var(--highlight-color);
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
  background: var(--highlight-color);
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
