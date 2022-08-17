<template>
  <div id="user">
    <!-- <Login /> -->
    <Register />
    <router-view></router-view>
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
#user {
  display: flex;
}
</style>