<template>
  <section class="recommend">
    <div class="section-title mb-6">
      <p class="section-title__copy">
        <img alt="recommend to use" src="/heading3.png">
      </p>
      <h2 class="h2 text-center">カルシュガーのおすすめ用途</h2>
    </div>
    <v-row class="flex-column">
      <v-col
        v-for="recommend in recommends"
        :key="recommend.title"
        class="recommend-item"
      >
        <div class="recommend-img">
          <img alt="カルシュガーのおすすめ用途" :src="recommend.path">
        </div>
        <div class="recommend-inner">
          <h3 class="h3 mb-4">
            <span>#</span>{{ recommend.title }}
          </h3>
          <p class="body-1 ma-0" v-html="recommend.description"></p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    recommends: [
      {
        title: '食事の記録',
        description: 'たとえば日々の食事の栄養管理に。',
        path: '/recommend1.png'
      },
      {
        title: '正しい糖質制限',
        description: '合計値が適正糖質になると表示が変わります。<br>極端な糖質制限ではなく、適正糖質を摂取しましょう。',
        path: '/recommend2.png'
      },
      {
        title: 'レシピ作成',
        description: 'レシピを作る時、手軽に糖質を計算することができます。<br>なお本サイトの計算結果は非営利目的・商業目的にかかわらず無料でお使いいただけます。',
        path: '/recommend3.png'
      }
    ]
  })

}
</script>

<style scoped>
.recommend {
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

.recommend-item {
  width: 100%;
  margin: 0;
  zoom: 1;
}

.recommend-img {
  padding: 3vw 0 1vw;
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

.recommend-img img {
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  vertical-align: top;
}

.recommend-inner {
  width: 50%;
  margin: 0;
  padding: 0 0 0 8vw;
}

.recommend-inner > h3 {
  margin: 3vw 0 0;
}

.recommend-inner span {
  margin: 0 0.3vw 0 0;
  color: #fc563f;
  font-size: 2.4vw;
}

.recommend-inner > p {
  font-size: 1.6vw;
}

.recommend-item:nth-child(odd) .recommend-img {
  float: right;
}

.recommend-item:nth-child(2n) > .recommend-img {
  float: left;
}

.recommend-item:nth-child(2n) > .recommend-inner {
  float: right;
  padding: 0 0 0 1vw;
}

.recommend-img > img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 601px) {
  .section-title {
    margin: -8vw 0 0 -6vw;
  }

  .section-title img {
    height: 24vw;
  }

  .recommend-img {
    width: 100%;
  }

  .recommend-inner {
    float: none;
    padding: 0 8vw;
    width: 100%;
  }

  .recommend-item:nth-child(2n) > .recommend-inner {
    float: none;
    padding: 0 8vw;
  }

  .recommend-inner span {
    font-size: 3.8vw;
  }
}
</style>
