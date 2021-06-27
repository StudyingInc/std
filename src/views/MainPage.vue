<template>
  <div v-body-scroll-lock="mobile" v-touch:swipe="swipeHandler">
    <MainHeader />
    <Presentation />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Presentation from "@/components/Presentation.vue";

import { debounce } from "debounce";
import smoothscroll from "smoothscroll-polyfill";

export default {
  name: "MainPage",
  components: {
    MainHeader,
    Presentation,
  },
  data() {
    return {
      mobile: false,
      sections: [
        "header",
        "history",
        "book",
        "gadget",
        "not_available",
        "opportunity",
        "final",
      ],
      currentSection: 0,
    };
  },
  mounted() {
    document
      .querySelector(".keep_scrolling")
      .addEventListener("click", this.scrollToPresentation);

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.mobile = true;
      window.addEventListener("scroll", debounce(this.scrollChecker, 200));
      smoothscroll.polyfill();
      window.__forceSmoothScrollPolyfill__ = true;
    } else {
      window.addEventListener("wheel", this.onWheel);
      window.addEventListener("scroll", debounce(this.scrollChecker, 200));
      window.addEventListener("keydown", this.onKeyPrssed);
    }
  },
  methods: {
    scrollToPresentation() {
      this.currentSection = 1;
      let element = document.getElementById("history");
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    _scrollTo(id) {
      let el = document.getElementById(id);
      var element_offset = el.getBoundingClientRect().top;
      window.scrollTo({
        top: document.documentElement.scrollTop + element_offset,
        behavior: "smooth",
      });
    },
    onWheel(e) {
      if (e.deltaY > 0 && this.sections.length - 1 > this.currentSection) {
        this.currentSection++;
        this._scrollTo(this.sections[this.currentSection]);
      } else if (e.deltaY < 0 && this.currentSection > 0) {
        this.currentSection -= 1;
        this._scrollTo(this.sections[this.currentSection]);
      }
    },
    onKeyPrssed(e) {
      let key = e.keyCode;
      let downkeys = [40, 34, 32, 39];
      let upkeys = [38, 33, 37];
      if (
        downkeys.indexOf(key) > -1 &&
        this.sections.length - 1 > this.currentSection
      ) {
        this.currentSection++;
        this._scrollTo(this.sections[this.currentSection]);
      } else if (upkeys.indexOf(key) > -1 && this.currentSection > 0) {
        this.currentSection -= 1;
        this._scrollTo(this.sections[this.currentSection]);
      }
    },
    scrollChecker() {
      let pos = window.pageYOffset;
      let newSection = null;
      for (let i = this.sections.length - 1; i >= 0; i--) {
        if (
          document.getElementById(this.sections[i]).offsetTop >=
          pos - 0.6 * window.innerHeight
        )
          newSection = i;
      }
      if (newSection != this.currentSection) {
        this.currentSection = newSection;
        this._scrollTo(this.sections[this.currentSection]);
      }
      if (document.getElementById(this.sections[this.currentSection]) != pos) {
        this._scrollTo(this.sections[this.currentSection]);
      }
      console.log(this.currentSection);
    },
    swipeHandler(direction) {
      if (
        direction == "top" &&
        this.sections.length - 1 > this.currentSection
      ) {
        this.currentSection++;
        this._scrollTo(this.sections[this.currentSection]);
      } else if (direction == "bottom" && this.currentSection > 0) {
        this.currentSection -= 1;
        this._scrollTo(this.sections[this.currentSection]);
      }
    },
  },
};
</script>

<style lang="sass"></style>
