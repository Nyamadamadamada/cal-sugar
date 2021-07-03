<template>
  <v-card>
    <v-card-text>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="食材検索"
            single-line
            hide-details
            flat
            color="#ecd45a"
          />
        </v-card-title>
        <v-expansion-panels v-model="panel" multiple flat>
          <v-expansion-panel>
            <v-expansion-panel-header>
              カテゴリ絞込み
              <div class="now-category">
                <div :class="nowCategory.icon"></div>
                <span>{{ nowCategory.name }} 選択中</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list class="category_list">
                <v-list-item
                  v-for="([ id, name, icon]) in category"
                  :key="id"
                  link
                  class="category_list-item"
                  @click="selectCategory(id,name,icon)"
                >
                  <v-list-item-icon style="margin: auto 0;">
                    <div :class="icon" />
                    <span>{{ name }}</span>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-data-table
        :headers="headers"
        :items="food"
        :search="search"
        :items-per-page="itemsPerPage"
        mobile-breakpoint="1"
        item-key="name"
        class="elevation-1"
      >
        <template #[`item.actions`]="{ item }">
          <v-btn
            v-if="item.is_unselected"
            class="ma-2"
            color="#ecd45a"
            @click="addItem(item)"
          >
            <v-icon dark left>
              mdi-plus-circle
            </v-icon>選択
          </v-btn>
          <v-btn v-else>
            選択済み
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable */
export default {
  async created () {
    const food = []
    this.items = this.$store.state.items
    const foodCSV = await this.$content('data', 'food2').fetch()
    foodCSV.body.forEach((element) => {
      let foodItem = {}
      foodItem.id = element['id']
      foodItem.name = element['name']
      foodItem.protein = element['protein']
      foodItem.dietary_fiber = element['dietary_fiber']
      foodItem.sugar = element['sugar']
      foodItem.category_id = element['category_id']
      foodItem.is_unselected = 1
      food.push(foodItem)
    })

    this.$store.commit('setFood', food)
  },
  data () {
    return {
      search: '',
      recipeName: '',
      itemsPerPage: 10,
      items: [],
      filterFood: [],
      headers: [
        {
          text: '食材',
          align: 'start',
          value: 'name'
        },
        { 
          text: '', 
          value: 'actions',
          sortable: false,
          align: 'end'
        }
      ],
      nowCategory: {
        name:'全カテゴリ',
        icon: ''
      },
      category: [
        [
          '0',
          '全カテゴリ',
          ''
        ],
        [
          '1',
          '肉類',
          'beef_icon'
        ],
        [
          '2',
          '魚介類',
          'fish_icon'
        ],
        [
          '3',
          '野菜類',
          'vegetables_icon'
        ],
        [
          '4',
          'いも・デンプン',
          'potato_icon'
        ],
        [
          '5',
          'きのこ類',
          'mushroom_icon'
        ],
        [
          '6',
          '藻類',
          'algae_icon'
        ],
        [
          '7',
          '豆類',
          'beans_icon'
        ],
        [
          '8',
          '乳類・卵類',
          'milk_icon'
        ],
        [
          '9',
          '果実類',
          'fruit_icon'
        ],
        [
          '10',
          '穀物',
          'grain_icon'
        ],
        [
          '11',
          '油',
          'oil_icon'
        ],
        [
          '12',
          '調味料',
          'seasoning_icon'
        ]
      ],
      panel: [],
    }
  },
  methods: {
  addItem (item) {
      item.amount = null
      this.$store.commit('selected', item.id)
      this.$store.commit('add', item)
      this.isShowSample = false
    },
    selectCategory(categoryId, name, icon) {
      // 全カテゴリが選択された場合初期化
      if(categoryId === '0'){
        this.filterFood = []
      }
      this.nowCategory.name = name
      this.nowCategory.icon = icon
      this.panel = []
      this.itemsPerPage = 100
      this.filterFood = this.$store.state.food.filter( e => {
        return e.category_id === categoryId 
      })
    },

  },
  computed: {
    // categoryName () {
    //   return this.$store.state.category
    // },
    food (){
      if(this.filterFood.length > 0){
        return this.filterFood
      }
      return this.$store.state.food
    },
  }
}
</script>

<style scoped>
.now-category {
  display: flex;
  padding-left: 20px;
  align-items: center;
}

.now-category span {
  padding-left: 5px;
}

.category_list {
  display: flex;
  flex-wrap: wrap;
}

.category_list-item {
  flex: none;
  margin: 0;
}

.category_list-item span {
  padding: 5px 0 0 10px;
}

.grain_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/grain.svg');
}

.potato_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/potato.svg');
}

.vegetables_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/vegetables.svg');
}

.seasoning_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/seasoning.svg');
}

.oil_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/oil.svg');
}

.mushroom_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/mushroom.svg');
}

.milk_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/milk.svg');
}

.fruit_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/fruit.svg');
}

.fish_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/fish.svg');
}

.beef_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/beef.svg');
}

.beans_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/beans.svg');
}

.algae_icon {
  width: 32px;
  height: 32px;
  background-image: url('/category_icon/algae.svg');
}

</style>
