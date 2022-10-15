<template>
  <app-layout>
    <template v-slot:nav>
      <div class="text-2xl font-bold mb-5">工具箱</div>
    </template>
    <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-4 mt-8">
      <div class="bg-green-50 h-20 cursor-pointer flex">
        <div class="m-auto inline-flex text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7">
            <path
              d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"
            /></svg
          >系統資訊
        </div>
      </div>
      <div class="bg-green-50 h-20 cursor-pointer flex">
        <div class="m-auto inline-flex text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="h-7 w-7">
            <path
              d="M384 128h-128V0L384 128zM256 160H384v304c0 26.51-21.49 48-48 48h-288C21.49 512 0 490.5 0 464v-416C0 21.49 21.49 0 48 0H224l.0039 128C224 145.7 238.3 160 256 160zM64 88C64 92.38 67.63 96 72 96h80C156.4 96 160 92.38 160 88v-16C160 67.63 156.4 64 152 64h-80C67.63 64 64 67.63 64 72V88zM72 160h80C156.4 160 160 156.4 160 152v-16C160 131.6 156.4 128 152 128h-80C67.63 128 64 131.6 64 136v16C64 156.4 67.63 160 72 160zM197.5 316.8L191.1 315.2C168.3 308.2 168.8 304.1 169.6 300.5c1.375-7.812 16.59-9.719 30.27-7.625c5.594 .8438 11.73 2.812 17.59 4.844c10.39 3.594 21.83-1.938 25.45-12.34c3.625-10.44-1.891-21.84-12.33-25.47c-7.219-2.484-13.11-4.078-18.56-5.273V248c0-11.03-8.953-20-20-20s-20 8.969-20 20v5.992C149.6 258.8 133.8 272.8 130.2 293.7c-7.406 42.84 33.19 54.75 50.52 59.84l5.812 1.688c29.28 8.375 28.8 11.19 27.92 16.28c-1.375 7.812-16.59 9.75-30.31 7.625c-6.938-1.031-15.81-4.219-23.66-7.031l-4.469-1.625c-10.41-3.594-21.83 1.812-25.52 12.22c-3.672 10.41 1.781 21.84 12.2 25.53l4.266 1.5c7.758 2.789 16.38 5.59 25.06 7.512V424c0 11.03 8.953 20 20 20s20-8.969 20-20v-6.254c22.36-4.793 38.21-18.53 41.83-39.43C261.3 335 219.8 323.1 197.5 316.8z"
            />
          </svg>

          結帳發票記錄
        </div>
      </div>
      <div class="bg-green-50 h-20 cursor-pointer flex">
        <div class="m-auto inline-flex text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="h-7 w-7"
            viewBox="0 0 16 16"
          >
            <path
              d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"
            />
            <path
              d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
            />
          </svg>
          出單機管理
        </div>
      </div>
      <div class="bg-green-50 h-20 cursor-pointer flex">
        <div class="m-auto inline-flex text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            class="h-7 w-7"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"
            />
          </svg>

          關帳
        </div>
      </div>
      <!-- <div class="bg-green-50 h-20 cursor-pointer flex">
        <div class="m-auto inline-flex text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            class="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            /></svg
          >客戶資料
        </div>
      </div> -->
    </div>
  </app-layout>
</template>

<script lang="ts">
import AppLayout from "../../layouts/AppLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: [],
  components: {
    AppLayout,
  },
  created() {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
});
</script>
