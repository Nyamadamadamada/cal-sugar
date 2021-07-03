import jsonData from '@/assets/json/option.json'

// 状態の管理
export const state = () => ({
  option: jsonData
})

// getters
export const getters = {
  getOption: state => (id) => {
    const optionAmount = state.option.find((e) => {
      return e.id === id
    })
    return optionAmount.option || null
  }
}
