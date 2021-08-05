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
    gsap.utils.toArray(".presentation_block").forEach((section /*, i*/) => {
      gsap.from("#" + section.id + " .image", {
        scale: 0.3,
        autoAlpha: 0.001,
        scrollTrigger: {
          id: "image",
          trigger: section,
          start: "top 80%",
          end: "top center",
          scrub: 1,
          pinSpacing: false,
          // markers: true,
        },
      });

      gsap.from("#" + section.id + " p", {
        y: () => window.innerHeight * 0.2,
        autoAlpha: 0.001,
        scrollTrigger: {
          id: "p",
          trigger: section,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          pinSpacing: false,
          // markers: true,
        },
      });

      gsap.to("#" + section.id, {
        autoAlpha: 0.001,
        scrollTrigger: {
          id: section.id,
          trigger: section,
          start: "bottom 30%",
          end: "bottom top",
          scrub: 0.5,
          pinSpacing: false,
          // markers: true,
        },
      });
    });

    gsap.fromTo(
      ".presentation",
      {
        background: "#2b2d42",
      },
      {
        background: "#7f7eda",
        scrollTrigger: {
          trigger: ".presentation",
          start: () =>
            "+=" +
            (window.innerHeight / window.innerWidth) * window.innerHeight +
            " top",
          end: "bottom center",
          scrub: 1.5,
          pinSpacing: false,

          // markers: true,
        },
      },
    );

    gsap.fromTo(
      ".wave",
      {
        fill: "#2b2d42",
      },
      {
        fill: "#7f7eda",
        scrollTrigger: {
          trigger: ".presentation",
          start: () =>
            "+=" +
            (window.innerHeight / window.innerWidth) * window.innerHeight +
            " top",
          end: "bottom center",
          scrub: 1.5,
          pinSpacing: false,
        },
      },
    );

    gsap.fromTo(
      ".wave-mobile",
      {
        fill: "#2b2d42",
      },
      {
        fill: "#7f7eda",
        scrollTrigger: {
          trigger: ".presentation",
          start: () =>
            "+=" +
            (window.innerHeight / window.innerWidth) * window.innerHeight +
            " top",
          end: "bottom center",
          scrub: 1.5,
          pinSpacing: false,
        },
      },
    );

    gsap.from(".presentation", {
      autoAlpha: 0.001,
      scrollTrigger: {
        trigger: "#history",
        start: () => "-=" + window.innerHeight * 0.8 + " top",
        end: "center center",
        scrub: 0.7,
        pinSpacing: false,
        // markers: true,
        // once: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.presentation {
  display: flex;
  flex-direction: column;
  width: 100vw;

  section {
    position: relative;
    width: 100%;
    // margin: 30px 0;
    padding: 50px 0;

    &#about {
      font-family: "Comfortaa", sans-serif;
      font-size: 1.2em;
      height: auto;
      text-align: center;
      text-indent: 5%;
      color: #fafafa;
      // .container .about {
      //   background: #ffffffd8;
      //   border-radius: 1.5vh;
      //   color: #363636;
      //   padding: 25px 10px;
      //   line-height: 2em;
      // }
    }
  }
}
.disable_selection {
  user-select: none;
}

section.presentation_block {
  width: 100vw;
  font-family: "Comfortaa", sans-serif;

  .container {
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
      line-height: 1.8em;
      text-align: justify;
      color: #fafafa;
      // background: #fafafaec;
      // border-radius: 1.5vh;
      padding: 20px;

      // color: inverse(10%);
    }

    .image {
      display: flex;
      background: #fafafaec;
      border-radius: 50%;
      padding: 4%;
      justify-content: center;
      align-items: center;

      img {
        height: 7vw;
      }
    }
  }

  &.history {
    // background: #705936;
    margin-top: 50px;
    // background: #2b2d4285;
    // color: #fafafa;
  }

  &.book {
    // background: #f98d8d85;
    // color: #fafafa;
  }

  &.gadget {
    // background: #aec1ed85;
    // color: #fafafa;
  }

  &.not_available {
    // background: #312b2b85;
    // color: #fafafa;
    .image {
      padding: 3%;
      // background: transparent;
      img {
        height: 8vw;
      }
    }
  }

  &.opportunity {
    // background: #f7b03085;
    // color: #fafafa;
  }

  &.final {
    // background: #e3e1c985;
    padding-bottom: 10px;
    // color: #fafafa;
    // color: #312b2b;
    .image {
      padding: 2%;
      background: #fafafa;
      img {
        height: 10vw;
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
