<template>
  <div>
    <MainHeader />
    <Presentation />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Presentation from "@/components/Presentation.vue";

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
    window.addEventListener("wheel", this.onScroll);
  },
  methods: {
    scrollToPresentation() {
      let element = document.getElementById("history");
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    _scrollTo(id) {
      let element_offset = document.getElementById(id).offsetHeight;
      console.log("id: " + id + "\n" + "element_offset: " + element_offset);

      window.scrollTo({
        top: element_offset,
        behavior: "smooth",
      });
    },
    onScroll(e) {
      console.log(1);
      if (e.deltaY > 0 && this.sections.length > this.currentSection) {
        this.currentSection++;
        this._scrollTo(this.sections[this.currentSection]);
      } else if (e.deltaY < 0 && this.currentSection > 0) {
        this.currentSection -= 1;
        this._scrollTo(this.sections[this.currentSection]);
      }
    },
  },
};
</script>

<style lang="sass"></style>
