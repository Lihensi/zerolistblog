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
  width: 100%;
  /* height: 20px; */
  /* top: 100%; */
  margin: 0 auto;
  /* display: flex; */
}
.site{
  text-align: center;
}
a{
  text-align:center;
  color: aqua;
  margin: 20px auto;
  text-decoration: none;
}
</style>