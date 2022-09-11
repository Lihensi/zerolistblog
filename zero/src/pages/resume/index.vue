<template>
  <div class="resume">
    <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/introduce' }"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>简历</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all"><h2>个人简历</h2></div>
    <div class="center">
      <div class="header">
        <div class="left">
          <!-- <h4>姓名：{{ personal.name }}</h4> -->
          <table>
            <tr>
              <td style="color: skyblue">姓名：{{ personal.name }}</td>
            </tr>
            <br />
            <br />
            <tr>
              <td>性别：{{ personal.sex }}</td>
              <td>年龄：{{ personal.age }}</td>
            </tr>
            <tr>
              <td>电话：{{ personal.phone }}</td>
              <td>邮箱：{{ personal.email }}</td>
            </tr>
          </table>
        </div>
        <div class="right">
          <img src="@/assets/zl.jpg" alt="" />
        </div>
      </div>
      <div class="a">
        <div class="edu">
          <div>
            <div>教育背景</div>
            <div>&nbsp;&nbsp;{{ personal.education }}</div>
          </div>
        </div>
        <div class="work">
          <div>
            <div>工作经历</div>
            <div>&nbsp;&nbsp;{{ personal.work }}</div>
          </div>
        </div>
        <div class="skill">
          <div>
            <div>职业技能</div>
            <div>
              <p>&nbsp;&nbsp;{{ personal.skill }}</p>
            </div>
          </div>
        </div>
        <div class="me">
          <div>
            <div>自我评价</div>
            <div>&nbsp;&nbsp;{{ personal.me }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume",
  data() {
    return {
      personal: {
        name: "李鑫",
        sex: "男",
        age: 20,
        phone: "13980298629",
        email: "3138220743@qq.com",
        education: "目前就读于四川工商学院，以后可能没了，可能有。",
        work: "想啥呢，肯定没的撒。",
        skill:
          "略微了解:HTML，CSS，js，node.js,vue2,ajax,axios,至于其他嘛，慢慢来嘛！",
        me: "也就那样，菜鸡一个",
      },
    };
  },
};
</script>

<style scoped>
/* .resume{
   position: absolute;  */
/* margin: 0 auto; 
} */
.center {
  position: relative;
  margin-top: 10px;
  justify-items: center;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #fea;
}
.all {
  width: 100%;
  height: 20px;
  color: blue;
}
.all > h2 {
  margin: 0px auto;
  text-align: center;
}
.header {
  display: flex;
  /* margin-top: 10px; */
  /* background-color: red; */
  height: 150px;
  width: 525px;
  border: 1px solid #fea;
}
.left {
  /* border: 1px solid red; */
  width: 450px;
  border: #fea;
  /* background-color: #ebf; */
}
.right {
  width: 180px;
  left: 100%;
  border: #fea;
  /* background-color: #afe; */
}
.right > img {
  width: 150px;
}
.a{
  position: absolute;
  /* overflow: hidden; */
  width: 528px;
}
.edu {
  position: relative;
  border: #fea;
  height: 123px;
  width: 525px;

  /* background-color: skyblue; */
}
.work {
  position: relative;
  width: 525px;
  border: #fea;
  height: 123px;
  /* background-color: #dff; */
}
.skill {
  position: relative;
  width: 525px;
  border: #fea;
  height: 119px;
  /* background-color: #fea; */
}
.me {
  position: relative;
  border: #fea;
  height: 115px;
  width: 525px;
  /* background-color: #eba; */
}
</style>