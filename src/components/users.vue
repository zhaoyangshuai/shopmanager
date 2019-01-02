<template>
  <!-- 外层的是面包屑和搜索框 -->
  <el-card class="box-card">
    <!-- 面包屑 导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>
</template>

<script>
export default {};
</script>

<style>
.box-card {
  width: 100%;
  height: 100%;
}
</style>
