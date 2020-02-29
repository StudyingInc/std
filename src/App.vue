<template>
  <div id="app">
    <TopLine />
    <MainHeader />
  </div>
</template>

<script>
import "./static/bg.js";
import "./static/styles.css";

import TopLine from "./components/TopLine";
import MainHeader from "./components/MainHeader";

export default {
  name: "App",
  components: {
    TopLine,
    MainHeader
  }
};
</script>

<style lang="scss">
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
