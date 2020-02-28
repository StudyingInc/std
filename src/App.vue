<template>
  <div id="app">
    <TopLine />
  </div>
</template>

<script>

import "./static/bg.js";
import TopLine from "./components/TopLine";
import "./static/styles.css";
export default {
  name: "App",
  components: {
    TopLine
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

.header {
  margin-top: 300px;
  display: block;
}

.animated-bg{
  z-index: -1;
  top:0;
  position: absolute;
}
</style>
