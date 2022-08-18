<template>
  <div class="register">
    <!-- 注册的盒子 -->
    <div class="reg-box">
      <!-- 标题的盒子 -->
      <div class="title-box"><h2>注册</h2></div>
      <!-- 注册的表单区域  -->
      <el-form ref="form" :model="regForm" :rules="regRules">
        <el-form-item prop="username">
          <el-input
            v-model="regForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="regForm.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model="regForm.repassword"
            placeholder="请再次确认密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-reg" type="primary" @click="btn_reg"
            >注册</el-button
          >
          <el-link type="info" @click="$router.push('/user/login')">去登录</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerAPI } from "@/api/index.js";

export default {
  name: "register",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 表单的数据对象 —— 【数据使用对象呢的形式、✨对象属性名与接属性名一致】
      regForm: {
        username: "",
        password: "",
        repassword: "",
      },
      // 表单规则校验对象 —— 【使用element-ui自带的表单验证、✨自定义表单验证】
      regRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9]{1,10}$/,
            message: "用户名必须是1-10的大小写字母数字",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[\S]{6,12}$/,
            message: "密码必须是6-12的非空字符",
            trigger: "blur",
          },
        ],
        repassword: [
          { required: true, message: "请再次确认密码", trigger: "blur" },
          // 自定义表单验证
          { validator: validatePass, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    btn_reg() {
      // 【使用element-ui内置的✨validate函数：JS兜底校验】
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // console.log(this.regForm)
          const { data: res } = await registerAPI(this.regForm);
          // console.log(res)
          // 注册成功、失败提示 —— 【element-ui的✨弹窗提示】
          if (res.code !== 0) return this.$message.error(res.message);
          this.$message.success(res.message);

          this.$router.push("/user/login");
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style  scoped>
.register {
    position: relative;
  background: url("../../assets/images/login_bg.jpg") center;
  background-size: cover;
  height: 100%;
}

.reg-box {
  width: 400px;
  height: 335px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 30px;
  box-sizing: border-box;
}

.title-box {
  height: 60px;
  /* background: url("../../assets/images/login_title.png") center no-repeat; */
}
.btn-reg {
  width: 100%;
}
</style>
