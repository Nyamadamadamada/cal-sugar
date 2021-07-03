<template>
  <v-row class="calculate">
    <v-col justify="center" align="center">
      <v-card class="mt-2 mb-4">
        <v-card-subtitle>
          1食で摂取する糖質量を20～40gにして、適切な糖質摂取を目指しましょう
            <v-alert
              text
              dense
              type="success"
              class="appropriate"
              v-show="isAppropriate"
            >great!!適切な糖質値です</v-alert>
        </v-card-subtitle>
      </v-card>
      <v-card class="mt-2 mb-4">
        <selected-item />
        <v-card-text>
          <div class="result text-right">
            <p>糖質<span class="sum_sugar"> {{ Math.abs(sumSugar.toFixed(1)) }}g</span></p>
            <span>食物繊維 {{ Math.abs(sumDietaryFiber.toFixed(1)) }}g</span>
            <span>塩分 {{ Math.abs(sumProtein.toFixed(1)) }}g</span>
          </div>
        </v-card-text>
      </v-card>
      <SearchFood />
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable */
import ShareButtons from "~/components/ShareButtons"
import SelectedItem from "~/components/calculate/SelectedItem.vue"
import SearchFood from "~/components/calculate/SearchFood.vue"

export default {
  components: {
    ShareButtons,
    SelectedItem,
    SearchFood
  },
  data () {
    return {
      isShowSample: true,
      dialog: false,
      search: '',
      recipeName: '',
      items: [],
      nameRules: [
        v => !!v || ''
      ]
    }
  },
  methods: {
    deleteItem (item) {
      this.$store.commit('delete', item)
      this.$store.commit('unselected', item.id)
      this.items = this.$store.state.items
      this.subtractAmount()
    },
    calculateAmount(index, event) {
      this.$store.commit('calculateAmount', {
        itemIndex: index,
        itemAmount: event
      })
    },
    subtractAmount(){
      this.$store.commit('subtractAmount')
    },
    copyClipboard(){
      let copyText = document.getElementById("copyText")
      copyText.select()
      document.execCommand("Copy")
      alert('コピーしました')
    }
  },
  computed: {
    sumSugar (){
      return this.$store.state.sumSugar
    },
    sumProtein (){
      return this.$store.state.sumProtein
    },
    sumDietaryFiber (){
      return this.$store.state.sumDietaryFiber
    },
    isAppropriate (){
      return this.$store.state.isAppropriate
    },
    isShowRegistration (){
      if(this.items.length > 0){
        return true
      }
      return false
    }
  }
}
/* eslint-enable */
</script>

<style scoped>
/* stylelint-disable */
  .calculate {
    margin: 0 auto;
    max-width: 1000px;
  }
  .result {
    font-size: 1.5rem;
    color: black;
    line-height: 2rem;
    letter-spacing: normal !important;
    word-spacing: 10px;
    font-family: "Roboto", sans-serif !important;
  }
  .result p {
    padding-top:10px;
  }
  .appropriate {
    max-width: 500px;
     margin: 0 0 0 auto;
  }
  .sum_sugar {
    font-size: 3rem;
    font-weight: 400;
  }
/* stylelint-enable */
</style>
