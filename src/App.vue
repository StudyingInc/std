<template>
  <div id="app">
    <MainPage :isMobile="isMobile" />
    <Footer :isMobile="isMobile" />
  </div>
</template>

<script>
import "./static/styles.css";
import MainPage from "./views/MainPage.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    MainPage,
    Footer,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.isMobile = true;
    }
  },
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
  overflow: hidden;
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
