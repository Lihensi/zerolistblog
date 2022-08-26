<template>
  <div id="user">
    <router-view></router-view>
    <div class="h4"><h4>就连接了数据库，其他啥用没有</h4></div>
  </div>
</template>

<script>
import Login from "@/pages/login";
import Register from "@/pages/register";
export default {
  components: { Login, Register },
};
</script>

<style scoped>
/* #user{
  position: absolute;
} */
.h4{
  top:100%
}
</style>