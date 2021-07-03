<template>
  <v-list two-line class="item-list">
    <!-- 選択された食材 -->
    <v-list-item
      v-for="(item,index) in items"
      :key="item.id"
      class="item"
    >
      <v-list-item-content>
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-text
              v-ripple="{ center: true }"
              class="item-food pt-2 pb-2 font-weight-bold"
              color="#000"
              align="center"
              plain="false"
              v-bind="attrs"
              v-on="on"
            >{{ item.name }}</v-text>
          </template>
          <v-list>
            <p align="center">100gあたりの成分量</p>
            <v-list-item>
              <v-list-item-title>糖質  {{ item.sugar }} g</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>食物繊維  {{ item.dietary_fiber }} g</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>たんぱく質  {{ item.protein }} g</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-content>
      <v-list-item-content>
        <!-- <option-amount
          :option-id="1"
          @set-glam="setGlam($event, index)"
         /> -->
        <v-text-field
          :value="item.amount"
          :v-text="setAmount"
          label="数量を記入"
          suffix="g"
          color="#3e4a68"
          type="number"
          min="0"
          :rules="nameRules"
          @change="calculateAmount(index, $event)"
        />
      </v-list-item-content>
      <img
        class="clear-icon"
        src="/clear.svg"
        @click="deleteItem(item)"
      >
    </v-list-item><!-- 選択された食材終了 -->
  </v-list>
</template>

<script>
/* eslint-disable */
import OptionAmount from "~/components/calculate/OptionAmount.vue"

export default {
  components: {
    OptionAmount
  },
  data () {
    return {
      dialog: false,
      recipeName: '',
      nameRules: [
        v => !!v || ''
      ],
      amount:''
    }
  },
  methods: {
    deleteItem (item) {
      this.$store.commit('delete', item)
      this.$store.commit('unselected', item.id)
      this.subtractAmount()
    },
    calculateAmount(index, event) {
      this.$store.commit('calculateAmount', {
        itemIndex: index,
        itemAmount: event
      })
    },
    subtractAmount() {
      this.$store.commit('subtractAmount')
    },
    copyClipboard() {
      let copyText = document.getElementById("copyText")
      copyText.select()
      document.execCommand("Copy")
      alert('コピーしました')
    },
    setGlam (eventArgs,index) {
      this.$store.commit('amountUpdate', {
        itemIndex: index,
        itemAmount: eventArgs
      })
      this.amount = this.$store.getters.getItemAmount(index)
      this.calculateAmount(index,this.amount)
    },
  },
  computed: {
    isShowRegistration (){
      if(this.items.length > 0){
        return true
      }
      return false
    },
    itemAmount: function() {
      console.log('相手ｍ')
      return function(index) {
        return this.$store.getters.getItemAmount(index)
      }
    },
    items () {
      return this.$store.getters.getItems
    },
    setAmount () {
      return this.amount
    }
  },

}
</script>

<style scoped>
  .menu-btn {
    text-transform: none !important;
  }

  .clear-icon {
    height: 24px;
    margin-left: 4%;
  }

  .item-food {
    overflow-wrap: break-word;
    white-space: break-spaces;
  }

  @media screen and (max-width: 601px) {
    .item {
      padding: 0;
    }
  }
</style>