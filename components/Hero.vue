<template>
  <section class="home-hero__content">
    <v-row class="home-hero__content-text">
      <transition appear>
      <p class="text-sm-h4 title-copy">
        かんたん、糖質計算
      </p>
      </transition>
      <img class="sub-text" src="/moji.png" :width="imgWidth">
    </v-row>
  </section>
</template>

<script>
export default {
  computed: {
    imgWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
      }
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
.title-copy {
  position: absolute;
  background-color: rgb(186, 186, 186);
  color: white;
  padding-right: 15px;
  padding-left: 10px;
  left: 0;
  top: 45vh;
}

.sub-text {
  position: absolute;
  background-color: rgb(186, 186, 186);
  left: 0%;
  top: 52vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
}

.fade-first {
  animation: fadeIn 1s ease 1s;
}

.fade-second {
  animation: fadeIn 1s ease 1.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.home-hero__content {
  background: url("../static/salad2.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 60vh;

  &-text {
    color: 000;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
}

@media screen and (max-width: 601px) {
  .title-copy {
    top: 43vh;
  }
}
</style>
