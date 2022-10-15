<template>
  <div>
    <div class="flex bg-slate-200">
      <div
        class="flex flex-col w-24 h-screen bg-teal-500 px-4 py-4 overflow-y-auto border-r"
      >
        <h2 class="text-xl font-semibold text-center text-white">系統</h2>
        <div class="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <router-link
                  class="flex items-center px-4 py-2 mt-5 text-white rounded-md hover:bg-gray-200 hover:text-black"
                  to="/index/home"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </router-link>
              </li>

              <li>
                <router-link
                  class="flex items-center px-4 py-2 mt-5 text-white rounded-md hover:bg-gray-200 hover:text-black"
                  to="/setting/index"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </router-link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <div class="w-full h-full overflow-y-auto">
        <nav
          class="bg-white h-16 shadow-xl px-2 sm:px-4 py-2.5 w-full top-0 left-0 border-b border-gray-200"
        >
          <slot name="nav"></slot>
        </nav>
        <div class="m-4">
          <!--  class="flex items-center justify-center p-40 border-4 border-dotted" -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "結帳系統",
    };
  },
  computed: {
    // currentVersion() {
    //   return version;
    // },
    // ...mapState({
    //   storeName(state) {
    //     return state.store?.name;
    //   },
    //   userName(state) {
    //     return state.user?.name;
    //   },
    //   checkVersion(state) {
    //     return state.config.systemVersion != version && state.config.systemVersion != "";
    //   },
    // }),
    // ...mapGetters({
    //   havePermission: "havePermission",
    // }),
  },
  created() {},
  watch: {},
};
</script>

<style scope>
.active {
  --tw-text-opacity: 1 !important;
  color: rgb(55 65 81 / var(--tw-text-opacity)) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity)) !important;
}
</style>
