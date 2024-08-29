<script lang='ts' setup >
import { onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

onMounted(()=>{})


</script>
<template>
  <div class="t-box">
    <!-- right -->
    <div class="info">
      <el-button>全屏</el-button>
      <el-button>主题</el-button>
      <el-button>通知</el-button>
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
<script setup lang="ts">
import screenfull from "screenfull";

</script>

<style scoped lang='less'>
  .t-box {
    width: 100%;
    /* display: flex;
    justify-content: space-between; */
    .info {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>