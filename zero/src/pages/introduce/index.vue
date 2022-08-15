<template>
  <div class="introduce">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/first' }">进入页</el-breadcrumb-item>
      <el-breadcrumb-item>自我介绍</el-breadcrumb-item>
    </el-breadcrumb>

    <article>
      <div class="left">
        <img src="@/assets/zhongli1.jpg" alt="" height="480px" />
      </div>
      <div class="box">
        <table>
          <tr>
            <td>
              姓名 ： <span>{{ personal.name }}</span>
            </td>
            <td>
              电话 ： <span>{{ personal.phone }}</span>
            </td>
          </tr>
          <tr>
            <td>
              性别 ： <span>{{ personal.sex }}</span>
            </td>
            <td>
              邮箱 ： <span>{{ personal.email }}</span>
            </td>
          </tr>
          <tr>
            <td>
              出生 ： <span>{{ personal.birthday }}</span>
            </td>
            <td>
              Q Q ： <span>{{ personal.qq }}</span>
            </td>
          </tr>
          <tr>
            <td>
              居住 ： <span>{{ personal.address }}</span>
            </td>
            <td>
              户籍 ： <span>{{ personal.koseki }}</span>
            </td>
          </tr>
          <tr>
            <td>
              学历 ： <span>{{ personal.education }}</span>
            </td>
            <td>
              学校 ： <span>{{ personal.school }}</span>
            </td>
          </tr>
          <tr>
            <td>
              专业 ： <span>{{ personal.professional }}</span>
            </td>
          </tr>
          <tr>
            <td>
              状态 ： <span>{{ personal.state }}</span>
            </td>
          </tr>
        </table>
      </div>
    </article>
    <!-- 兴趣爱好 -->
    <footer>
      <h3>兴趣爱好：</h3>
      <p>{{ personal.hobby }}</p>
    </footer>
  </div>
</template>

<script>
// import { getMyIntroduce } from "@/api/index";
export default {
  //   async created() {
  //     this.personal = await getMyIntroduce();
  //   },
  name: "introduce",
  data() {
    return {
      personal: {
        name: "李鑫",
        phone: "13980298629",
        sex: "男",
        email: "3138220743@qq.com",
        birthday: "2002.06.09",
        qq: "3138220743",
        address: "四川省巴中市",
        koseki: "四川省巴中市",
        education: "本科",
        school: "四川工商学院",
        professional: "软件工程",
        studyState: "就读",
        state:
          "此世群魔诸神并起，我随无意逐鹿，却知苍生苦楚，只愿荡涤四方，护得浮世一隅。",
        hobby: "没有爱好即是爱好，啥都感兴趣，啥都不精通。",
      },
    };
  },
};
</script>

<style scoped>
.introduce {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
article {
  height: 700px;
  flex: 5;
  display: flex;
}
.left {
  align-items: center;
  position: relative;
  /* flex: 1; */
  /* display: flex; */
  width: 300px;
  flex-direction: column;
}
img {
  width: 300px;
  margin: 50px auto;
}
.box {
  position: relative;
  width: 400px;
  /* flex: 1; */
  /* display: flex; */
  color: #0b9ade;
}

table {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  padding: 50px 0 50px 0;
}

tr {
  flex: 1;
  display: flex;
  margin: 20px 0;
}

td {
  font-size: 15px;
  display: block;
  flex:1
}
span {
  color: #163b80;
}
.footer {
  flex: 1;
  color: #0b9ade;
  padding: 0 auto;
}
h3 {
  flex: 1;
  margin: auto 0;
}
p {
  color: #0b9ade;
  margin: 3px 0;
  font-size: 20px;
  text-indent: 5em;
}
</style>