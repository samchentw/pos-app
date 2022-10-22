import { defineStore } from 'pinia'

export const usePageIndexStore = defineStore('page-index', {
  state: () => {
    return {
      carts: [] as Cart[],
      count: 0
    }
  },
})



interface Cart {
  productId: number;
  name: string;
  count: number;
  price: number;
  total: number;
}