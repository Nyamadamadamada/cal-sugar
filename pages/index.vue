<template>
  <div class="index">
    <Hero />
    <What />
    <Howto />
    <Recommend />
    <v-card class="start" flat>
      <p class="subtitle-1">まずは1品計算してみましょう</p>
      <NuxtLink to="/calculate">
        <button class="button">糖質計算へ</button>
      </NuxtLink>
    </v-card>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import What from '~/components/What.vue'
import Howto from '~/components/Howto.vue'
import Recommend from '~/components/Recommend.vue'

export default {
  components: {
    Hero,
    What,
    Howto,
    Recommend
  }
}
</script>

<style lang="scss" scoped>
.sub-title {
  position: absolute;
  background-color: rgb(186, 186, 186);
  color: white;
  line-height: 45px;
  padding: 6px;
  top: 44%;
}

.sub-text {
  position: absolute;
  background-color: rgb(186, 186, 186);
  left: 0%;
  top: 53%;
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

.start {
  margin: 10vh 0;
  text-align: center;
}

button {
  background: #fc563f;
  color: #fff;
  border: none;
  position: relative;
  font-size: 2.5vw;
  font-weight: bold;
  padding: 1.5vw 6vw;
  cursor: pointer;
  transition: 0.3s ease all;
  outline: none;
}

button:hover {
  background: #fff;
  color: #fc563f;
}

button::before,
button::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #fc563f;
  transition: 400ms ease all;
}

button::after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}

button:hover::before,
button:hover::after {
  width: 100%;
  transition: 0.5s ease all;
}

</style>
