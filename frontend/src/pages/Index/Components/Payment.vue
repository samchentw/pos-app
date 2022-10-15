<template>
  <div class="text-white flex flex-col">
    <div class="text-3xl text-center">結帳</div>
    <div class="flex justify-center border-b-2 border-gray-800">
      <div class="text-base font-bold text-center text-gray-500">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a
              v-on:click="checkoutTarget = 1"
              :class="{
                'cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300':
                  checkoutTarget != 1,
                'cursor-pointer inline-block p-4 text-white rounded-t-lg border-b-4 border-white':
                  checkoutTarget == 1,
              }"
              >支付功能</a
            >
          </li>
          <li class="mr-2">
            <a
              v-on:click="checkoutTarget = 2"
              :class="{
                'cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300':
                  checkoutTarget != 2,
                'cursor-pointer inline-block p-4 text-white rounded-t-lg border-b-4 border-white':
                  checkoutTarget == 2,
              }"
              >稅務相關</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div v-if="checkoutTarget == 1">
      <div class="mt-3 text-2xl">
        <span class="text-white font-bold">付款方式：</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input
              type="radio"
              v-model="paymentType"
              class="w-6 h-6"
              name="payment"
              value="cash"
            />
            <span class="ml-2">現金</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              v-model="paymentType"
              class="w-6 h-6"
              name="payment"
              value="linePay"
            />
            <span class="ml-2">Line Pay</span>
          </label>

          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              v-model="paymentType"
              class="w-6 h-6"
              name="payment"
              value="credit"
            />
            <span class="ml-2">信用卡</span>
          </label>

          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              v-model="paymentType"
              class="w-6 h-6"
              name="payment"
              value="moneyTransfer"
            />
            <span class="ml-2">匯款</span>
          </label>
        </div>
      </div>
      <div v-if="paymentType == 'cash'">
        <div class="mt-5">
          <span class="text-xl">選擇面額：</span
          ><button type="button" class="bg-gray-800 px-2 py-2 ml-2">1000</button>
          <button type="button" class="bg-gray-800 px-2 py-2 ml-2">500</button>
          <button type="button" class="bg-gray-800 px-2 py-2 ml-2">200</button>
          <button type="button" class="bg-gray-800 px-2 py-2 ml-2">100</button>
        </div>
        <div class="mt-3">
          <label for="cashInput" class="inline text-white mb-2 text-xl font-medium"
            >現金</label
          >
          <input
            type="text"
            id="cashInput"
            class="bg-gray-50 border text-black border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="mt-3">
          <div class="text-xl">找零：0</div>
        </div>
      </div>
      <div class="mt-3">
        <label for="remark" class="inline text-white mb-2 text-xl font-medium"
          >備註</label
        >
        <input
          type="text"
          id="remark"
          class="bg-gray-50 border text-black border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
    </div>
    <div v-if="checkoutTarget == 2">
      <div class="mt-5 grid grid-cols-2 border-b-2 border-gray-400">
        <label for="cashInput" class="inline text-white mb-2 text-xl font-medium mr-3"
          >開立發票</label
        >
        <div>
          <label
            for="default-toggle"
            class="inline-flex relative items-center cursor-pointer"
          >
            <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </label>
        </div>
      </div>
      <div class="mt-3">
        <label for="cashInput" class="inline text-white mb-2 text-xl font-medium"
          >統一編號</label
        >
        <input
          type="text"
          id="cashInput"
          class="bg-gray-50 border text-black border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div class="mt-3">
        <label for="cashInput" class="inline text-white mb-2 text-xl font-medium"
          >載具</label
        >

        <div class="flex">
          <div class="w-5/6">
            <input
              readonly="true"
              v-on:click="$emit('openQuaggaModal')"
              type="text"
              id="cashInput"
              class="bg-gray-50 border text-black border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="w-1/6 pl-1">
            <button
              v-on:click="clearInvoiceCarrier()"
              class="bg-red-600 hover:bg-red-700 text-xl flex justify-center items-center text-white font-bold py-2 px-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <label for="cashInput" class="inline text-white mb-2 text-xl font-medium"
          >捐贈碼</label
        >
        <input
          type="text"
          id="cashInput"
          class="bg-gray-50 border text-black border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
    </div>
    <div class="fixed bottom-4 text-3xl">總額：250</div>
    <div class="fixed bottom-3 right-3">
      <div>
        <button
          v-on:click="checkoutClose()"
          class="mr-2 bg-red-600 hover:bg-red-700 text-xl inline-flex text-white font-bold py-2 px-6 rounded"
        >
          關閉
        </button>

        <button
          class="bg-green-600 hover:bg-green-700 text-xl inline-flex text-white font-bold py-2 px-6 rounded"
        >
          結帳
        </button>
      </div>
    </div>
    <notifications group="payment" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { mapState, mapGetters } from "vuex";

export default defineComponent({
  props: [],
  components: {},
  created() {},
  data() {
    return {
      checkoutTarget: 1,
      paymentType: "cash", // cash、linePay、credit、moneyTransfer
    };
  },
  computed: {},
  watch: {},
  emits: ["checkoutClose", "openQuaggaModal"],
  methods: {
    checkoutClose() {
      this.$emit("checkoutClose");
    },
    clearInvoiceCarrier() {
      // this.$store.dispatch("setInvoiceCarrier", "");

      // this.$notify({
      //   group: "payment",
      //   title: "系統訊息",
      //   text: "已請空載具！",
      // });
    },
  },
});
</script>
