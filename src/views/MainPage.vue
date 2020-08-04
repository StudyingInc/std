<template>
  <div>
    <TopLine />
    <MainHeader />
  </div>
</template>

<script>
import TopLine from "@/components/TopLine.vue";
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "MainPage",
  components: {
    TopLine,
    MainHeader
  }
};
</script>
