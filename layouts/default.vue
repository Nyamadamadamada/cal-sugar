<template>
  <v-app>
    <TheHeader />
    <v-main>
      <nuxt />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'カルシュガー',
      subTitle: 'ダイエット・糖質制限のお供に'
    }
  }
}
</script>
