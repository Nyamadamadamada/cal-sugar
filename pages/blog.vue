<template>
  <v-row class="blog">
    <v-col>
      <h1 class="text-center">BLOG</h1>
      <p>本サイトで使用しているNUXTについてやこのサイトを作成した経緯など備忘録として記載します。<br>
        NUXTを採用しようかどうか考えてる人に参考になればと思います。</p>
      <v-list
        flat
        class="mx-auto mokuji"
        max-width="600"
      >
        <span>目次</span>
        <v-list-item-group
          v-model="model"
          color="indigo"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-content class="mokuji-item">
              <a :href="item.anchor">
              <v-list-item-title
                v-text="item.text"
              ></v-list-item-title>
              </a>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <section id="nuxt">
        <h3>NUXTJSとは</h3>
        <p>vue.jsのフレームワークです。vueの十八番であるSPAはもちろん<span class="pink_line">サーバーサイドレンダリング(SSR)にも対応しています。</span>vueを一度使ったことがある方はNUXTJSを使用するとその便利さに驚くと思います!</p>
        <p class="font-weight-bold">NUXT便利ポイント</p>
        <ul class="useful">
          <li>・ルート定義不要</li>
          <li>  ファイルを追加したら自動でルーティングしてくれます！</li>
          <li>・サーバーサイトレンダリング（SSR）対応</li>
          <li>  速度改善、SEO対策にもなる</li>
          <li>・モジュールが豊富</li>
          <li>  @nuxt/contentモジュールが便利！おすすめ！！JSON、YAML や CSV ファイルを読み込んでくれます</li>
        </ul>
      </section>
      <section id="technology">
        <h3>カルシュガーで使った技術</h3>
        <ul>
          <li>フロントエンド：NUXTJS、VUEX、Vuetify</li>
          <li>デプロイ：github、Netlify</li>
        </ul>
        <img src="/graph.png">
        <p>個人開発で普段使わない技術を多用しない方がいいと聞いたことがあるので、NUXTで構築、VUEXでデータ管理、見た目はVuetifyといったシンプルな構成です。</p>
        <p>デプロイについて、今回Netifyを採用しました。実は初めはfirebaseを使うつもりだったのですが、設定を間違えて『有料にしてくれないとデプロイできません^^』というエラーがでたため断念。firebase同様、基本無料でサーバーを貸してくれ、github更新に合わせて自動的にデプロイしてくるNetifyを使いました。</p>
      </section>
      <section id="background">
        <h3>本サイト作成の経緯</h3>
        <p>作者自身糖質制限をしており、どの食材にどれくらいの糖質が入っているか調べられるツールがあるといいなと思い作成しました。<br>NUXTJSを採用した理由は以前vueのフレームワークを使ったみたかったのとvueの勉強会に参加した際に勧められた影響です。</p>
      </section>
      <section id="impressions">
        <h3>感想・反省点</h3>
        <p>食材ごとの糖質合計を計算する、という目標が達成できたことはよかったです。見栄えに関してもVutifyを使っているおかげでそれっぽくなっていると思います。（そう思いたい。）NUXTについて、ほぼ独学で作っていますが公式のドキュメントが充実しているおかげで、なんとか完成にまでこぎつけました。</p>
        <p>反省点を挙げるとキリがないのですが、最大の問題点は<span class="pink_line">カルシュガーを利用してくれる人を想像できない</span>ことです。<br>
          作成当初は「糖質計算！超画期的サービスを思いついてしまった・・・！！」と思っていたのですが、リリース直前に<br>
          ・操作性があまりよくない<br>
          ・他に似たようなサービスがある<br>
          ・そもそもだれがこのサービスを求めているのかわからない<br>
          ということに気づいてしまいました。。。<br>
          せっかくなので作ったのでデプロイしましたが、このサービスを使う人は私の知り合いくらいでしょう。
        </p>
        <p>というわけで、次回作はだれがこのサービスを使うのか？その人にどんなメリットがあるのか？など利用者に寄り添ったサービスを作りたいと思います。<br>
          どんな技術を使っていようが、利用者目線では見えるのはコンテンツだけですからね！</p><br>
        <h4>終わりに</h4>
        <p>長々とお読みいただきありがとうございます！<br>
          新しい技術を学ぶのは楽しいですが、サービスは常にユーザー視点で考えなければならない、ということに気がついたのが今回の一番の学びだ思っています。<br>
          WEBサービスはまだまだたくさん作っていきたいのでこれからも精進していきます！</p>
      </section>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: 'NUXTJSとは', anchor: '#nuxt' },
      { text: 'カルシュガーでつかった技術', anchor: '#technology' },
      { text: '経緯', anchor: '#background' },
      { text: '感想・反省点', anchor: '#impressions' }
    ]
  })
}
</script>

<style scoped>
  .blog {
    width: 88%;
    margin: 0 auto;
  }

  .mokuji {
    padding: 16px;
    margin: 36px 0;
    background-color: #f7f9f9;
  }

  .mokuji-item {
    padding: 8px 0;
    font-size: 14px;
    list-style-type: none;
    border-bottom: 1px solid #e6e6e6;
  }

  .mokuji-item a {
    color: #505050;
  }

  img {
    width: 75%;
    margin: 10px;
  }

  ul li {
    background-color: #fff;
    list-style: none;
  }

  section {
    margin-bottom: 20px;
  }

  .pink_line {
    background: linear-gradient(transparent 60%, #ffdfef 0%);
  }

  ul.useful li:nth-child(even) {
    padding-bottom: 5px;
  }

  @media screen and (max-width: 601px) {
    .blog {
      width: 90%;
    }
  }

</style>
