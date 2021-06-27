<template>
  <section class="presentation_block" :class="name">
    <div class="container" :class="{ reversed: even }">
      <div class="image">
        <img :src="img" />
      </div>

      <p>
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['name', 'text', 'img', 'even'],
  mounted() {
    let client_width = document.querySelector('.image').clientWidth;
    let images = document.querySelectorAll('.image');
    images.forEach(el => {
      el.setAttribute('height', client_width);
    });
  }
};
</script>

<style scoped lang="scss">
section.presentation_block {
  width: 100%;
  font-family: 'Comfortaa', sans-serif;

  .container {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.reversed {
      flex-direction: row-reverse;
    }

    p {
      width: 60%;
      font-weight: 400;
      font-size: 1.4em;
      line-height: 1.8em;
      text-align: justify;
    }

    .image {
      display: flex;
      background: #fafafa;
      border-radius: 50%;
      padding: 5%;
      justify-content: center;
      align-items: center;

      img {
        height: 12vw;
      }
    }
  }

  &.history {
    // background: #705936;
    background: #2b2d42;
    color: #fafafa;
  }

  &.book {
    background: #f98d8d;
    color: #fafafa;
  }

  &.gadget {
    background: #aec1ed;
    color: #312b2b;
  }

  &.not_available {
    background: #312b2b;
    color: #fafafa;

    .image {
      padding: 45px;
      img {
        height: 13vw;
      }
    }
  }

  &.opportunity {
    background: #f7b030;
    color: #fafafa;
  }

  &.final {
    background: #e3e1c9;
    color: #312b2b;
    .image {
      padding: 45px;
      img {
        height: 13vw;
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
