<template>
  <div class="topline">
    <div class="container">
      <router-link to="/" class="logo">
        STUDY
        <div class="inc">Inc.</div>
      </router-link>
      <div class="nav-toggler" @click="navHandle">
        <i class="fas fa-bars"></i>
      </div>
      <div class="nav">
        <router-link
          @click.native="hideNav"
          :to="link.url"
          v-for="link in links"
          v-bind:key="link.id"
          >{{ link.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

if ($(".nav-toggler").is(":visible")) {
  $(".nav").fadeOut();
}

export default {
  name: "TopLine",
  data() {
    return {
      links: [
        { id: "0", name: "Поступление", url: "/apply" },
        { id: "1", name: "Учеба", url: "/edu" },
        { id: "2", name: "ISA", url: "/isa" },
        { id: "3", name: "Форум", url: "/forum" },
        { id: "4", name: "Конакты", url: "/about" },
      ],
      opened: false,
    };
  },
  methods: {
    navHandle: function() {
      if (!$(".nav").is(":visible")) {
        $(".nav")
          .css("display", "flex")
          .hide()
          .fadeIn();
        $(".nav-toggler").css("background", "#0d0d22");
        $(".nav-toggler").css("color", "#fafafa");
      } else {
        $(".nav").fadeOut("slow");
        $(".nav-toggler").css("background", "#fafafa");
        $(".nav-toggler").css("color", "#0d0d22");
      }
    },
    hideNav: function() {
      if ($(".nav-toggler").is(":visible")) {
        $(".nav").fadeOut("slow");
        $(".nav-toggler").css("background", "#fafafa");
        $(".nav-toggler").css("color", "#0d0d22");
      }
    },
  },
};
</script>

<style scoped>
.topline {
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #fafafa;
  top: 0;
  z-index: 1;
  font-family: "Comfortaa";
  box-shadow: 0 0 2px 0.1px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}

.logo {
  font-family: "Comfortaa", "PT Sans";
  float: left;
  font-weight: bold;
  font-size: 1.3em;
  height: 60px;
  line-height: 65px;
  text-decoration: none;
  color: #2b2d42;
}

.inc {
  display: block;
  float: right;
  background: #2b2d42;
  padding: 5px;
  text-align: center;
  color: #fafafa;
  height: 30px;
  margin-left: 4px;
  margin-top: 14.5px;
  border-radius: 4px;
  line-height: 24px;
}

@media screen and (min-width: 800px) {
  .nav-toggler {
    display: none;
  }

  .nav {
    display: flex !important;
    justify-content: flex-end;
  }

  .topline .nav a {
    display: inline-block;
    text-decoration: none;
    color: #5f5f5f;
    font-family: "Comfortaa";
    font-weight: 500;
    transition: all 0.2s;
    padding: 2px 12px;
    margin: 0 3px;
    margin-top: 13px;
    height: 33px;
    border-radius: 4px;
    line-height: 33px;
  }

  .nav a:hover {
    background: #2b2d42;
    text-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.6);
    color: #fafafa !important;
    box-shadow: 0 0 2px 0.1px rgba(0, 0, 0, 0.4);
  }

  /*              INFO
 * .router-link-exact-active for /edu 
 * .router-link-active for /edu/* 
 */

  .nav .router-link-active {
    color: #0d0d22 !important;
    font-weight: 700 !important;
  }
}

@media screen and (max-width: 800px) {
  .nav-toggler {
    display: block;
    float: right;
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    font-size: 1.2em;
    text-align: center;
    margin: 15px 0;
    border: 2px solid #0d0d22;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .nav-toggler:hover {
    color: #fafafa;
    background: #0d0d22;
  }

  .nav {
    display: none;
    position: relative;
    justify-content: space-between;
    top: 10px;
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    text-align: center;
    justify-content: center;
    background: #fafafa;
  }

  .topline .nav a {
    display: inline;
    text-decoration: none;
    color: #5f5f5f;
    font-family: "Comfortaa";
    font-weight: 500;
    transition: all 0.2s;
    padding: 2px 12px;
    margin: 0 3px;
    border-radius: 4px;
    line-height: 30px;
  }

  .nav a:hover {
    background: #2b2d42;
    text-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.6);
    color: #fafafa !important;
    box-shadow: 0 0 2px 0.1px rgba(0, 0, 0, 0.4);
  }

  /*              INFO
 * .router-link-exact-active for /edu 
 * .router-link-active for /edu/* 
 */

  .nav .router-link-active {
    color: #0d0d22 !important;
    font-weight: 700 !important;
  }
}
</style>
