<template>
  <div name="modal">
    <span>
      <div
        v-if="show"
        class="overflow-x-hidden text-left overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center flex"
      >
        <div :class="dict[width]">
          <!--content-->
          <div
            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <!--header-->
            <div
              class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
            >
              <h3 class="text-xl font-semibold">
                <slot name="header">default header</slot>
              </h3>
              <button
                class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                v-on:click="$emit('close')"
              >
                <span
                  class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
                >
                  ×
                </span>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <slot name="body">default body</slot>
            </div>
            <!--footer-->
            <div
              class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
            >
              <slot name="footer">
                <button
                  class="bg-red-500 text-white background-transparent font-bold uppercase px-6 py-3 text-sm rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  v-on:click="$emit('close')"
                >
                  關閉
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
      <div v-if="show" class="opacity-25 fixed inset-0 z-30 bg-black"></div>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    show: {
      default: false,
    },
    width: {
      default: "short",
      validator: function (value) {
        return ["short", "medium", "long"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      form: {},
      dict: {
        short: "relative w-auto my-6 mx-auto max-w-sm",
        medium: "relative w-full my-6 mx-auto max-w-3xl",
        long: "relative w-full my-6 mx-auto max-w-6xl",
      },
    };
  },
  emits: ["close"],
  created() {},
  components: {},
  methods: {},
};
</script>
