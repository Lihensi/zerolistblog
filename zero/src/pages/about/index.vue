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
        <p>霜雪成雨淅沥客，水溢汇流聚为河。</p>
        <p>羲和六龙何时过，窗外风雨又几何。</p>
        <p>天上大臾尽七色，一正二反是霓虹。</p>
        <p>浊酒当对斜阳饮，鸟归余晖印星空。</p>
      </ul>

      <h4>关于</h4>
      <ul>
        <p>{{ about.guanyu }}</p>
      </ul>

      <h4>其他</h4>
      <div class="qq-box">
        <i class="iconfont icon-QQ-circle-fill"></i>
        <!-- <div class="img-box">
          <img src="@/assets/qq.jpg" alt="" />
          <div class="sanjiao"></div>
        </div> -->
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
  name: "about",
  data() {
    return {
      about: {
        guanyu: "没啥",
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
  color: rgb(11, 150, 182);
  text-shadow: 2px 2px 2px rgb(153, 187, 195);
}
p {
  text-indent: 2em;
  color: rgb(79, 109, 116);
  font: optional;
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
.qq-box:hover,
.wx-box:hover {
  cursor: pointer;
}
.img-box {
  display: block;
}
i {
  color: #9cbfec;
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
  background: #9ab5d8;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
}

i {
  font-size: 60px;
  color: #4471ab;
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