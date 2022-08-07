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
    <div class="react">
      <h4>随便写写</h4>
      <ul>
        <p>{{ about.suibian }}</p>
      </ul>

      <h4>关于</h4>
      <ul>
        <p>{{ about.guanyu }}</p>
      </ul>

      <h4>其他</h4>
      <div class="qq-box">
        <i class="iconfont icon-QQ-circle-fill"></i>
        <div class="img-box">
          <img src="@/assets/qq.jpg" alt="" />
          <div class="sanjiao"></div>
        </div>
      </div>
      <div class="wx-box">
        <i class="iconfont icon-weixin"></i>
        <div class="img-box">
          <img src="@/assets/wx.jpg" alt="" />
          <div class="sanjiao"></div>
        </div>
      </div>
      <div class="github-box">
        <a href="https://github.com/Lihensi" target="_blank">
          <i class="iconfont icon-github"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  namae: "about",
  data() {
    return {
      about: {
        suibian: "123",
        guanyu: "456",
      },
    };
  },
};
</script>

<style scoped>
.react {
  position: relative;
  margin-top: 20px;
  height: 650px;
}

h4 {
  color: rgb(79, 109, 116);
  text-shadow: 2px 2px 2px rgb(153, 187, 195);
}
p {
  color: rgb(79, 109, 116);
}
ul {
  padding-right: 40px;
  height: 160px;
}
.qq-box,
.wx-box,
.github-box {
  position: absolute;
  bottom: 30px;
  left: 40px;
}
.github-box:hover {
  cursor: pointer;
}
.img-box {
  display: block;
}
i {
  color: #6f94c5;
}

.img-box {
  position: absolute;
  top: -120px;
  left: -20px;
  width: 100px;
  height: 100px;
  display: none;
}
img {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 9;
}
.sanjiao {
  position: absolute;
  bottom: -10px;
  left: 40px;
  background: #c3d0e1;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
}

i {
  font-size: 60px;
  color: #94adcd;
}

.wx-box {
  left: 120px;
}
i {
  font-size: 55px;
}

.github-box {
  left: 195px;
}
a {
  color: #000;
}
</style>