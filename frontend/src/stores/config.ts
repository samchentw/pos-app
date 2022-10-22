import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      systemInfo: null as SystemInfo,
      count: 0
    }
  },
})

interface SystemInfo {
  version: string
}