<script setup lang="ts">
import LeftMenu from '@/components/layout/LeftMenu.vue'
import Top from '@/components/layout/Top.vue'

</script>

<template>
  <div class="w-box">
    <left-menu></left-menu>
    <div class="right-box">
      <top></top>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.w-box {
  display: flex;
  .right-box {
    width: 100%;
  }
}
</style>
