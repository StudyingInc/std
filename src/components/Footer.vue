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
        <div class="mail-container">
          <div class="mail-address" @click="isEmailForm = !isEmailForm">
            StudyInc.Info@gmail.com
            <span class="mail-button">
              <img src="../assets/footer/click.svg" alt="#" />
            </span>
          </div>
        </div>
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

    <div
      class="mail-form-container"
      :class="{ active: isEmailForm }"
      v-body-scroll-lock="isEmailForm"
    >
      <div class="container-title item">Email Us</div>
      <div class="subject item">
        Topic
        <textarea
          v-model="mailFormSubject"
          type="text"
          placeholder="Subject"
        ></textarea>
      </div>
      <div class="content item">
        What are you interested in?
        <textarea
          v-model="mailFormContent"
          type="text"
          placeholder="Your question"
        >
        </textarea>
        <div class="btns item">
          <div class="copy-btn" v-clipboard:copy="email">
            Copy
          </div>
          <a
            class="send-btn"
            :href="
              'mailto:StudyInc.Info@gmail.com?subject=' +
                mailFormSubject +
                '&body=' +
                mailFormContent
            "
            >Send</a
          >
        </div>
      </div>
      <div class="close-btn item" @click="isEmailForm = !isEmailForm">
        <img src="../assets/footer/close-button.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import VueClipboard from "vue-clipboard2";
import Vue from "vue";
Vue.use(VueClipboard);

export default {
  name: "Footer",
  data() {
    return {
      isEmailForm: false,
      mailFormContent: "",
      mailFormSubject: "",
      email: "StudyInc.Info@gmail.com",
    };
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
      .mail-container {
        margin-bottom: 25px;
        font-size: 1.1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-bottom: 5px;
        .mail-address {
          cursor: pointer;
          position: relative;
          &:hover {
            &:after {
              width: 100%;
            }

            .mail-button {
              img {
                transition: height 0.2s cubic-bezier(0.37, 0, 0.63, 1);
                height: 40px;
              }
            }
          }

          &:after {
            content: "";
            background: #bbbbbb;
            width: 0;
            height: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: width 0.2s cubic-bezier(0.37, 0, 0.63, 1);
          }

          .mail-button {
            transition: all 0.2s cubic-bezier(0.37, 0, 0.63, 1);
            position: relative;
            width: 45px;
            height: 45px;

            img {
              position: absolute;
              top: -10px;
              left: 0;
              transition: height 0.2s cubic-bezier(0.37, 0, 0.63, 1);
              height: 45px;
            }
          }
        }
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

  .mail-form-container {
    color: var(--primary);
    font-weight: bolder;
    font-size: calc(4vw +10px);
    position: fixed;
    left: 30vw;
    top: 0;
    width: 40vw;
    height: var(--viewHeight);
    pointer-events: none;

    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .container-title {
      font-size: calc(0.5vw + 25px);
    }

    .subject {
      display: flex;
      flex-direction: column;
      font-size: calc(0.5vw + 15px);
      textarea {
        width: 100%;
        min-height: 45px;
        max-height: 90px;
        margin-top: 15px;
        font-size: 0.8em;
        padding: 5px 0 5px 10px;
        border: 2px solid #4e5179;
        border-radius: 10px;
        appearance: none;
        box-shadow: none;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      font-size: calc(0.5vw + 15px);
      height: 40%;

      textarea {
        width: 100%;
        max-height: 135px;
        min-height: 45px;
        font-size: 0.8em;
        padding: 5px 0 5px 10px;
        margin-top: 15px;
        border: 2px solid #4e5179;
        border-radius: 10px;
        box-shadow: none;
        appearance: none;
      }
    }
    .close-btn {
      margin: 0;
      img {
        width: calc(0.5vw + 35px);
      }
    }

    .btns {
      height: 50px;
      align-items: center;
      display: flex;
      justify-content: flex-end;
      font-size: 0.8em;
      // padding: 10px;
      column-gap: 20px;
      margin-top: 20px;
      line-height: normal;

      a:visited,
      a:hover,
      a:active,
      a:focus {
        text-decoration: none !important;
        outline: none !important;
      }

      .send-btn {
        color: var(--primary);
        cursor: pointer;
        position: relative;
        padding: 7px;
        border-radius: 10px;
        box-shadow: inset 0 0 0 1px #4b4e77;
        overflow: hidden;

        transition: all 0.45s ease;
        &:after {
          content: "";
          border-radius: 50%;
          background: #4b4e77;
          width: 200%;
          height: 200%;
          position: absolute;
          bottom: -200%;
          left: -200%;

          transition: all 0.45s ease;
          z-index: -1;
        }

        &:hover {
          color: #fff;
          &:after {
            bottom: -50%;
            left: -50%;
          }
        }
      }

      .copy-btn {
        position: relative;
        padding: 7px;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: inset 0 0 0 1px #4b4e77;
        overflow: hidden;

        transition: all 0.45s ease;
        &:after {
          content: "";
          border-radius: 50%;
          background: #4b4e77;
          width: 200%;
          height: 200%;
          position: absolute;
          bottom: -200%;
          left: -200%;

          transition: all 0.45s ease;
          z-index: -1;
        }

        &:hover {
          color: #fff;
          &:after {
            bottom: -50%;
            left: -50%;
          }
        }
      }
    }
    .item {
      transform: translateX(-10%);
      opacity: 0;
      margin-bottom: 30px;

      transition: opacity 0.3s ease, transform 0.3s ease;

      &.close-btn {
        position: absolute;
        right: 0;
        top: 5vw;
        cursor: pointer;
        transform: translateX(10%);
        margin-bottom: 0;
      }
    }
    &:before {
      position: fixed;
      content: "";
      background: #fff;
      width: 50vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    }
    &:after {
      position: fixed;
      content: "";
      background: #fff;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &:after {
      background: #ffffff63;
      transition-delay: 0.1s;
      z-index: -2;
    }
    &:before {
      transition-delay: 0s;
      z-index: -1;
    }

    &.active {
      pointer-events: all;

      .item {
        opacity: 1;
        transform: translateX(0%);
        transition: opacity 0.3s ease, transform 0.3s ease;
        @for $i from 0 through 4 {
          &:nth-child(#{$i}) {
            transition-delay: 0.5 * $i / 2 + 0.5 + s;
          }
        }
      }

      &:before {
        transform: translateX(50%);
      }
      &:after {
        transform: translateX(0%);
      }

      &:after {
        transition-delay: 0s;
      }
      &:before {
        transition-delay: 0.1s;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  #footer {
    .container {
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
        .mail-container {
          font-size: 1em;
          .mail-address {
            border-bottom: 1px solid #fff;
            &:after {
              display: none;
            }
            .mail-button {
              display: none;
            }
          }
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

    .mail-form-container {
      left: 20vw;
      top: 0;
      width: 60vw;

      &:before {
        width: 70vw;
      }

      &.active {
        &:before {
          transform: translateX(15vw);
        }
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
        .mail-container {
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

    .mail-form-container {
      left: 10vw;
      top: 0;
      width: 80vw;

      &:before {
        width: 100vw;
      }

      &.active {
        &:before {
          transform: translateX(0);
        }
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
        .mail-container {
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
