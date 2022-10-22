import { defineStore } from 'pinia'

export const usePageSettingStore = defineStore('page-setting', {
  state: () => {
    return {
      count: 0
    }
  },
})
