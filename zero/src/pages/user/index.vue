<template>
  <div id="user">
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

</style>