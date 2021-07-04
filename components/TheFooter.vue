<template>
  <v-footer
    color="#f9f6f3"
    padless
    class="footer"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="#f9f6f3"
        text
        class="my-2"
      >
        <NuxtLink :to="link.to">
          {{ link.name }}
        </NuxtLink>
      </v-btn>
      <v-btn
        color="#f9f6f3"
        text
        class="my-2"
      >
        <a href="https://forms.gle/sh5XKkFEhdtj29u37">お問い合わせ</a>
      </v-btn>
      <v-col
        class="py-2 text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>CalSugar</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'ホーム',
        to: '/'
      },
      {
        name: '糖質計算',
        to: '/calculate'
      },
      {
        name: 'ご利用方法',
        to: '/about'
      }
    ]
  })
}
</script>

<style scoped>
  .footer a {
    color: #505050;
  }
</style>
