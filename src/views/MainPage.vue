<template>
  <div class="main-page">
    <!-- <div class="wrapper"> -->
    <MainHeader />
    <Presentation />
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

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import smoothscroll from "smoothscroll-polyfill";

// gsap.registerPlugin(ScrollTrigger);

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
    document.querySelectorAll(".keep_scrolling").forEach(el => {
      el.addEventListener("click", this.scrollToPresentation);
    });

    // const tl = gsap.timeline();
    // tl.to(".main-page", { height: "700vh" });
    // tl.fromTo(
    //   ".presentation",
    //   { x: "100vw", y: "-100vh", opacity: 0 },
    //   { x: 0, y: "-100vh", opacity: 1 }
    // );
    // // tl.fromTo("#history", { x: 0, y: 0 }, { y: "-100vh" });
    // tl.to("#book", { yPercent: -100, opacity: 1 });
    // tl.to("#gadget", { yPercent: -200, opacity: 1 });
    // tl.to("#not_available", { yPercent: -300, opacity: 1 });
    // tl.to("#opportunity", { yPercent: -400, opacity: 1 });
    // tl.to("#final", { yPercent: -500, opacity: 1 });
    // tl.to("footer", { y: "-50vh" });
    // tl.to(".presentation", {
    //   height: () =>
    //     document.querySelector(".presentation").clientHeight -
    //     window.clientHeight +
    //     "px",
    // });
    // tl.fromTo("#book", { x: "-200vw", y: "100vh" }, { y: 0 });
    // tl.fromTo("#gadget", { x: "-300vw", y: "100vh" }, { y: 0 });
    // tl.fromTo("#not_available", { x: "-400vw", y: "100vh" }, { y: 0 });
    // tl.fromTo("#opportunity", { x: "-500vw", y: "100vh" }, { y: 0 });
    // tl.fromTo("#final", { x: "-600vw", y: "100vh" }, { y: 0 });

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: ".main-page",
    //   start: "top top",
    //   endTrigger: ".presentation",
    //   end: "bottom bottom",
    //   scrub: 1,
    //   pin: true,
    //   id: "section",

    //   // snap: 1,
    //   pinSpacing: false,
    //   markers: true,
    // });

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
        `${viewHeight}px`,
      );
    },
    scrollToPresentation() {
      this.currentSection = 1;
      this._scrollTo(this.sections[this.currentSection]);
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
.main-page {
  background: linear-gradient(
    237deg,
    #a6c0fe,
    #f68084,
    #9492ec,
    #55cf96,
    #9795f0,
    #f072b6
  );
  background-size: 700% 100%;

  -webkit-animation: bg_anim 40s ease infinite alternate;
  -moz-animation: bg_anim 40s ease infinite alternate;
  animation: bg_anim 40s ease infinite alternate;
}

footer {
  padding: 50px;
  color: #fafafa;
  font-size: 1.2em;
  letter-spacing: 1px;
  // margin: 10px;
  // border: 3px solid #000;
}
</style>
