<template>
  <div class="note">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/About' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>留言</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 留言区域 -->
    <!-- <form class="panel" id="form_note" name="myForm" method="post" action="http://localhost:8881/api/comment/create"> -->
    <div class="panel">
      <h2><span>欢迎留言</span></h2>
      <label for="name" class="label_name">请输入昵称：</label>
      <input
        type="text"
        placeholder="请输入昵称"
        id="name"
        autocomplete="off"
        v-model="name"
      />
      <label for="note" class="label_note">留言：</label>
      <textarea
        class="textarea"
        id="note"
        placeholder="你的留言"
        v-model="note"
      ></textarea>
      <button id="submit" @click="submit">提 交</button>
    </div>
    <!-- 留言展示区域 -->
    <div class="note-message" v-for="item in comments" :key="item.id">
      <h5>{{ item.com_name }}：</h5>
      <i class="date iconfont icon-24gl-calendar"> {{ item.create_time }}</i>
      <p>{{ item.com_content }}</p>
      <i
        data-id="false"
        class="good iconfont icon-icon1"
        @click="giveALike($event, item.id)"
      ></i>
      <span class="count">({{ item.good_number }})</span>
    </div>

    <!-- 提交弹出层 -->
    <div class="popout" v-show="ifHidden">
      <div class="box">
        <h4>{{ notice }}</h4>
        <button @click="popoutHidde">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import requests from "@/api/request";
import { formatTime } from "@/utils";
export default {
  created() {
    this.getAllComments();
  },
  mounted() {},
  data() {
    return {
      comments: [], 
      name: "", 
      note: "", 
      notice: "", 
      ifHidden: false,
    };
  },
  methods: {
    async getAllComments() {
      const result = await requests.get("/comment/getcomments");
      this.comments = result.data;
    },
  
    async giveALike(event, id) {
      const nodeGood = event.target;
     
      let message = nodeGood.dataset.id;
      
      let isStyle;
      if (message === "false") {
        isStyle = false;
      } else {
        isStyle = true;
      }
      if (isStyle) {
        nodeGood.style.color = "black";
        nodeGood.style.fontSize = "30px";
        nodeGood.dataset.id = false;
        const { meta } = await requests.post("/comment/givelike", {
          ifTrue: false,
          commentId: id,
        });
        if (meta.status === 200) {
          this.getAllComments();
        }
      } else {
        nodeGood.style.color = "#2387f2";
        nodeGood.style.fontSize = "40px";
        nodeGood.dataset.id = true;
        const { meta } = await requests.post("/comment/givelike", {
          ifTrue: true,
          commentId: id,
        });
        if (meta.status === 200) {
          this.getAllComments();
        }
      }
    },
    // 提交按钮
    async submit() {
      // 获取系统当前时间
      const nowTime = formatTime();
      // 判断内容和姓名受否为空，不为空则弹窗提示
      if (this.name === "" || this.note === "") {
        this.notice = "留言不能为空！";
      } else {
        this.notice = "";
        const { meta } = await requests.post("/comment/create", {
          name: this.name,
          createTime: nowTime,
          note: this.note,
        });
        if (meta.status === 200) {
          this.notice = "留言成功！";
         
          this.getAllComments();
        } else {
          this.notice = "留言失败";
        }
      }
      // 清空输入框
      this.name = "";
      this.note = "";
      this.ifHidden = true;
    },

    popoutHidde() {
      this.ifHidden = false;
    },
  },
};
</script>
<style lang="less">
.note {
  overflow: scroll;
  width: 100%;
  max-height: 700px;
  position: relative;
}
.panel {

  position: relative;
  height: 420px;
  padding: 20px 50px 0 50px;
  margin-top: 20px;
  box-sizing: border-box;
  border-top: 1px solid rgb(184, 184, 237);
  border-left: 1px solid rgb(184, 184, 237);
  h2 {
    margin: 0;
    padding-left: 30px;
    color: #2387f2;
    text-shadow: 2px 2px 4px rgb(150, 150, 165);
    letter-spacing: 6px;
  }
  label,
  input,
  button,
  textarea {
    position: absolute;
  }
  .label_name,
  .label_note,
  #submit {
    font-weight: 700;
    font-size: 20px;
    text-shadow: 3px 3px 3px #a3bcd5;
    color: #6b9bce;
  }
  .label_name {
    top: 70px;
  }
  .label_note {
    top: 170px;
  }
  #name,
  #note {
    border-radius: 10px;
    border: 1px solid rgb(63, 113, 190);
    box-shadow: 1px 3px 4px rgb(12, 98, 132);
    &:focus {
      outline: none;
    }
  }
  #name {
    top: 110px;
    left: 50px;
    width: 150px;
    height: 30px;
    padding-left: 10px;
    color: rgb(75, 161, 195);
    font-weight: 500;
    font-size: 13px;
    text-align: center;
  }
  #note {
    top: 200px;
    left: 50px;
    width: 500px;
    height: 150px;
    padding: 10px;
    font-size: 18px;
    color: rgb(26, 90, 115);
    font-weight: 700;
    resize: none;
  }
  #submit {
    top: 275px;
    left: 700px;
    width: 100px;
    height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s;
    color: #6b9bce;
    font-weight: 700;
    &:hover {
      background-color: #c2d0e2;
    }
  }
}
// 留言展示区域
.note-message {
  margin-top: 10px;
  border: 2px solid transparent;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  transition: border 0.5s;
  &:hover {
    border: 2px dashed #2387f2;
    cursor: pointer;
  }
  h5 {
    margin: 0;
  }
  .date {
    font-size: 10px;
    color: grey;
  }
  p {
    margin: 10px 0 0 0;
    text-indent: 2em;
    font-size: 14px;
    color: grey;
  }
  .good {
    position: absolute;
    top: 10px;
    right: 40px;
    font-size: 30px;
    transition: all 0.4;
    &:hover {
      // font-size: 40px;
      font-weight: bold;
      color: #2387f2;
    }
  }
  .count {
    position: absolute;
    top: 15px;
    right: 8px;
    font-size: 18px;
    color: gray;
  }
}
// 弹框区域
.popout {
  position: absolute;
  // position: fixed;
  width: 300px;
  height: 200px;
  // 隐藏
  // display: none;
  // background-image: linear-gradient(to top, #a8d2e4 0%, #acc6ee 99%, #d0d4d9 100%);
  background-color: rgba(95, 150, 190, 0.5);
  // opacity: .9;
  border-radius: 5px;
  top: 50%;
  left: 35%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.3s;
  &:hover {
    width: 320px;
    height: 210px;
  }
  .box {
    position: relative;
    h4,
    button {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    h4 {
      margin: 0;
      top: 50px;
      font-size: 20px;
      letter-spacing: 10px;
      color: #305483;
    }
    button {
      width: 80px;
      height: 40px;
      top: 130px;
      border-radius: 5px;
      background-color: #c9d6e7;
      border: 1px solid #8080bd;
      transition: all 0.5s;
      &:hover {
        cursor: pointer;
        background-color: #a1bbdd;
      }
    }
  }
}
</style>