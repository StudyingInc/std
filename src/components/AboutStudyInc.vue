<template>
  <div class="about-study">
    <section id="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-text">
            <h1>
              About Service
            </h1>
            <p>
              Our service is an encyclopedia of higher education, a catalog of
              opportunities that open up to applicants from any country. This is
              where you can decide where you want to go and where you can
              enroll. Here you will find what is missing in schools. Here you
              can ask for help when the issue of admission is most acute.
            </p>
          </div>
          <img src="@/assets/service.jpg" alt="" class="img" />
        </div>
      </div>
    </section>
    <section id="aims">
      <div class="container">
        <div class="aims-wrapper">
          <div class="aims-text">
            <h1 class="aims">
              Our Aims
            </h1>
            <p>
              We want to make university admission not just an affordable
              opportunity, but a subject for discussion and reflection on a
              global level. We want to make it clear that, taking into account
              all the possibilities of any person, they will be able to enter
              the best educational institutions if they start studying their
              admission in advance. We want to make education fashionable and
              university admission painless.
            </p>
          </div>
          <img src="@/assets/global.jpg" alt="" class="img" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  font-family: "Comfortaa", sans-serif;
  font-size: 0.9em;
  line-height: 2.2em;
  text-align: left;
  color: #fafafa;
  &#about {
    margin-top: 150px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .about-wrapper {
      position: relative;
      height: 700px;
      .about-text {
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
      .aims-text {
        position: absolute;
        height: 55%;
        width: 52%;
        right: 5%;
        bottom: 5%;

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
      }
    }

    h1 {
      font-size: 2em;
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
      &#about {
        margin-top: 50px;
      }
      &#aims {
        margin-top: 20px;
      }
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
