<template>
  <select
    @change="selectedOption"
    v-model="selectedOptionAmount"
    class="amount-select"
  >
    <option disabled selected>目安量を選択</option>
    <option
      v-for="(option,id) in getOption(optionId)"
      :key="id"
      :value="option.glam"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    optionId: {
      default: 0,
      type: Number
    }
  },
  data () {
    return {
      selectedOptionAmount: '目安量を選択'
    }
  },
  computed: {
    ...mapGetters({
      getOption: 'option/getOption'
    })
  },
  methods: {
    selectedOption () {
      this.$emit('set-glam', this.selectedOptionAmount)
    }
  }
}
</script>

<style scoped>
.amount-select {
  height: 40px;
  border: 1px solid #aaa;
  max-width: 150px;
  border-radius: 5px;
  position: relative;
  z-index: 1;
}

.amount-select::after {
  position: absolute;
  content: '';
  width: 8px;
  height: 8px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  z-index: -1;
}

select {
  appearance: none;
  background: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 10px;
}
</style>
