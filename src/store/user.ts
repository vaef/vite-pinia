import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {},
    }
  },
  getters: {},
  actions: {
    async getUserData() {
      this.userInfo = {
        name: 'Joy',
        age: 24,
      }
    },
  },
})
