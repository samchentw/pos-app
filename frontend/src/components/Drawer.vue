<template>
  <div>
    <!-- drawer -->
    <div
      v-if="showDrawer"
      id="drawer-example"
      :style="'width:' + width"
      :class="
        'fixed z-40 h-screen p-4 overflow-y-auto right-0 ' +
        tailwindBG +
        ' ' +
        position +
        '-0'
      "
      tabindex="-1"
      aria-labelledby="drawer-label"
    >
      <button
        v-on:click="close()"
        type="button"
        data-drawer-dismiss="drawer-example"
        aria-controls="drawer-example"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div>
        <slot name="drawer-content">
          <div>drawer-content default value</div>
        </slot>
      </div>
    </div>
    <!-- drawer end -->
  </div>
</template>

<script lang="ts">
// import { mapState, mapGetters } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    position: {
      default: "left", //right
    },
    tailwindBG: {
      default: "bg-white",
    },
    width: {
      default: "24rem",
    },
  },
  components: {},
  created() {},
  data() {
    return {
      showDrawer: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    open() {
      this.showDrawer = true;
    },
    close() {
      this.showDrawer = false;
    },
  },
});
</script>
