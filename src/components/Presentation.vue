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
          toggleActions: "play none none reverse",
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
          toggleActions: "play none none reverse",
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
      { background: "#2b2d42" },
      {
        background: "#6b69d3",
        duration: 1,
        scrollTrigger: {
          trigger: ".presentation",
          // start: () =>
          //   "+=" +
          //   (window.innerHeight / window.innerWidth) * window.innerHeight +
          //   " top",
          start: "center center",
          end: "bottom center",
          // scrub: 1.5,
          pinSpacing: false,
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".wave",
      { background: "#2b2d42" },
      {
        fill: "#6b69d3",
        duration: 1,
        scrollTrigger: {
          trigger: ".presentation",
          // start: () =>
          //   "+=" +
          //   (window.innerHeight / window.innerWidth) * window.innerHeight +
          //   " top",
          start: "center center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          // scrub: 1.5,
          pinSpacing: false,
        },
      }
    );
    gsap.fromTo(
      ".wave-mobile",
      { background: "#2b2d42" },
      {
        fill: "#6b69d3",
        duration: 1,
        scrollTrigger: {
          trigger: ".presentation",
          // start: () =>
          //   "+=" +
          //   (window.innerHeight / window.innerWidth) * window.innerHeight +
          //   " top",
          start: "center center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          // scrub: 1.5,
          pinSpacing: false,
        },
      }
    );
    // gsap.from(".presentation", {
    //   autoAlpha: 0.001,
    //   scrollTrigger: {
    //     trigger: "#history",
    //     start: () => "-=" + window.innerHeight * 0.8 + " top",
    //     end: "center center",
    //     scrub: 0.7,
    //     pinSpacing: false,
    //     // markers: true,
    //     // once: true,
    //   },
    // });
  },
};
</script>

<style lang="scss" scoped>
.presentation {
  font-family: "Comfortaa";
  z-index: 1;

  background: #2b2d42;

  color: #fafafa;
  padding-top: 80px;
  .presentation_block {
    padding: 0 0 50px 0;
    .container {
      display: grid;
      grid-template-areas: "im text";
      grid-template-columns: 20% 65%;
      column-gap: 15%;

      .image {
        grid-area: im;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 0;

        img {
          width: 80%;
        }
      }

      p {
        grid-area: text;
        display: flex;
        align-items: center;

        // vertical-align: middle;
        margin: 0;
      }

      &.reversed {
        grid-template-areas: "text im";
        grid-template-columns: 65% 20%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .presentation {
    padding-top: 50px;
    font-size: 0.85em;
    .presentation_block {
      padding: 0 0 70px 0;
      .container {
        display: grid;
        grid-template-areas: "im text";
        grid-template-columns: 25% 70%;
        column-gap: 5%;

        .image img {
          width: 90%;
        }

        &.reversed {
          grid-template-columns: 70% 25%;
        }
      }
    }
  }
}
</style>
