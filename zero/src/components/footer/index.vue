<template>
  <div class="footer">
    <div class="site"><a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2022016594号-1</a></div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer{
  position: relative;
  width: 100%;
  height: 20px;
  /* display: flex; */
}
.site{
  text-align: center;
}
a{
  color: aqua;
  text-decoration: none;
}
</style>