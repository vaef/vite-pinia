<script lang="ts" setup>
import { onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import screenfull from 'screenfull'
import { ref, watch, watchEffect } from 'vue'
// fullscreen
let fullscreenText = ref('全屏')
const toggleFullscreen = () => {
  if (!screenfull.isEnabled)
    return ElMessage.error('抱歉，您的浏览器不支持全屏功能。')
  if (screenfull.isEnabled) {
    if (!screenfull.isFullscreen) {
      screenfull.request()
      fullscreenText.value = '退出全屏'
    } else {
      screenfull.exit()
      fullscreenText.value = '全屏'
    }
  }
}

// watch(fullscreenText, (newVal) => {
//   console.log('fullscreenText改变',newVal);
  
// })
watchEffect(() => {
  console.log('watchEffect监听：', fullscreenText.value);
  
})

// theme
const themeList = ref([
  {
    name: '浅色',
    code: 0,
  },
  {
    name: '深色',
    code: 1,
  },
  {
    name: '蓝色',
    code: 2,
  },
])

const changeTheme = (item) => {
  console.log('修改主题色为：', item.name);
  
}

onMounted(() => {})
</script>
<template>
  <div class="t-box">
    <!-- right -->
    <div class="info">
      <el-button @click="toggleFullscreen">{{ fullscreenText }}</el-button>
      <el-dropdown class="theme-button">
        <el-button>
          主题<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item, index) in themeList" :key="index" @click="changeTheme(item)">{{
              item.name
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-badge :value="12" class="item info-button" type="primary" :offset="[-5, 5]">
        <el-button>通知</el-button>
      </el-badge>
      <el-button>用户</el-button>
    </div>
    <!-- left -->
    <div class="bread">
      <!-- breadcrumb -->
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<style scoped lang="less">
.t-box {
  width: 100%;
  .info {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    .theme-button {
      margin-left: 10px;
      margin-right: 10px;
    }
    .info-button {
      margin-right: 20px;
    }
  }
}
</style>
