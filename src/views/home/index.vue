<script setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
userStore.getUserData()

console.log('store data:', userStore.userInfo);

</script>

<template>
  <div class="home">
    this is vue3+vite!
    <!-- <div class="abc">
      abc
      <el-button type="primary" icon="Search">Primary</el-button>
    </div> -->

  </div>
</template>

<style lang="less" scoped>
.home {
  .abc {
    color: slateblue;
    font-weight: 700;
  }
}
</style>