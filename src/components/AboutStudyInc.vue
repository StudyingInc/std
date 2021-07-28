<template>
  <div class="about-study" id="about-study">
    <!-- <figure class="circle"></figure> -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        class="wave"
        fill="#7f7eda"
        d="M0,96L40,128C80,160,160,224,240,213.3C320,203,400,117,480,117.3C560,117,640,203,720,202.7C800,203,880,117,960,101.3C1040,85,1120,139,1200,149.3C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>

      <path
        class="wave-mobile"
        fill="#7f7eda"
        d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,69.3C840,32,960,32,1080,48C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
    <section id="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-text">
            <div class="h1-wrapper">
              <img class="h1-icon" src="../assets/community.svg" />
              <h1>
                About Us
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
              <img class="h1-icon" src="../assets/aim.svg" />
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

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "MainPage",
  components: {},
  data() {
    return {};
  },
  mounted() {
    //about-wrapper animation
    const about_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-wrapper",
        start: "top center",
        end: "bottom bottom",
        markers: true,
        toggleActions: "play none none reverse",
      },
    });
    about_tl.fromTo(
      ".about-text",
      { autoAlpha: 0.01, x: "-10%" },
      { autoAlpha: 1, x: 0, duration: 0.5 },
      0
    );
    about_tl.fromTo(
      ".about-wrapper img",
      { autoAlpha: 0.01, y: "10%" },
      { autoAlpha: 1, y: 0, duration: 0.5 },
      0
    );

    //aims-wrapper animation
    const aims_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aims-wrapper",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    aims_tl.fromTo(
      ".aims-text",
      { autoAlpha: 0.01, x: "10%" },
      { autoAlpha: 1, x: 0, duration: 0.5 },
      0
    );
    aims_tl.fromTo(
      ".aims-wrapper img",
      { autoAlpha: 0.01, y: "10%" },
      { autoAlpha: 1, y: 0, duration: 0.5 },
      0
    );
  },
};
</script>

<style lang="scss" scoped>
.wave {
  display: block;
  filter: drop-shadow(0px 10px 5px rgb(0 0 0 / 0.2));
}

.wave-mobile {
  filter: drop-shadow(0px 20px 15px rgb(0 0 0 / 0.2));
  display: none;
}

.about-study {
  position: relative;
  z-index: 10;
  margin-top: -2px;
  background: url("../assets/bg/14.jpg") no-repeat;
  // background: url("../assets/bg/19.jpg") no-repeat;
  // background: url("../assets/bg/24.jpg") no-repeat;
  // background: url("../assets/bg/42.jpg") no-repeat;
  // background: url("../assets/bg/44.jpg") no-repeat;
  // background: url("../assets/bg/53.jpg") no-repeat;
  background-size: cover;
  // background-image: linear-gradient(155deg, #f68084 0%, #da6298 100%);
}
section {
  font-family: "Comfortaa", sans-serif;
  font-size: 0.9em;
  line-height: 2.2em;
  text-align: left;
  color: var(--primary);
  height: fit-content;

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .about-wrapper {
      margin-top: 10px;
      position: relative;
      height: 700px;
      padding: 0;
      border-radius: 1rem;

      .about-text {
        position: absolute;
        height: 50%;
        width: 50%;
        height: fit-content;
        left: 0;
        top: 0;

        z-index: 1;
        background: #dfdfdf99;
        backdrop-filter: blur(10px);
        box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.3);

        border-radius: 1em;
        padding: 0em;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .img {
        top: 5%;
        right: 0;
        z-index: 0;
        position: absolute;
        border-radius: 1em;
        box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.3);
        height: 80%;
      }
    }

    .aims-wrapper {
      position: relative;
      height: 700px;
      margin-bottom: 100px;

      .aims-text {
        position: absolute;
        height: fit-content;
        width: 52%;
        right: 5%;
        bottom: 5%;

        z-index: 1;
        background: #fafafa99;
        backdrop-filter: blur(10px);
        box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.3);
        border-radius: 1em;

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
        box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.3);
        height: 80%;
      }
    }

    .h1-wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
      width: 100%;
      padding: 10px 20px;
      border-radius: 1em 1em 0 0;
      border-bottom: 1px solid var(--primary);

      img.h1-icon {
        grid-area: "icon";
      }

      h1 {
        grid-area: "title";
        font-size: 1.7em;
        padding: 0;
        margin: 0;
      }
    }

    p {
      font-size: 1.2em;
      text-align: justify;
      padding: 15px 20px 0 20px;
    }
  }
}

@media screen and (max-width: 992px) {
  .about-study {
    padding-bottom: 60px;
    section {
      font-size: 1em;

      .container {
        position: initial;
        color: var(--primary);
        display: flex;
        flex-direction: column;
        align-items: center;

        .about-wrapper,
        .aims-wrapper {
          position: initial;
          display: block;
          height: fit-content;
          width: 90%;
          margin-top: 60px;

          .about-text,
          .aims-text {
            position: initial;
            height: fit-content;
            padding: 0;
            justify-content: flex-start;
            background: #fafafabb;
            box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.3);
            width: 100%;
            top: 0;
            left: 0;

            .h1-wrapper {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 3fr 1fr;
              grid-template-areas: "icon title .";
              border-bottom: none;
              // border-bottom: 1px solid var(--primary);
              padding: 5px;
              align-items: center;

              .h1-icon {
                padding: 3px 0 3px 15px;
                height: 90%;
                grid-area: icon;
              }

              h1 {
                margin: 0;
                font-size: 2em;
                border: none;
                grid-area: title;
                padding: 0;
                margin: 0;
              }
            }

            p {
              padding: 15px 20px 0 20px;
              text-align: justify;
            }
          }

          .aims-text .h1-wrapper {
            padding: 30px;
            position: relative;
            overflow: hidden;
            background: #fafafa33;
            text-shadow: 0 0 2px #fafafaaa;
            &:before {
              z-index: -3;
              display: block;
              content: "";
              position: absolute;
              top: -5px;
              left: 0;
              width: 130%;
              height: 150px;
              background-image: url("../assets/mountains1.jpg");
              background-size: cover;
              background-position: center 150px;
            }
          }

          .about-text .h1-wrapper {
            padding: 30px;
            position: relative;
            overflow: hidden;
            background: #fafafa33;

            &:before {
              z-index: -3;
              display: block;
              content: "";
              position: absolute;
              top: -5px;
              left: 0;
              width: 130%;
              height: 150px;
              background-image: url("../assets/service.jpg");
              background-size: cover;
              background-position: top center;
            }
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
  }
}

@media screen and (max-width: 768px) {
  .wave {
    display: none;
  }

  .wave-mobile {
    display: block;
  }

  .about-study {
    padding-bottom: 50px;
    section {
      font-size: 0.6em;
      .container {
        .about-wrapper,
        .aims-wrapper {
          position: initial;
          display: block;
          height: fit-content;
          width: 90%;
          margin-top: 50px;

          .about-text,
          .aims-text {
            .h1-wrapper {
              .h1-icon {
                padding: 3px 0 3px 5px;
                grid-area: icon;
                width: 100%;
              }

              h1 {
                margin: 0;
                font-size: 2em;
                border: none;
                grid-area: title;
                padding: 0;
                margin: 0;
              }
            }

            p {
              padding: 15px 20px 0 20px;
              text-align: justify;
              font-size: 1.4em;
            }
          }

          .aims-text .h1-wrapper {
            padding: 20px;
          }

          .about-text .h1-wrapper {
            padding: 20px;
          }
        }
      }
    }
  }
}
</style>
