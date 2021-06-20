<template>
  <section>
    <PresentationBlock
      v-for="(item, counter) in cards"
      :key="item.name"
      :id="item.name"
      :name="item.name"
      :text="item.text"
      :img="item.img"
      :even="counter % 2 != 0"
    />
  </section>
</template>

<script>
import PresentationBlock from "@/components/PresentationBlock";

export default {
  components: {
    PresentationBlock,
  },
  data() {
    return {
      cards: [
        {
          name: "history",
          img: require("@/assets/presentation/pen.svg"),
          text:
            "The education system has changed continuously throughout the history of mankind.",
        },
        {
          name: "book",
          img: require("@/assets/presentation/book.svg"),
          text:
            "Our ancestors have come a long way from creating the first written language to the use of colored textbooks.",
        },
        {
          name: "gadget",
          img: require("@/assets/presentation/gadget.svg"),
          text:
            "Now we are at the stage of development when children use computers in the first grade of school, and it is impossible to imagine their life without a phone.",
        },
        {
          name: "not_available",
          img: require("@/assets/presentation/not-available.svg"),
          text:
            "However, education is not characterized only by the use of new technologies. One of the most important parameters of training is its availability. In this regard, our world is moving quite slowly",
        },
        {
          name: "opportunity",
          img: require("@/assets/presentation/opportunity.svg"),
          text:
            "Getting a child into a decent university or college is a problem for most families. And it's not just the cost of tuition or the difficulty of passing exams. The main problem of admission today is a lack of understanding of how and where you can enroll. ",
        },
        {
          name: "final",
          img: require("@/assets/presentation/final.svg"),
          text:
            "Unfortunately, in the school system, a lot of time is devoted to passing exams, and little time is given to expanding horizons and informing about opportunities. It is to fill this gap in education that we are opening Study.Inc.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
}
</style>
