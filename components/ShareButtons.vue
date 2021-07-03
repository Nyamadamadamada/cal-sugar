<template>
  <section>
    <aside>
      <ul class="social-list">
        <li class="social-list-item">
          <a
            class="social-list-link icon-twitter"
            :href="twitterUrl()"
            target="_blank"
            title="Twitterで共有"
          ><img src="/Twitter-icon.svg"></a>
        </li>
        <li class="social-list-item">
          <a
            class="social-list-link icon-hatebu"
            :href="hatebuUrl()"
            target="_blank"
            :data-hatena-bookmark-title="encodeURIComponent(url)"
            title="このエントリーをはてなブックマークに追加"
          ><b>B!</b></a>
        </li>
        <li class="social-list-item">
          <a
            class="social-list-link"
            :href="lineUrl()"
            target="_blank"
            title="LINEで送る"
          ><img class="icon-line" src="/line-icon.png"></a>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script>
export default {
  name: 'ShareButtons',
  props: 'title',
  data () {
    return {
      url: `https://www.suzu6.net${this.$route.path}`,
      twitter_url: 'https://twitter.com/intent/tweet?url={0}&text={1}',
      hatebu_url:
        'http://b.hatena.ne.jp/add?mode=confirm&ampurl={0}&amptitle={1}',
      line_url: 'https://social-plugins.line.me/lineit/share?url={0}'
    }
  },
  methods: {
    formatByArr (msg) {
      // フォーマット（引数可変（配列）版）
      let args = []
      for (let i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i]
      }
      // URLエンコード
      args = args.map(x => encodeURIComponent(x))
      return msg.replace(/\{(\d+)\}/g, function (m, k) {
        return args[k]
      })
    },
    // それぞれパラメータを埋め込む
    twitterUrl () {
      return this.formatByArr(this.twitter_url, this.url, this.title)
    },
    hatebuUrl () {
      return this.formatByArr(this.hatebu_url, this.url, this.title)
    },
    lineUrl () {
      return this.formatByArr(this.line_url, this.url)
    }
  }
}
</script>

<style scoped>
/* stylelint-disable */
.social-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 10%;
  margin: auto;
}
.social-list-item {
  height: 60px;
  line-height: 60px;
  min-width: 60px;
  margin: 0 4px;
}
.social-list-link{
  text-align: center;
}
.social-list-link.icon-hatebu {
  background: #008fde;
}
.icon-line {
  width: 60px;
  height: 60px;
}
.social-list-link {
  display: block;
  color: #fff;
}
a {
  color: inherit;
  text-decoration: none;
}
.content li + li {
  margin-top: 0;
}
/* stylelint-enable */
</style>
