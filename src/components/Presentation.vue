<template>
  <section class="presentation">
    <section
      class="presentation_block pb disable_selection history"
      id="history"
    >
      <div class="container">
        <div class="image">
          <img src="@/assets/presentation/pen.svg" />
        </div>

        <p>
          The education system has changed continuously throughout the history
          of mankind
        </p>
      </div>
    </section>

    <section class="presentation_block pb disable_selection book" id="book">
      <div class="container reversed">
        <div class="image">
          <img src="@/assets/presentation/book.svg" />
        </div>

        <p>
          Our ancestors have come a long way from creating the first written
          language to the use of colored textbooks
        </p>
      </div>
    </section>

    <section class="presentation_block pb disable_selection gadget" id="gadget">
      <div class="container">
        <div class="image">
          <img src="@/assets/presentation/gadget.svg" />
        </div>

        <p>
          Now we are at the stage of development when children use computers in
          the first grade of school, and it is impossible to imagine their life
          without a phone
        </p>
      </div>
    </section>

    <section
      class="presentation_block pb disable_selection not_available"
      id="not_available"
    >
      <div class="container reversed">
        <div class="image">
          <img src="@/assets/presentation/not-available.svg" />
        </div>

        <p>
          However, education is not characterized only by the use of new
          technologies. One of the most important parameters of training is its
          availability. In this regard, our world is moving quite slowly
        </p>
      </div>
    </section>

    <section
      class="presentation_block pb disable_selection opportunity"
      id="opportunity"
    >
      <div class="container">
        <div class="image">
          <img src="@/assets/presentation/opportunity.svg" />
        </div>

        <p>
          Getting a child into a decent university or college is a problem for
          most families. And it's not just the cost of tuition or the difficulty
          of passing exams. The main problem of admission today is a lack of
          understanding of how and where you can enroll
        </p>
      </div>
    </section>

    <section class="presentation_block pb disable_selection final" id="final">
      <div class="container reversed">
        <div class="image">
          <img src="@/assets/presentation/final.svg" />
        </div>

        <p>
          Unfortunately, in the school system, a lot of time is devoted to
          passing exams, and little time is given to expanding horizons and
          informing about opportunities. It is to fill this gap in education
          that we are opening Study.Inc
        </p>
      </div>
    </section>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {};
  },
  mounted() {
    document
      .querySelectorAll(".presentation_block .container")
      .forEach((el) => {
        const img = el.querySelector(".image");
        const p = el.querySelector("p");
        if (el.classList.contains("reversed")) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top center",
              end: "top bottom",
              markers: true,
              toggleActions: "play none none reset",
              once: true,
            },
          });

          tl.from(img, {
            x: 200,
            opacity: 0,
            duration: 1,
          });

          tl.from(
            p,
            {
              y: 150,
              opacity: 0,
              duration: 1,
            },
            "-=1"
          );
        } else {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top center",
              end: "top bottom",
              markers: true,
              toggleActions: "play none none reset",
              once: true,
            },
          });

          tl.from(img, {
            x: -200,
            opacity: 0,
            duration: 1,
          });

          tl.from(
            p,
            {
              y: 150,
              opacity: 0,
              duration: 1,
            },
            "-=1"
          );
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.presentation {
  // background: #fafafa67;
  // position: absolute;
  // height: 100vh;
  // top: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  // margin-bottom: -550vh;
  section {
    position: relative;
    // top: 0;
    // left: 0;
    width: 100%;
  }
}
.disable_selection {
  user-select: none;
}

section.presentation_block {
  width: 100vw;
  font-family: "Comfortaa", sans-serif;

  .container {
    height: 40vh;
    display: flex;
    justify-content: space-around;
    // background: #fafafa;
    align-items: center;

    &.reversed {
      flex-direction: row-reverse;
    }

    p {
      width: 60%;
      font-weight: 400;
      font-size: 1.1em;
      line-height: 1.6em;
      // border-radius: 7px;
      // background: #fffbfa;
      // box-shadow: inset 0 0 3px #776c6780;
      text-align: justify;
    }

    .image {
      display: flex;
      background: #fafafa;
      // box-shadow: inset 0 0 3px #776c6780;
      // border: 1px solid #908f8f2f;
      border-radius: 50%;
      padding: 4%;
      justify-content: center;
      align-items: center;

      img {
        height: 10vw;
      }
    }
  }

  &.history {
    // background: #705936;
    background: #2b2d4285;
    color: #fafafa;
  }

  &.book {
    background: #f98d8d85;
    color: #fafafa;
  }

  &.gadget {
    background: #aec1ed85;
    color: #312b2b;
  }

  &.not_available {
    background: #312b2b85;
    color: #fafafa;

    .image {
      padding: 3%;
      // background: transparent;
      img {
        height: 12vw;
      }
    }
  }

  &.opportunity {
    background: #f7b03085;
    color: #fafafa;
  }

  &.final {
    background: #e3e1c985;
    color: #312b2b;
    .image {
      padding: 2%;
      img {
        height: 12vw;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  section.presentation_block .container {
    flex-direction: column;
    justify-content: center;

    .image {
      padding: 45px;
      img {
        height: 18vw;
      }
    }

    p {
      width: 80%;
      font-size: 1.3em;
      margin-top: 10vh;
    }
    &.reversed {
      flex-direction: column;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 768px) {
  section.presentation_block .container {
    flex-direction: column;
    justify-content: center;
    max-width: 95%;
    width: 95%;
    p {
      width: 80%;
      font-size: 1.2em;
      margin-top: 10vh;
    }

    .image {
      padding: 30px;
      img {
        height: 20vw;
      }
    }

    &.reversed {
      max-width: 95%;
      width: 95%;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
