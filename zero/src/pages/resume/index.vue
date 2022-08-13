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
      <div class="edu">
        <table>
          <thead>
            教育背景
          </thead>
          <tr>
            &nbsp;&nbsp;{{
              personal.education
            }}
          </tr>
        </table>
      </div>
      <div class="work">
        <table>
          <thead>
            工作经历
          </thead>
          <tr>
            &nbsp;&nbsp;{{
              personal.work
            }}
          </tr>
        </table>
      </div>
      <div class="skill">
        <table>
          <thead>
            职业技能
          </thead>
          <tr>
            &nbsp;&nbsp;{{
              personal.skill
            }}
          </tr>
        </table>
      </div>
      <div class="me">
        <table>
          <thead>
            自我评价
          </thead>
          <tr>
            &nbsp;&nbsp;{{
              personal.me
            }}
          </tr>
        </table>
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
        education: "1",
        work: "2",
        skill: "3",
        me: "4",
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
  position: absolute;
  margin-top: 10px;
  left: 50%;
  transform: translateX(-50%);
  border:1px solid #fea;

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
  background-color: red;
  height: 150px;
  width: 525px;
}
.left {
  /* border: 1px solid red; */
  width: 450px;
  /* background-color: #ebf; */
}
.right {
  width: 180px;
  left: 100%;
  /* background-color: #afe; */
}
.right > img {
  width: 150px;
}
.edu {
  height: 125px;
  width: 500px;

  /* background-color: skyblue; */
}
.work {
  width: 500px;

  height: 124px;
  /* background-color: #dff; */
}
.skill {
  width: 500px;
  height: 119px;
  /* background-color: #fea; */
}
.me {
  height: 115px;
  width: 500px;
  /* background-color: #eba; */
}
</style>