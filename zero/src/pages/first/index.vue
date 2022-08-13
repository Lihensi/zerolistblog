<template>
  <div class="body">
    <vue-particles
      color="#409EFF"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="6"
      linesColor="#409EFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="a" @click="handler">
      <h1>进入</h1>
    </div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
export default {
  name: "first",
  methods: {
    handler() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;
}
.body {
  /* 弹性布局 让页面元素水平、垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 设置body高度为100%窗口高度 */
  height: 100vh;
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
  flex: 999;
  z-index: 1;
}

.a {
  /* 相对定位 */
  position: relative;
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 24px;
  color: #fff;
  /* 渐变背景 */
  background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
  /* 背景渐变色大小 */
  background-size: 400%;
  /* 圆角 */
  border-radius: 50px;
  z-index: 1;
}

/* 发光效果 */
.a::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  /* 渐变背景 */
  background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
  /* 背景渐变色大小 */
  background-size: 400%;
  /* 圆角 */
  border-radius: 50px;
  /* 位于按钮之下 */
  z-index: -1;
  /* 设置模糊度 显示发光效果 */
  filter: blur(20px);
}

/* 鼠标移入执行动画 */
.a:hover {
  /* 动画：名称 时间 infinite是无限次播放 */
  animation: streamer 8s infinite;
}

.a:hover::before {
  animation: streamer 8s infinite;
}

/* 接下来定义动画 */
@keyframes streamer {
  100% {
    /* 背景位置 */
    background-position: -400% 0;
  }
}
</style>