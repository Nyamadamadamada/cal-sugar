<template>
  <section class="howto">
    <div class="section-title mb-6">
      <p class="section-title__copy">
        <img alt="how to" src="/heading2.png">
      </p>
      <h2 class="h2 text-center">カルシュガーの使い方</h2>
    </div>
    <v-row
      no-gutters
      justify="center"
      class="step"
    >
      <v-col
        v-for="step in steps"
        :key="step.step"
        class="step-item"
        cols="12"
        sm="3"
      >
        <v-card
          flat
          class="step-card"
        >
          <div class="step-img">
            <span class="rounded-circle icon">{{ step.step }}</span>
            <img alt="カルシュガーの使い方" :src="step.path">
          </div>
          <div class="step-inner">
            <h3 class="h3 mb-6">
              {{ step.title }}
            </h3>
            <p class="body-1 ma-0" v-html="step.description"></p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    steps: [
      {
        step: 1,
        title: '食材を選択',
        description: '料理に含まれる食材を選択してください。カテゴリから探すこともできます。',
        path: '/step1.png'
      },
      {
        step: 2,
        title: '数量を入力',
        description: '1つの食材に対して、何グラム使用したか入力してください。',
        path: '/step2.png'
      },
      {
        step: 3,
        title: '糖質を確認',
        description: '糖質の総量が表示されます。<br>糖質制限・栄養管理の目安としてお使いください。',
        path: '/step3.png'
      }
    ]
  })

}
</script>

<style scoped>
.howto {
  margin-top: 2vh;
  box-sizing: border-box;
  padding: 2vw 0;
  background: #f9f6f3;
}

.section-title {
  text-align: center;
}

.section-title__copy {
  margin: 0 0 -4vw -30vw;
}

.section-title img {
  height: 10vw;
}

.step {
  height: 100%;
}

.step-item {
  position: relative;
  display: inline-block;
  width: 30%;
  margin-left: 4.9%;
}

.step-item:first-of-type {
  margin-left: 0;
}

.step-card {
  padding: 1vw;
}

.step-img {
  padding: 3vw 0 1vw;
}

.step-img > img {
  width: 100%;
  height: auto;
}

.icon {
  box-sizing: border-box;
  position: absolute;
  top: -1vh;
  left: 0;
  z-index: 2;
  width: 5vw;
  height: 5vw;
  color: #fff;
  font-size: 3.8vw;
  line-height: 5vw;
  text-align: center;
  background: #3e4a68;
}

@media screen and (max-width: 601px) {
  .section-title {
    margin: -3vw 0 0 -6vw;
  }

  .section-title img {
    height: 24vw;
  }

  .step {
    margin: 1vh 6vw;
  }

  .icon {
    width: 13vw;
    height: 13vw;
    font-size: 8vw;
    line-height: 13vw;
  }

  .step-img {
    padding: 0 2vw 2vw;
  }

  .step-inner {
    padding: 0 2vw 0;
  }

  .step-item {
    width: 100%;
    margin-bottom: 20px;
    margin-left: 0;
  }
}
</style>
