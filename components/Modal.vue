<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      食材選択
    </v-card-title>

    <v-card-text>
      <ul id="example-1">
lll
      </ul>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        text
        @click="$emit('closeModal')"
      >
        I accept
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import store from '~/store/index.js'

export default {
  async created () {
    const category = await this.$content('data', 'category').where({ title: 'name' }).fetch()
    // const food = await this.$content('data', 'food').fetch()
    // console.log(category)
    // console.log(food)
    store.commit('setFamilyName', category)
  },
  data () {
    return {
      category: store.state.category
    }
  }
}
</script>
