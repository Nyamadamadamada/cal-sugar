export const state = () => ({
  category: [],
  food: [],
  items: [],
  recipes: [],
  sumSugar: 0,
  sumProtein: 0,
  sumDietaryFiber: 0,
  isAppropriate: false
})
export const mutations = {
  setCategory (state, category) {
    state.category = category
  },
  setFood (state, food) {
    state.food = food
  },
  add (state, item) {
    state.items.push(item)
  },
  delete (state, item) {
    state.items = state.items.filter(function (e) {
      return e !== item
    })
  },
  selected (state, foodId) {
    state.food[Number(foodId) - 1].is_unselected = 0
  },
  unselected (state, foodId) {
    state.food[Number(foodId) - 1].is_unselected = 1
  },
  calculateAmount (state, { itemIndex, itemAmount }) {
    state.items[itemIndex].amount = itemAmount
    state.sumSugar = 0
    state.sumProtein = 0
    state.sumDietaryFiber = 0
    state.items.forEach((element) => {
      if (element.amount > 0) {
        state.sumSugar += Number(element.amount) * Number(element.sugar) / 100
        state.sumProtein += Number(element.amount) * Number(element.protein) / 100
        state.sumDietaryFiber += Number(element.amount) * Number(element.dietary_fiber) / 100
      }
    })
    if (state.sumSugar >= 20 && state.sumSugar <= 40) {
      state.isAppropriate = true
    } else {
      state.isAppropriate = false
    }
  },
  subtractAmount (state) {
    state.sumSugar = 0
    state.sumProtein = 0
    state.sumDietaryFiber = 0
    state.items.forEach((element) => {
      if (element.amount > 0) {
        state.sumSugar += Number(element.amount) * Number(element.sugar) / 100
        state.sumProtein += Number(element.amount) * Number(element.protein) / 100
        state.sumDietaryFiber += Number(element.amount) * Number(element.dietary_fiber) / 100
      }
    })
    if (state.sumSugar >= 20 && state.sumSugar <= 40) {
      state.isAppropriate = true
    } else {
      state.isAppropriate = false
    }
  },
  addRecipe (state, recipeName) {
    const recipe = {}
    let foodIds = ''
    state.items.forEach(function (element, index) {
      if (index === 0) {
        foodIds = element.id
      } else {
        foodIds += ',' + element.id
      }
    })
    recipe.recip_name = recipeName
    recipe.sugar = state.sumSugar
    recipe.dietary_fiber = state.sumDietaryFiber
    recipe.protein = state.sumProtein
    recipe.food_ids = foodIds
    state.recipes.push(recipe)
  },
  amountUpdate (state, { itemIndex, itemAmount }) {
    console.log(itemIndex)
    console.log(itemAmount)
    state.items[itemIndex].amount = itemAmount
  }

}
export const getters = {
  getItems: (state) => {
    return state.items
  },
  getItemAmount: state => (index) => {
    const item = state.items[index]
    return item.amount || null
  }
}
