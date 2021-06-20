<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./static/styles.css";

export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
:root {
  --primary: #2b2d42;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  color: #0d0d22;
}

.header {
  margin-top: 300px;
  display: block;
}

.animated-bg {
  z-index: -1;
  top: 0px;
  position: fixed;
}
</style>
