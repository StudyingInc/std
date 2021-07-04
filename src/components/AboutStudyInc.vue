<template>
  <div class="about-study" id="about-study">
    <section id="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-text">
            <div class="h1-wrapper">
              <h1>
                About Service
              </h1>
            </div>
            <p>
              Our service is an encyclopedia of higher education, a catalog of
              opportunities that open up to applicants from any country. This is
              where you can decide where you want to go and where you can
              enroll. Here you will find what is missing in schools. Here you
              can ask for help when the issue of admission is most acute
            </p>
          </div>
          <img src="@/assets/service.jpg" alt="" class="img about" />
        </div>
      </div>
    </section>
    <section id="aims">
      <div class="container">
        <div class="aims-wrapper">
          <div class="aims-text">
            <div class="h1-wrapper">
              <h1 class="aims">
                Our Aims
              </h1>
            </div>
            <p>
              We want to make university admission not just an affordable
              opportunity, but a subject for discussion and reflection on a
              global level. We want to make it clear that, taking into account
              all the possibilities of any person, they will be able to enter
              the best educational institutions if they start studying their
              admission in advance. We want to make education fashionable and
              university admission painless
            </p>
          </div>
          <img src="@/assets/global.jpg" alt="" class="img aims" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import scrollTo from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(scrollTo);

export default {
  name: "MainPage",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // gsap.to(window, { duration: 1, scrollTo: "#history" });

    // ScrollTrigger.create({
    //   trigger: ".about-study",
    //   start: "20% bottom",
    //   end: () => `+=${window.innerHeight}`,
    //   pin: ".presentation",
    //   // markers: true,
    //   pinSpacing: false,
    // });

    gsap.from("#about", {
      // scale: 0.7,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".about-study",
        start: "20% bottom",
        end: () => `+=${window.innerHeight * 0.6}`,
        pin: ".presentation",
        markers: true,
        scrub: 0.5,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      },
    });

    //about-wrapper animation
    const about_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-wrapper",
        start: "-30% center",
        end: "bottom bottom",
        // markers: true,
        // scrub: true,
        toggleActions: "play none none reverse",
      },
    });
    about_tl.fromTo(
      ".about-text",
      { x: "-10%", opacity: 0 },
      { opacity: 1, x: 0, duration: 0.7 }
    );
    about_tl.fromTo(
      ".about-wrapper img",
      { y: "10%", opacity: 0 },
      { opacity: 1, y: 0, duration: 0.7 },
      0
    );

    //aims-wrapper animation
    const aims_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aims-wrapper",
        start: "top center",
        end: "bottom bottom",
        // markers: true,
        // scrub: true,
        toggleActions: "play none none reverse",
      },
    });
    aims_tl.fromTo(
      ".aims-text",
      { x: "10%", opacity: 0 },
      { opacity: 1, x: 0, duration: 0.7 }
    );
    aims_tl.fromTo(
      ".aims-wrapper img",
      { y: "10%", opacity: 0 },
      { opacity: 1, y: 0, duration: 0.7 },
      0
    );
  },
};
</script>

<style lang="scss" scoped>
.about-study {
  // transform: scale(0.8);
  // scale: 0.8;
  position: relative;
  z-index: 10;
  // background: #f68084;
  background-image: url("../assets/mesh4.jpg");
  background-size: cover;
  box-shadow: -5px -5px 10px #3a3a3a3f;
}
section {
  font-family: "Comfortaa", sans-serif;
  font-size: 0.9em;
  line-height: 2.2em;
  text-align: left;
  color: #fafafa;

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .about-wrapper {
      margin-top: 150px;

      position: relative;
      height: 700px;
      .about-text {
        opacity: 0;
        position: absolute;
        height: 50%;
        width: 50%;
        left: 0;
        top: 0;

        z-index: 1;
        background: var(--primary);
        box-shadow: -5px 5px 10px #3d3d3da8;
        border-radius: 1em;
        padding: 2em;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
      }
      .img {
        opacity: 0;
        top: 5%;
        right: 0;
        z-index: 0;
        position: absolute;
        border-radius: 1em;
        box-shadow: -5px 5px 10px #5f5f5fa8;
        height: 80%;
      }
    }

    .aims-wrapper {
      position: relative;
      height: 700px;
      margin-bottom: 100px;
      .aims-text {
        position: absolute;
        height: 55%;
        width: 52%;
        right: 5%;
        bottom: 5%;
        opacity: 0;

        z-index: 1;
        background: var(--primary);
        box-shadow: -5px 5px 10px #3d3d3da8;
        border-radius: 1em;
        padding: 2em;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
      }
      .img {
        top: 5%;
        left: 0;
        z-index: 0;
        position: absolute;
        border-radius: 1em;
        box-shadow: -5px 5px 10px #5f5f5fa8;
        height: 80%;
        opacity: 0;
      }
    }

    .h1-wrapper {
      width: 80%;
      margin: 5px 0;
      h1 {
        font-size: 2em;
        // text-decoration: underline;
        padding: 5px;
        border-bottom: 1px solid #fafafa;
      }
    }

    p {
      font-size: 1.2em;
    }
  }
}

@media screen and (max-width: 992px) {
  .about-study {
    section {
      font-size: 0.8em;
      margin-top: 0;
      .container {
        .about-wrapper {
          height: 50vh;
          .about-text {
            background: none;
            box-shadow: none;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .img {
            display: none;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
        .aims-wrapper {
          height: 50vh;
          .aims-text {
            background: none;
            box-shadow: none;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .img {
            display: none;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
      }
    }
    // }
  }
}

@media screen and (max-width: 768px) {
}
</style>
