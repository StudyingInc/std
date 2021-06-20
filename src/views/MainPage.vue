<template>
  <div>
    <MainHeader />
    <Presentation />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import Presentation from '@/components/Presentation.vue';

export default {
  name: 'MainPage',
  components: {
    MainHeader,
    Presentation
  },
  data() {
    return {
      sections: [
        'header',
        'history',
        'book',
        'gadget',
        'not_available',
        'opportunity',
        'final'
      ],
      currentSection: 0
    };
  },
  mounted() {
    document
      .querySelector('.keep_scrolling')
      .addEventListener('click', this.scrollToPresentation);

    window.addEventListener('wheel', this.onWheel);
    window.addEventListener('keydown', this.onKeyPrssed);
  },
  methods: {
    scrollToPresentation() {
      let element = document.getElementById('history');
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
    _scrollTo(id) {
      let el = document.getElementById(id);
      var element_offset = el?.getBoundingClientRect().top;
      window.scrollTo({
        top: document.documentElement.scrollTop + element_offset,
        behavior: 'smooth'
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
    }
  }
};
</script>

<style lang="sass"></style>
