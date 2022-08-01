<template>
  <div class="body">
    <Header />
    <div class="xnav">
      <div class="left-box">
        <ul>
          <li
            class="item"
            v-for="(item, index) in items"
            :key="item.index"
            @click="go(item.index)"
          >
            {{ item.text }}
          </li>
          <hr />
          <li class="item" @click="go('about')">关于自己
          </li>
        </ul>
      </div>
      <div class="right-box">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        { index: "introduce", text: "自我介绍" },
        { index: "resume", text: "简历" },
        { index: "comments", text: "留言板" },
      ],
    };
  },
  methods: {
    go(index) {
      this.$router.push(`/${index}`);
    },
  },
};
</script>

<style scoped>
.body {
  /* 弹性布局 让页面元素水平、垂直居中 */
  height: 100%;
  /* 渐变色 */
  background: #005ad7;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(0, 90, 167),
    rgb(255, 253, 228)
  );
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgb(0, 90, 167), rgb(255, 253, 228));
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.xnav {
  position: relative;
  width: 90%;
  margin: 0 auto;
  height: 800px;
  padding-top: 10px;
  overflow: hidden;
  display: flex;
}
.left-box {
  font-size: 25px;
  color: dodgerblue;
  position: relative;
  width: 250px;
  height: 700px;
  background-color: rgba(12, 145, 240, 0.2);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  white-space: nowrap;
  border-radius: 10px;
}
.right-box {
  width: 700px;
  height: 700px;
  position: relative;
  border: 2px solid rgb(0, 174, 255);
  margin: 0px 10px;
  box-sizing: border-box;
  padding: 20px;
  flex: 1;
}
ul {
  margin: 20px;
}
li {
  font-size: 30px;
  margin-top: 20px;
  text-align: left;
  list-style: none;
}
</style>