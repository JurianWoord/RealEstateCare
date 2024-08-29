import { defineStore} from "pinia";

export const useAppStore = defineStore('appStore', {

  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },

})
