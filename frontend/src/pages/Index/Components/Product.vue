<template>
  <div>
    <div class="text-2xl font-medium text-center text-gray-500 border-b border-gray-600">
      <ul class="flex flex-wrap -mb-px font-bold">
        <li class="mr-2" v-for="(item, index) in tabItems" :key="index">
          <a
            v-on:click="targetId = item.id"
            :class="{
              'inline-block cursor-pointer p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300':
                targetId != item.id,
              'inline-block p-4 text-teal-500 rounded-t-lg border-b-4 border-teal-600 active':
                targetId == item.id,
            }"
            >{{ item.display_name }}</a
          >
        </li>
      </ul>
    </div>

    <div class="py-2">
      <div class="grid grid-cols-5 gap-4">
        <template v-for="(row) in rowTotal">
          <div v-for="column in columnTotal" :key="column*row">
            <!-- todo:顯示產品或無產品 -->
            <div class="grid place-items-center h-20 px-2 py-2 bg-gray-400">無產品</div>

            <!-- <button class="grid place-items-center h-20 px-2 py-2 bg-gray-400 shadow-lg">
              香蕉$50
            </button> -->
          </div>
        </template>
      </div>
    </div>
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
      targetId: 1,
      tabItems: [
        { display_name: "類別一", id: 1 },
        { display_name: "類別二", id: 2 },
        { display_name: "類別三", id: 3 },
        { display_name: "類別四", id: 4 },
        { display_name: "其他", id: 5 },
      ],
      rowTotal: 5,
      columnTotal: 5,
      products: [],
    };
  },
  computed: {},
  watch: {},
  methods: {},
});
</script>
