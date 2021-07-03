<template>
  <v-row class="calculate">
    <v-col justify="center" align="center" class="pb-6">
      <h1 class="pt-6">カルシュガーご利用方法</h1>
      <p>カルシュガーは糖質計算を簡単に行うためのサイトになります。<br>
        成分表記は日本食品標準成分表2020年版（八訂）を参照しています。</p>
      <a href="https://www.mext.go.jp/a_menu/syokuhinseibun/mext_01110.html">日本食品標準成分表2020年版（八訂）</a>
      <howto />
      <p>何か不明な点やご意見ございましたら以下フォームよりお問い合わせください</p>
      <v-btn
        elevation="2"
        href="https://forms.gle/sh5XKkFEhdtj29u37"
      >お問い合わせ</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import Howto from '~/components/Howto.vue'

export default {
  components: {
    Howto
  }
}
</script>

<style scoped>
  a {
    color: rgb(3, 188, 230);
    transition: color 0.3s;
  }

  p {
    margin-top: 40px;
  }

  a:hover {
    color: #435fff;
  }

  .section-title__copy img {
    display: none !important;
  }

</style>
