<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      // items: this.$store.getters.usefulRouter,
      title: "結帳系統",
    };
  },
  computed: {},
  created() {},
  watch: {},
});
</script>
