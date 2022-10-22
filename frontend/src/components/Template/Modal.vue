<template>
  <div to="body">
    <common-modal :show="showModal" width="medium" @close="close()">
      <template #header>
        <h3>
          <span></span>
        </h3>
      </template>
      <template #body>
        <div class="w-full">todo</div>
      </template>

      <template #footer>
        <div>
          <button
            class="bg-red-500 text-white background-transparent font-bold uppercase px-6 py-3 text-sm rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            v-on:click="close()"
          >
            關閉
          </button>
        </div>
      </template>
    </common-modal>
  </div>
</template>

<script lang="ts">
import CommonModal from "../Common/CommonModal.vue";
export default {
  props: {},
  components: {
    CommonModal,
  },
  created() {},
  data() {
    return {
      showModal: false,
      form: {},
    };
  },
  computed: {},
  emits: [],
  watch: {},
  methods: {
    open() {
      this.showModal = true;
    },
    edit(input) {
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    },
  },
};
</script>
