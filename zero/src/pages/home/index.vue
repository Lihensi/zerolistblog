<template>
  <div id="home">
    
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
          <li class="item" @click="go('about')">关于自己</li>
          <li class="item" @click="go('user')">个人</li>
          <Header/>
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
* {
  margin: 0;
  padding: 0;
}

#home {
  position: absolute;
  /* position: relative; */
  /* justify-content: center; */
  height: 860px;
  width: 100%;
  /* 渐变色 */
  background: #005ad7;

  background: -webkit-linear-gradient(
    to right,
    rgb(0, 90, 167),
    rgb(255, 253, 228)
  );
  background: linear-gradient(to right, rgb(0, 90, 167), rgb(255, 253, 228));
  /* flex: 99; */
  z-index: 99;
}
.xnav {
  position: relative;
  /* position: absolute; */
  width: 80%;
  margin: 0 auto;
  height: 800px;
  padding-top: 10px;
  overflow: hidden;
  display: flex;
  z-index: 999;
}
.left-box {
  font-size: 25px;
  color: dodgerblue;
  /* position: relative; */
  width: 250px;
  height: 700px;
  border: 2px solid rgb(0, 174, 255);
  background-color: rgba(12, 145, 240, 0.2);
  font-size: 14px;
  /* display: flex; */
  flex-direction: column;
  transition: 0.5s ease;
  white-space: nowrap;
  border-radius: 10px;
  z-index: 999;
}
.right-box {
  width: 700px;
  height: 700px;
  /* position: relative; */
  border: 2px solid rgb(0, 174, 255);
  margin: 0px 10px;
  box-sizing: border-box;
  padding: 20px;
  white-space: nowrap;
  border-radius: 10px;
  display: flex;
  flex: 998;
}
ul {
  margin: 20px;
}
li {
  font-size: 20px;
  height: 50px;
  /* 弹性布局 垂直居中 */
  display: flex;
  align-items: center;
  /* margin-top: 20px; */
  text-align: left;
  list-style: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}
li.active,
li.active:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
hr {
  width: 90%;
  margin: 18px auto;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>