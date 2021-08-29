<template>
  <div class="about-study" id="about-study">
    <img src="../assets/blob1.png" class="bun bun1" />
    <img src="../assets/blob2.png" class="bun bun2" />
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
          <img
            srcset="
              @/assets/service_1024.jpg 1024w,
              @/assets/service_720.jpg   720w,
              @/assets/service_640.jpg   640w,
              @/assets/service_320.jpg   320w
            "
            sizes="
            (max-width: 480px) 320px,
            (max-width: 720px) 640px,
            (max-width: 1024px) 720px,
            1024px
            "
            style="object-fit:cover;"
            class="img about"
          />
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
          <img
            srcset="
              @/assets/global_1024.jpg 1024w,
              @/assets/global_720.jpg   720w,
              @/assets/global_640.jpg   640w,
              @/assets/global_320.jpg   320w
            "
            sizes="(max-width: 480px) 320px,
            (max-width: 720px) 640px,
            (max-width: 1024px) 720px,
            1024px"
            style="object-fit:cover;"
            class="img aims"
          />
        </div>
      </div>

      <!-- <svg
        id="wave"
        style="transform:rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 330"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(138, 133, 245, 1)" offset="0%"></stop>
            <stop stop-color="rgba(173, 93, 220, 0.84)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          class="wave-bottom"
          style="transform:translate(0, 0px); opacity:1"
          fill="url(#sw-gradient-0)"
          d="M0,99L48,104.5C96,110,192,121,288,143C384,165,480,198,576,209C672,220,768,209,864,176C960,143,1056,88,1152,66C1248,44,1344,55,1440,99C1536,143,1632,220,1728,242C1824,264,1920,231,2016,192.5C2112,154,2208,110,2304,82.5C2400,55,2496,44,2592,49.5C2688,55,2784,77,2880,77C2976,77,3072,55,3168,38.5C3264,22,3360,11,3456,22C3552,33,3648,66,3744,104.5C3840,143,3936,187,4032,192.5C4128,198,4224,165,4320,126.5C4416,88,4512,44,4608,38.5C4704,33,4800,66,4896,115.5C4992,165,5088,231,5184,242C5280,253,5376,209,5472,176C5568,143,5664,121,5760,104.5C5856,88,5952,77,6048,88C6144,99,6240,132,6336,154C6432,176,6528,187,6624,192.5C6720,198,6816,198,6864,198L6912,198L6912,330L6864,330C6816,330,6720,330,6624,330C6528,330,6432,330,6336,330C6240,330,6144,330,6048,330C5952,330,5856,330,5760,330C5664,330,5568,330,5472,330C5376,330,5280,330,5184,330C5088,330,4992,330,4896,330C4800,330,4704,330,4608,330C4512,330,4416,330,4320,330C4224,330,4128,330,4032,330C3936,330,3840,330,3744,330C3648,330,3552,330,3456,330C3360,330,3264,330,3168,330C3072,330,2976,330,2880,330C2784,330,2688,330,2592,330C2496,330,2400,330,2304,330C2208,330,2112,330,2016,330C1920,330,1824,330,1728,330C1632,330,1536,330,1440,330C1344,330,1248,330,1152,330C1056,330,960,330,864,330C768,330,672,330,576,330C480,330,384,330,288,330C192,330,96,330,48,330L0,330Z"
        ></path>
      </svg> -->
      <svg
        id="wave"
        style="transform:rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 190"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(138, 133, 245, 1)" offset="0%"></stop>
            <stop stop-color="rgba(173, 93, 220, 0.84)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          class="wave-bottom"
          style="transform:translate(0, 0px); opacity:1"
          fill="url(#sw-gradient-0)"
          d="M0,76L80,85.5C160,95,320,114,480,110.8C640,108,800,82,960,60.2C1120,38,1280,19,1440,38C1600,57,1760,114,1920,123.5C2080,133,2240,95,2400,66.5C2560,38,2720,19,2880,34.8C3040,51,3200,101,3360,120.3C3520,139,3680,127,3840,110.8C4000,95,4160,76,4320,76C4480,76,4640,95,4800,98.2C4960,101,5120,89,5280,91.8C5440,95,5600,114,5760,114C5920,114,6080,95,6240,76C6400,57,6560,38,6720,44.3C6880,51,7040,82,7200,85.5C7360,89,7520,63,7680,72.8C7840,82,8000,127,8160,129.8C8320,133,8480,95,8640,76C8800,57,8960,57,9120,76C9280,95,9440,133,9600,136.2C9760,139,9920,108,10080,79.2C10240,51,10400,25,10560,28.5C10720,32,10880,63,11040,82.3C11200,101,11360,108,11440,110.8L11520,114L11520,190L11440,190C11360,190,11200,190,11040,190C10880,190,10720,190,10560,190C10400,190,10240,190,10080,190C9920,190,9760,190,9600,190C9440,190,9280,190,9120,190C8960,190,8800,190,8640,190C8480,190,8320,190,8160,190C8000,190,7840,190,7680,190C7520,190,7360,190,7200,190C7040,190,6880,190,6720,190C6560,190,6400,190,6240,190C6080,190,5920,190,5760,190C5600,190,5440,190,5280,190C5120,190,4960,190,4800,190C4640,190,4480,190,4320,190C4160,190,4000,190,3840,190C3680,190,3520,190,3360,190C3200,190,3040,190,2880,190C2720,190,2560,190,2400,190C2240,190,2080,190,1920,190C1760,190,1600,190,1440,190C1280,190,1120,190,960,190C800,190,640,190,480,190C320,190,160,190,80,190L0,190Z"
        ></path>
      </svg>
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
        // markers: true,
        // toggleActions: "play none none reverse",
      },
    });
    about_tl.fromTo(
      ".about-text",
      { opacity: 0.01, x: "-10%" },
      { opacity: 1, x: 0, duration: 0.5 },
      0
    );
    about_tl.fromTo(
      ".about-wrapper img",
      { opacity: 0.01, y: "10%" },
      { opacity: 1, y: 0, duration: 0.5 },
      0
    );

    //aims-wrapper animation
    const aims_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aims-wrapper",
        start: "top center",
        end: "bottom bottom",
        // toggleActions: "play none none reverse",
      },
    });
    aims_tl.fromTo(
      ".aims-text",
      { opacity: 0.01, x: "10%" },
      { opacity: 1, x: 0, duration: 0.5 },
      0
    );
    aims_tl.fromTo(
      ".aims-wrapper img",
      { opacity: 0.01, y: "10%" },
      { opacity: 1, y: 0, duration: 0.5 },
      0
    );

    gsap.from(".bun1", {
      opacity: 0.001,
      scale: 0.7,
      duration: 0.7,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".about-wrapper",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".bun2", {
      opacity: 0.001,
      scale: 0.7,
      duration: 0.7,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".aims-wrapper",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    const bun1_tl = gsap.timeline({
      repeat: -1,
    });

    bun1_tl.to(".bun1", {
      y: "-=50px",
      duration: 4,
      ease: "power1.inOut",
    });
    bun1_tl.to(".bun1", {
      y: "+=50px",
      duration: 4,
      ease: "power1.inOut",
    });

    const bun2_tl = gsap.timeline({ repeat: -1 });

    bun2_tl.to(".bun2", {
      y: "-=60px",
      duration: 5,
      ease: "power1.inOut",
    });
    bun2_tl.to(".bun2", {
      y: "+=60px",
      duration: 5,
      ease: "power1.inOut",
    });
  },
};
</script>

<style lang="scss" scoped>
.bun {
  position: absolute;
  &.bun1 {
    top: 500px;
    width: 27%;
    left: 50px;
  }
  &.bun2 {
    top: 1200px;
    width: 27%;
    right: 50px;
  }
}

.wave {
  display: block;
  filter: drop-shadow(0px 10px 5px rgb(0 0 0 / 0.2));
}

.wave-bottom {
  display: block;
  filter: drop-shadow(0px -5px 4px rgb(0 0 0 / 0.2));
}

.wave-mobile {
  filter: drop-shadow(0px 20px 15px rgb(0 0 0 / 0.2));
  display: none;
}

.about-study {
  position: relative;
  z-index: -1;
  // background: url("../assets/bg/19.jpg") no-repeat;
  // background: url("../assets/bg/24.jpg") no-repeat;
  // background: url("../assets/bg/42.jpg") no-repeat;
  // background: url("../assets/bg/44.jpg") no-repeat;
  // background: url("../assets/bg/53.jpg") no-repeat;
  // background-image: linear-gradient(155deg, #f68084 0%, #da6298 100%);
  &::before {
    background: url("../assets/14.jpg") no-repeat top center;
    background-size: cover;
    content: " ";
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    will-change: transform;
    z-index: -2;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
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
      border-radius: 1.5rem;

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

        border-radius: 1.7em;
        padding: 0.2em;

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
        border-radius: 1.7em;
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
        border-radius: 1.7em;
        padding: 0.2em;

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
        border-radius: 1.7em;
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

@media screen and (max-width: 1700px) {
  .bun {
    &.bun1 {
      left: -50px;
    }
    &.bun2 {
      right: -50px;
    }
  }
}

@media screen and (max-width: 1250px) {
  .bun {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .about-study {
    // padding-bottom: 60px;
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
          display: table;
          height: fit-content;
          width: 90%;
          margin-top: 60px;

          .about-text,
          .aims-text {
            position: initial;
            // height: fit-content;
            padding: 0;
            justify-content: flex-start;
            background: #fafafabb;
            box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.3);
            width: 100%;
            top: 0;
            left: 0;
            border-radius: 1em;

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
                height: 120%;
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
              width: 100%;
              height: 150px;
              background-image: url("../assets/mountains1.jpg");
              background-size: cover;
              background-position: center 170px;
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
              background-image: url("../assets/service_720.jpg");
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
    // padding-bottom: 50px;
    section {
      font-size: 0.6em;
      .container {
        .about-wrapper,
        .aims-wrapper {
          position: initial;
          // display: block;
          // height: fit-content;
          width: 90%;
          margin-top: 50px;

          .about-text,
          .aims-text {
            .h1-wrapper {
              .h1-icon {
                padding: 3px 0 3px 5px;
                grid-area: icon;
                height: auto;
                width: 70%;
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
            &:before {
              background-position: center 120px;
            }
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
