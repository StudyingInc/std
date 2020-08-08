<template>
  <div>
    <TopLine />
    <div class="about">apply page</div>
  </div>
</template>

<script>
import TopLine from "@/components/TopLine.vue";

export default {
  name: "Apply",
  components: {
    TopLine
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

.about {
  font-family: "Varela Round", sans-serif;
  font-size: 60pt;
  font-weight: bold;
  margin: 100px;
  text-transform: uppercase;
}
</style>
