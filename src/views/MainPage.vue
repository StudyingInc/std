<template>
  <div class="main-page">
    <div class="up-button" @click="scrollTop">
      <img src="../assets/_up.svg" />
    </div>
    <!-- <div class="wrapper"> -->
    <div class="bg-wrapper">
      <MainHeader :isMobile="isMobile" />
    </div>
    <Presentation :isMobile="isMobile" />
    <AboutStudyInc :isMobile="isMobile" />
    <Info :isMobile="isMobile" />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Presentation from "@/components/Presentation.vue";
import AboutStudyInc from "@/components/AboutStudyInc.vue";
import Info from "@/components/Info.vue";

import gsap from "gsap";
import scrollTo from "gsap/ScrollToPlugin";
import smoothscroll from "smoothscroll-polyfill";

gsap.registerPlugin(scrollTo);

export default {
  name: "MainPage",
  components: {
    MainHeader,
    Presentation,
    AboutStudyInc,
    Info,
  },
  props: {
    isMobile: Boolean,
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
    setTimeout(() => {
      gsap.fromTo(
        ".up-button",
        {
          autoAlpha: 0.01,
          y: 200,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".presentation",
            start: "top top",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, 200);

    document.querySelectorAll(".keep_scrolling").forEach((el) => {
      el.addEventListener("click", this.scrollToPresentation);
    });

    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;
  },
  methods: {
    scrollTop() {
      gsap.to(window, {
        duration: this.isMobile ? 0 : 0.8,
        scrollTo: 0,
        ease: "sine",
      });
    },
    getClientHeight() {
      let viewHeight;
      let body = document.querySelector("body");
      body.classList.add("hidden");
      viewHeight = document.documentElement.clientHeight;
      body.classList.remove("hidden");
      document.documentElement.style.setProperty(
        "--viewHeight",
        `${viewHeight}px`
      );
    },
    scrollToPresentation() {
      this.currentSection = 1;
      gsap.to(window, { duration: 0.8, scrollTo: "#history" });
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

<style lang="scss">
@keyframes bg_anim {
  0% {
    background-position: 0% 86%;
  }
  50% {
    background-position: 100% 15%;
  }
  100% {
    background-position: 0% 86%;
  }
}

.main-page {
  .up-button {
    z-index: 10;
    position: fixed;
    right: calc(var(--viewHeight) - 0.97 * var(--viewHeight));
    bottom: calc(var(--viewHeight) - 0.97 * var(--viewHeight));
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.589);
    box-shadow: 5px 5px 8px rgba(25, 22, 68, 0.281);
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.835);
    }

    img {
      height: 45%;
      width: 45%;
      pointer-events: none;
    }
  }
  .bg-wrapper {
    background: linear-gradient(52deg, #7f7eda, #7776d4, #f68084, #f563acaa);
    background-size: 200% 200%;

    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
  }
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 90%;
  }
  50% {
    background-position: 100% 11%;
  }
  100% {
    background-position: 0% 90%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 90%;
  }
  50% {
    background-position: 100% 11%;
  }
  100% {
    background-position: 0% 90%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 90%;
  }
  50% {
    background-position: 100% 11%;
  }
  100% {
    background-position: 0% 90%;
  }
}

// .main-page .bg-wrapper {
//   // #a6c0fe,
//   // #f072b6
//   // background: linear-gradient(237deg, #f68084, #9492ec, #9795f0);
//   background: linear-gradient(237deg, red, green, blue, orange);
//   background-size: 400% 500%;

//   -webkit-animation: bg_anim 40s ease infinite alternate;
//   -moz-animation: bg_anim 40s ease infinite alternate;
//   animation: bg_anim 40s ease infinite alternate;
// }

footer {
  padding: 50px;
  color: #fafafa;
  font-family: "Comfortaa", sans-serif;
  font-size: 1.2em;
  letter-spacing: 1px;
  // margin: 10px;
  // border: 3px solid #000;
}

@media screen and (max-width: 992px) {
  .main-page .bg-wrapper {
    animation: none;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../assets/mobile-header-picture1_1280.jpg");
    background-repeat: no-repeat;
    background-position: right 50% bottom 20%;
    background-size: cover;
  }
}

@media screen and (max-width: 500px) {
  .main-page {
    .up-button {
      width: 45px;
      height: 45px;
      img {
        height: 45%;
        width: 45%;
        pointer-events: none;
      }
    }
  }
}
</style>
