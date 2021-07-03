<template>
  <section class="whatis">
    <div class="section-title mb-6">
      <p class="section-title__copy">
        <img alt="what is" src="/heading1.png">
      </p>
      <h2 class="h2 text-center">手軽に糖質計算</h2>
    </div>
    <v-row>
      <v-col>
        <v-card
          flat
          class="whatis-card"
        >
          <div class="whatis-text">
            <p class="body-1">カルシュガーとは、<br>選択した食材の糖質総量を計算する無料ツールです。</p>
          </div>
          <NuxtLink to="/calculate">
            <button class="button">糖質計算へ</button>
          </NuxtLink>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.whatis {
  margin-top: 8vh;
  box-sizing: border-box;
}

.section-title {
  text-align: center;
}

.section-title__copy {
  margin: 0 0 -5vw -35vw;
}

.section-title img {
  height: 10vw;
}

.whatis-card {
  padding: 0 0 0 8vw;
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

@media screen and (max-width: 601px) {
  .section-title {
    margin: -8vw 0 0 -6vw;
  }

  .section-title img {
    height: 24vw;
  }

  .whatis-card {
    padding: 0 4vw;
  }
}
</style>
