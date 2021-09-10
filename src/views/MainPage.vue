<template>
  <div class="main-page">
    <!-- <div class="wrapper"> -->
    <div class="bg-wrapper">
      <MainHeader />
    </div>
    <Presentation />
    <AboutStudyInc />
    <Info />
    <footer class="footer">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime odit
      laboriosam laudantium alias accusamus eveniet corporis id quos natus iure
      sed eius, nobis velit mollitia inventore nemo possimus nam autem
      repellendus. Dolorum itaque reiciendis aliquid sit excepturi nisi error?
      Modi debitis qui, praesentium officiis illo aut impedit veritatis rerum!
    </footer>
    <!-- </div> -->
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
    document.querySelectorAll(".keep_scrolling").forEach((el) => {
      el.addEventListener("click", this.scrollToPresentation);
    });

    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;
  },
  methods: {
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

<style lang="scss" scoped>
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

.main-page .bg-wrapper {
  background: linear-gradient(52deg, #7f7eda, #7776d4, #f68084, #f563acaa);
  background-size: 200% 200%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
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

@media screen and (max-width: 500px) {
  .main-page .bg-wrapper {
    animation: none;
    background: url("../assets/mesh9.jpg");
    background-repeat: no-repeat;
    background-size: 100% 200vh;
  }
}
</style>
