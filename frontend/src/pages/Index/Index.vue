<template>
  <app-layout>
    <template v-slot:nav>
      <div class="flex">
        <div class="w-1/2 text-2xl font-bold">結帳列表</div>
        <div class="flex w-1/2 justify-end">
          <router-link to="/index/checkout">
            <button
              class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            >
              新增結帳
            </button>
          </router-link>
        </div>
      </div>
    </template>

    <div class="mb-3">
      <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >Search</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            搜尋
          </button>
        </div>
      </form>
    </div>
    <div>
      {{ count }}
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-lg font-bold text-left text-gray-500">
          <thead class="text-lg text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-6">編號</th>
              <th scope="col" class="py-3 px-6">時間</th>
              <th scope="col" class="py-3 px-6">客人資訊</th>
              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                A-001
              </th>
              <td class="py-4 px-6">2022/09/01 10:00</td>
              <td class="py-4 px-6">無設定</td>
              <td class="py-4 px-6 text-right">
                <button
                  class="mr-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-4 rounded"
                >
                  前往結帳
                </button>

                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                >
                  刪除
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                A-002
              </th>
              <td class="py-4 px-6">2022/09/01 10:00</td>
              <td class="py-4 px-6">無設定</td>
              <td class="py-4 px-6 text-right">
                <button
                  class="mr-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-4 rounded"
                >
                  前往結帳
                </button>

                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                >
                  刪除
                </button>
              </td>
            </tr>
            <tr class="bg-white hover:bg-gray-50">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                A-003
              </th>
              <td class="py-4 px-6">2022/09/01 10:00</td>
              <td class="py-4 px-6">無設定</td>
              <td class="py-4 px-6 text-right">
                <button
                  class="mr-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-4 rounded"
                >
                  前往結帳
                </button>

                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </app-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "../../layouts/AppLayout.vue";
import { mapState } from "pinia";
import { useConfigStore } from "../../stores/config";

export default defineComponent({
  props: {},
  components: {
    AppLayout,
  },
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
      tabItems: [
        { display_name: "美學類" },
        { display_name: "住宿類" },
        { display_name: "安親類" },
        { display_name: "測試1" },
        { display_name: "測試2" },
      ],
      search: "",
      calories: "",
      desserts: [
        {
          no: "001",
          time: "2022/08/31 10:00",
          customer: "Frozen Yogurt",
        },
      ],
    };
  },
  created() {
    // useConfigStore().$patch({ count: 4 });
  },
  watch: {},
  computed: {
    headers() {
      return [
        {
          text: "編號",
          align: "start",
          sortable: false,
          value: "no",
        },
        {
          text: "時間",
          value: "time",
        },
        { text: "客人資訊", value: "customer" },
        { text: "操作", value: "action" },
      ];
    },
    ...mapState(useConfigStore, {
      count: "count",
    }),
  },
  methods: {
    edit(input: string) {
      console.log(input);
    },
  },
});
</script>
