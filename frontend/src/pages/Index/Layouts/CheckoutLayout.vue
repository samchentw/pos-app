<template>
  <div class="flex">
    <div
      class="flex flex-col w-80 h-screen bg-gray-300 overflow-y-auto border-r border-black"
    >
      <div
        class="flex w-full h-20 bg-teal-500 text-white px-2 py-4 border-b border-teal-700"
      >
        <div>
          <router-link
            to="/index/home"
            class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded inline-flex items-center"
          >
            <svg
              class="fill-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.535 3.515L7.05005 12L15.535 20.485L16.95 19.071L9.87805 12L16.95 4.929L15.535 3.515Z"
              />
            </svg>
          </router-link>
        </div>
        <slot name="left-content1"></slot>
      </div>
      <div class="w-full h-10 bg-teal-500 text-white px-4 py-2 text-xl">
        <slot name="left-content2"></slot>
      </div>
      <div
        class="w-full h-16 bg-gray-300 text-gray-600 px-4 py-4 text-xl font-bold border-b border-black"
      >
        <slot name="left-content3"></slot>
      </div>

      <!-- cart -->
      <div
        class="w-full h-72 mb-auto overflow-y-scroll text-black px-4 py-4 text-xl border-b border-black"
      >
        <slot name="left-content4"></slot>
      </div>
      <!-- cart end -->
      <!-- footer -->
      <div class="bg-gray-300 text-red-500 h-20 border-t-2 border-black px-2 py-2">
        <slot name="left-footer"></slot>
      </div>
      <!-- footer end -->
    </div>
    <div class="flex flex-col bg-gray-200 w-full">
      <div class="px-4 py-4">
        <slot name="right-content"></slot>
      </div>
      <div class="mb-auto"></div>
      <!-- footer -->
      <div class="bg-gray-300 text-black h-20 border-t-2 border-black px-2 py-2">
        <slot name="right-footer"></slot>
      </div>
      <!-- footer end -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // props: {},
  // components: {},
  // data() {
  //   return {};
  // },
  // created() {},
  // watch: {},
  // computed: {},
  // methods: {},
});
</script>
