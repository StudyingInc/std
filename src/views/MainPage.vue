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
  }
};
</script>

<style lang="sass"></style>
