<template>
  <div class="about">
    <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/introduce' }"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>关于我</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="suibian"><h4>随便写写</h4></div>
    <div class="guanyu"><h4>关于</h4></div>
  </div>
</template>

<script>
export default {
  namae: "about",
};
</script>

<style>
</style>