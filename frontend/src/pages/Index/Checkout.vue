<template>
  <div>
    <!-- <Drawer ref="drawer"> </Drawer> -->
    <drawer ref="drawerRight" tailwindBG="bg-gray-700" width="45rem" position="right">
      <template v-slot:drawer-content>
        <Payment
          @checkoutClose="checkoutClose()"
          @openQuaggaModal="openQuaggaModal()"
        ></Payment>
      </template>
    </drawer>

    <checkout-layout>
      <!-- left -->
      <template v-slot:left-content1>
        <div class="flex">
          <span class="text-3xl">結帳 |</span>
          <div class="ml-1 text-sm">
            <div>002</div>
            <div>今天，上午10點</div>
          </div>
        </div>
      </template>

      <template v-slot:left-content2>
        <div class="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="fill-white"
          >
            <path
              d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"
            />
            <path
              d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"
            />
            <path
              d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"
            />
            <path
              d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"
            />
          </svg>
          &nbsp;
          <div>顧客單001</div>
        </div>
      </template>

      <template v-slot:left-content3>
        <div class="flex flex-row cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"
            /></svg
          >&nbsp;未輸入顧客資料
        </div>
      </template>

      <template v-slot:left-content4>
        <div class="flex flex-col">
          <button
            v-for="(item, index) in fakeCartItems"
            :key="index"
            v-on:click="openModal()"
            class="h-12 border-b p-1 border-white hover:bg-gray-400 flex items-center my-2 cursor-pointer"
          >
            <div class="w-1/2">
              {{ item.name }}
            </div>
            <div class="w-1/2 text-right">
              <div>
                {{ item.count }}
              </div>
              <div class="text-base">${{ item.price }}</div>
            </div>
          </button>
        </div>
      </template>

      <template v-slot:left-footer>
        <div class="text-center mt-2">
          <button
            class="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-2 px-6 rounded"
          >
            出單
          </button>
        </div>
      </template>

      <!-- right -->
      <template v-slot:right-content>
        <Product></Product>
      </template>
      <template v-slot:right-footer>
        <div class="text-right mt-2">
          <span class="font-bold text-xl mr-2">總共：$250</span>
          <button
            v-on:click="checkout()"
            class="bg-teal-500 hover:bg-teal-600 text-xl inline-flex text-white font-bold py-2 px-6 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="fill-white"
            >
              <path
                d="M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2 S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03L21,4.96L19.25,4l-3.7,7H8.53L4.27,2H1v2h2l3.6,7.59l-1.35,2.44 C4.52,15.37,5.48,17,7,17h12v-2H7L8.1,13z M12,2l4,4l-4,4l-1.41-1.41L12.17,7L8,7l0-2l4.17,0l-1.59-1.59L12,2z"
              /></svg
            >結帳&nbsp;
          </button>
        </div>
      </template>
    </checkout-layout>

    <!-- modal -->
    <!-- <ExampleModal ref="example"></ExampleModal> -->
    <!-- <QuaggaModal
      ref="quaggaModal"
      title="掃描載具"
      @onDetected="getInvoiceCarrier($event)"
    ></QuaggaModal> -->
    <!-- modal end -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CheckoutLayout from "./Layouts/CheckoutLayout.vue";
import Product from "./Components/Product.vue";
import Payment from "./Components/Payment.vue";
import Drawer from "../../components/Drawer.vue";

export default defineComponent({
  //   props: {},
  components: {
    CheckoutLayout,
    Product,
    Drawer,
    Payment,
  },
  data() {
    return {
      member: null,
      fakeCartItems: [
        {
          name: "蘋果",
          count: 2,
          price: 100,
          show: false,
        },
        {
          name: "香蕉",
          count: 1,
          price: 50,
          show: false,
        },
      ],
    };
  },
  created() {},
  watch: {},
  computed: {},
  methods: {
    openModal() {},
    // openModal() {
    //   this.$refs.example.open();
    // },
    checkout() {
      this.$refs.drawerRight.open();
    },
    checkoutClose() {
      this.$refs.drawerRight.close();
    },
    openQuaggaModal() {
    //   this.$refs.quaggaModal.open();
    },
    // getInvoiceCarrier(code) {
    //   this.$refs.quaggaModal.closeModel();
    //   this.$store.dispatch("setInvoiceCarrier", code);
    // },
  },
});
</script>
