<template>
  <div id="footer">
    <div class="container">
      <div class="slogan">
        <div class="title">Let's Study!</div>
        <div class="logo">
          <img src="../assets/footer/logo.svg" alt="#" />
        </div>
      </div>
      <div class="contacts">
        <div class="title">Get In Touch</div>
        <div class="subtitle">Text us anywhere, we reply everywhere</div>
        <div class="mail">StudyInc.Info@gmail.com</div>
        <div class="socials">
          <a
            class="inst"
            href="https://www.instagram.com/studyincservice/"
            target="_blank"
          >
            <img src="../assets/footer/instagram.svg" alt="#" />
          </a>
          <a
            class="fb"
            href="https://www.facebook.com/profile.php?id=100072817188677"
            target="_blank"
          >
            <img src="../assets/footer/facebook.svg" alt="#" />
          </a>
          <a class="wa">
            <img src="../assets/footer/whatsapp.svg" alt="#" />
          </a>
        </div>
      </div>
      <div class="nav">
        <div class="title">Explore</div>
        <div class="nav-item" @click="navChecker" data-link="about-study">
          About Us
        </div>
        <div class="nav-item" @click="navChecker" data-link="countries">
          Studying
        </div>
        <div class="nav-item" @click="navChecker" data-link="admission">
          Admission
        </div>
        <div class="nav-item" @click="navChecker" data-link="info">
          ISA
        </div>
      </div>
      <div class="copyright">© 2021 Studying Inc | Privacy & Cookies</div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Footer",
  data() {
    return {};
  },
  props: {
    isMobile: Boolean,
  },
  methods: {
    navChecker(e) {
      const duration = this.isMobile ? 0 : 0.5;
      gsap.to(window, {
        duration: duration,
        scrollTo: `#${e.target.dataset.link}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#footer {
  color: #f1f1f1;
  background: var(--primary);
  font-family: "Comfortaa", sans-serif;

  .container {
    font-weight: 300;
    padding: 120px 0 120px 0;
    display: grid;

    grid-template-columns: 1fr 2fr 1fr;
    column-gap: 10vw;
    // grid-template-rows: repeat(3, 1fr);
    .slogan {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title {
        // margin-top: -12px;
        margin-bottom: 25px;
        font-size: 1.8em;
      }
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        img {
          width: 150px;
        }
      }
    }
    .contacts {
      .title {
        font-size: 1.8em;
        margin-bottom: 25px;
      }
      .subtitle {
        font-size: 1.2em;
        margin-bottom: 25px;
      }
      .mail {
        margin-bottom: 25px;
        font-size: 1.1em;
      }
      .socials {
        display: flex;
        transition: all 0.2s cubic-bezier(0.37, 0, 0.63, 1);
        will-change: transform;
        &:hover {
          a {
            opacity: 0.6;
            transform: scale(0.9);
          }
          a {
            transition: all 0.2s cubic-bezier(0.37, 0, 0.63, 1);
            cursor: pointer;

            &:hover {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
        * {
          margin-right: 10px;
        }
        a {
          transition: all 0.2s cubic-bezier(0.37, 0, 0.63, 1);
        }
        img {
          height: 55px;
          pointer-events: none;
        }
      }
    }
    .nav {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 1.8em;
        margin-bottom: 25px;
      }
      .nav-item {
        font-size: 1.1em;
        margin-bottom: 15px;
        cursor: pointer;
        position: relative;
        width: fit-content;

        &:after {
          position: absolute;
          content: "";
          background: #f1f1f1;
          bottom: -2px;
          left: 0;
          height: 1px;
          width: 0;
          transition: width 0.2s cubic-bezier(0.65, 0, 0.35, 1);
        }

        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
    }

    position: relative;
    .copyright {
      font-size: 0.8em;
      position: absolute;
      bottom: 10px;
      left: 0;
    }
  }
}

@media screen and (max-width: 992px) {
  #footer .container {
    grid-template-columns: 1fr 1fr 0.7fr;
    column-gap: 7vw;

    .slogan {
      .title {
        font-size: 1.7em;
      }
      .logo {
        img {
          width: 140px;
        }
      }
    }

    .contacts {
      .title {
        font-size: 1.7em;
      }

      .subtitle {
        font-size: 1.1em;
      }
      .mail {
        font-size: 1em;
      }

      .socials {
        * {
          margin-right: 7px;
        }
        img {
          height: 45px;
        }
      }
    }
    .nav {
      .title {
        font-size: 1.7em;
      }
      .nav-item {
        font-size: 1em;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #footer {
    .container {
      padding: 80px 20px 80px 20px;
      display: flex;
      justify-content: space-between;

      .slogan {
        display: none;
      }
      .contacts {
        width: 62%;
        .title {
          font-size: 1.6em;
          margin-bottom: 25px;
        }
        .subtitle {
          font-size: 1em;
          margin-bottom: 25px;
        }
        .mail {
          margin-bottom: 25px;
          font-size: 0.9em;
        }
        .socials {
          img {
            margin: 0 5px 0 0;
            height: 40px;
          }
        }
      }
      .nav {
        width: 38%;
        .title {
          font-size: 1.6em;
        }
        .nav-item {
          font-size: 1em;
        }
      }

      .copyright {
        font-size: 0.8em;
        left: 20px;
        bottom: 10px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  #footer {
    .container {
      .contacts {
        .title {
          font-size: 1.4em;
          margin-bottom: 25px;
        }
        .subtitle {
          font-size: 0.9em;
          margin-bottom: 25px;
        }
        .mail {
          margin-bottom: 25px;
          font-size: 0.8em;
        }
        .socials {
          * {
            margin: 0 5px 0 0;
            height: 30px;
          }
        }
      }
      .nav {
        .title {
          font-size: 1.4em;
        }
        .nav-item {
          font-size: 0.9em;
        }
      }

      .copyright {
        font-size: 0.8em;
        bottom: 10px;
        left: 20px;
      }
    }
  }
}
</style>
