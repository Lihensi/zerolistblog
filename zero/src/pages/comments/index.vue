<template>
  <div>
    <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/introduce' }"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>留言板</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
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
      <label for="comment" class="label_comment">留言：</label>
      <textarea
        class="textarea"
        id="comment"
        placeholder="你的留言"
        v-model="comment"
      ></textarea>
      <button id="submit" @click="submit">提 交</button>
    </div>
    <div class="comment-message" v-for="item in comments" :key="item.id">
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
export default {
  name:'comments',
  // created() {
  //   this.getAllComments();
  // },
  // mounted() {},
  // data() {
  //   return {
  //     comments: [], // 留言列表
  //     name: "", // 名字输入框内容
  //     comment: "", // 留言输入框内容
  //     notice: "", // 弹框提示信息
  //     ifHidden: false, // popout弹框的显示与隐藏
  //   };
  // },
  // methods: {
  //   // 获取评论信息（按时间排序的最近的前十条）
  //   async getAllComments() {
  //     const result = await requests.get("/comment/getcomments");
  //     this.comments = result.data;
  //   },
  //   // 点赞按钮
  //   async giveALike(event, id) {
  //     // 获取点击事件的当前元素节点
  //     const nodeGood = event.target;
  //     // 获取自定义属性的值，默认值为false，这里通过nodeGood.dataset.id获得的是"false"字符串，而不是布尔型
  //     let message = nodeGood.dataset.id;
  //     // 将自定义属性的值转换为布尔值
  //     let isStyle;
  //     if (message === "false") {
  //       isStyle = false;
  //     } else {
  //       isStyle = true;
  //     }
  //     if (isStyle) {
  //       nodeGood.style.color = "black";
  //       nodeGood.style.fontSize = "30px";
  //       nodeGood.dataset.id = false;
  //       const { meta } = await requests.post("/comment/givelike", {
  //         ifTrue: false,
  //         commentId: id,
  //       });
  //       if (meta.status === 200) {
  //         this.getAllComments();
  //       }
  //     } else {
  //       nodeGood.style.color = "#2387f2";
  //       nodeGood.style.fontSize = "40px";
  //       nodeGood.dataset.id = true;
  //       const { meta } = await requests.post("/comment/givelike", {
  //         ifTrue: true,
  //         commentId: id,
  //       });
  //       if (meta.status === 200) {
  //         this.getAllComments();
  //       }
  //     }
  //   },
  //   // 提交按钮
  //   async submit() {
  //     // 获取系统当前时间
  //     const nowTime = formatTime();
  //     // 判断内容和姓名受否为空，不为空则弹窗提示
  //     if (this.name === "" || this.comment === "") {
  //       this.notice = "不能为空！";
  //     } else {
  //       this.notice = ""; // 消除上一次弹窗提示信息
  //       const { meta } = await requests.post("/comment/create", {
  //         name: this.name,
  //         createTime: nowTime,
  //         comment: this.comment,
  //       });
  //       if (meta.status === 200) {
  //         this.notice = "留言成功！";
  //         // 所以重新加载评论列表放在这里，当评论成功后重新属性评论列表
  //         this.getAllComments();
  //       } else {
  //         this.notice = "留言失败";
  //       }
  //     }

  //     // 清空输入框
  //     this.name = "";
  //     this.comment = "";
  //     this.ifHidden = true;
  //   },
  //   // 点击隐藏弹框
  //   popoutHidde() {
  //     this.ifHidden = false;
  //   },
  // },
};
</script>

<style>
.comment {
  /* // 超出部分 滚动 */
  overflow: scroll;
  max-height: 700px;
  position: relative;
}

.panel {
  position: relative;
  height: 350px;
  padding: 20px 50px 0 50px;
  margin-top: 10px;
  box-sizing: border-box;
  border-top: 1px solid rgb(184, 184, 237);
  border-left: 1px solid rgb(184, 184, 237);}

  h2 {
    margin: 0;
    padding-left: 0px;
    color: #e5eaef;
    text-shadow: 2px 2px 4px rgb(106, 106, 155);
    letter-spacing: 6px;
  }

  label,
  input,
  button,
  textarea {
    position: absolute;
  }
  .label_name,
  .label_comment,
  #submit {
    font-weight: 700;
    font-size: 15px;
    text-shadow: 1px 1px 1px #2d83d9;
    color: #1459a2;
  }
  .label_name {
    top: 50px;
  }
  .label_comment {
    top: 150px;
  }
  #name,
  #comment {
    border-radius: 10px;
    border: 1px solid rgb(179, 179, 244);
    box-shadow: 2px 3px 4px rgb(168, 168, 187);}

    #node:focus {
      outline: none;
    }
  
  #name {
    top: 80px;
    left: 70px;
    width: 200px;
    height: 30px;
    padding-left: 10px;
    color: rgb(9, 183, 251);
    font-weight: 400;
    font-size: 15px;
    /* text-align: center; */
  }
  #comment {
    top: 180px;
    left: 70px;
    width: 500px;
    height: 120px;
    padding: 10px;
    font-size: 15px;
    color: rgb(9, 183, 251);
    font-weight: 700;
    resize: none;
  }
  #submit {
    top: 275px;
    left: 650px;
    width: 90px;
    height: 40px;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    color: #0c55a3;
    font-weight: 700;}
    #submit:hover {
      background-color: #c2d0e2;
    }
  

.comment-message {
  margin-top: 10px;
  border: 2px solid transparent;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  transition: border 0.5s;}
  .comment-message:hover {
    border: 1px dashed #1769c0;
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
    transition: all 0.4;}
    .good:hover {
      font-weight: bold;
      color: #2387f2;
    }
  
  .count {
    position: absolute;
    top: 15px;
    right: 8px;
    font-size: 18px;
    color: gray;
  }

.popout {
  position: absolute;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  top: 50%;
  left: 35%;
  transform: translateX(-50%) translateY(-50%);

  transition: all 0.3s;}
  .popout:hover {
    width: 320px;
    height: 210px;
  }
  .box {
    position: relative;}
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
      transition: all 0.5s;}
      button:hover {
        cursor: pointer;
        background-color: #a1bbdd;
      }

</style>