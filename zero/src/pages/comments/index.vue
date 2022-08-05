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
      <label for="note" class="label_note">留言：</label>
      <textarea
        class="textarea"
        id="note"
        placeholder="你的留言"
        v-model="note"
      ></textarea>
      <button id="submit" @click="submit">提 交</button>
      <!-- <input type="submit" id="submit" value="提   交" /> -->
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
export default {};
</script>

<style>
.note {
  /* // 超出部分 滚动 */
  overflow: scroll;
  max-height: 700px;
  position: relative;
}

.panel {
  /* // border: 1px solid black; */
  position: relative;
  height: 420px;
  padding: 20px 50px 0 50px;
  margin-top: 20px;
  box-sizing: border-box;
  border-top: 1px solid rgb(184, 184, 237);
  border-left: 1px solid rgb(184, 184, 237);}

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
    border: 3px solid rgb(128, 128, 189);
    box-shadow: 2px 3px 4px rgb(144, 144, 183);}

    #node:focus {
      /* // 取消聚焦时的默认效果 */
      outline: none;
    }
  
  #name {
    top: 110px;
    left: 80px;
    width: 180px;
    height: 40px;
    padding-left: 10px;
    color: rgb(75, 161, 195);
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }
  #note {
    top: 200px;
    left: 80px;
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
    font-weight: 700;}
    #submit:hover {
      background-color: #c2d0e2;
    }
  

.note-message {
  margin-top: 10px;
  border: 2px solid transparent;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  transition: border 0.5s;}
  .note-message:hover {
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
  /* // position: fixed; */
  width: 300px;
  height: 200px;
  /* // 隐藏 */
  /* // display: none; */
  /* // background-image: linear-gradient(to top, #a8d2e4 0%, #acc6ee 99%, #d0d4d9 100%);
  background-color: rgba(95, 150, 190, 0.5); */
  /* // opacity: .9; */
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