<template>
  <div>
    <MainHeader />
    <Presentation />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Presentation from "@/components/Presentation.vue";

import { debounce } from "debounce";

export default {
  name: "MainPage",
  components: {
    MainHeader,
    Presentation,
  },
  data() {
    return {
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
      //mobile
    } else {
      window.addEventListener("wheel", debounce(this.onWheel, 300));
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
    scroll(el, direction) {
      //native js scroll function for mobile browsers
      var duration = 2000,
        start = new Date().getTime();

      var fn = function() {
        var top = el.getBoundingClientRect().top - 96,
          now = new Date().getTime() - start,
          result = Math.round((top * now) / duration);

        result =
          result > direction * top ? top : result == 0 ? direction : result;

        var pageHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
        if (
          direction * top > 0 &&
          pageHeight - window.pageYOffset >
            direction * document.documentElement.clientHeight
        ) {
          window.scrollBy(0, result);
          requestAnimationFrame(fn);
        }
      };
      requestAnimationFrame(fn);
    },
  },
};
</script>

<style lang="sass"></style>
