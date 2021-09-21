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
          Unfortunately, studying is not available for a lot of people nowadays.
          Our aim is to make it affordable for everyone
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
          The main problem of admission today is a lack of understanding of how
          and where you can enroll
        </p>
      </div>
    </section>

    <section class="presentation_block pb disable_selection final" id="final">
      <div class="container reversed">
        <div class="image">
          <img src="@/assets/presentation/final.svg" />
        </div>

        <p>
          If people enroll to the university, they have to be prepared for
          everything they will meet inside. That’s is why we are opening
          Study.Inc
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
  props: {
    isMobile: Boolean,
  },
  mounted() {
    setTimeout(() => {
      if (!this.isMobile) {
        gsap.utils.toArray(".presentation_block").forEach((section, index) => {
          const el_tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          });
          if (index % 2 == 0) {
            el_tl.from(
              section.querySelector(".image"),
              {
                autoAlpha: 0,
                scale: 0.6,
                duration: 0.7,
                ease: "back.out(2)",
              },
              0
            );
            el_tl.from(
              section.querySelector("p"),
              {
                autoAlpha: 0,
                x: 100,
                duration: 0.7,
                ease: "power1.out",
              },
              0
            );
          } else {
            el_tl.from(
              section.querySelector(".image"),
              {
                autoAlpha: 0,
                scale: 0.6,
                duration: 0.7,
                ease: "back.out(2)",
              },
              0
            );
            el_tl.from(
              section.querySelector("p"),
              {
                autoAlpha: 0,
                x: -100,
                duration: 0.7,
                ease: "power1.out",
              },
              0
            );
          }
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
              toggleActions: "play none none reverse",
              // markers: true,
            },
          }
        );
        gsap.fromTo(
          ".wave",
          { fill: "#2b2d42" },
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
              // markers: true,
              // scrub: 1.5,
            },
          }
        );
        gsap.fromTo(
          ".wave-mobile",
          { fill: "#2b2d42" },
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
              // markers: true,
              // scrub: 1.5,
            },
          }
        );
      } else {
        gsap.utils.toArray(".presentation_block").forEach((section, index) => {
          const el_tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          });
          if (index % 2 == 0) {
            el_tl.from(
              section,
              {
                autoAlpha: 0,
                x: 100,
                duration: 0.7,
                ease: "power1.out",
              },
              0
            );
          } else {
            el_tl.from(
              section,
              {
                autoAlpha: 0,
                x: -100,
                duration: 0.7,
                ease: "power1.out",
              },
              0
            );
          }
        });
      }
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.presentation {
  font-family: "Comfortaa";
  // z-index: 1;

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
        // z-index: 0;

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
