// 导入数据库操作模块
const db = require('../db/index')
// 导入 bcryptjs 这个包
const bcrypt = require('bcryptjs')
// 导入生成 Token 的包
const jwt = require('jsonwebtoken')
// 导入全局的配置文件
const config = require('../config')

// 注册新用户的处理函数
exports.regUser = (req, res) => {
  console.log(req.body);
  //接收普通键值对的参数
  const { username, password } = req.body
  const resql = `insert into users(username,password) values('${username}','${password}')`
  const selsql = `select * from users where username='${username}'`
  console.log('要执行的sql', selsql);
  function regfun() {
    console.log('要执行的sql', resql);
    connection.query(resql, (err, data) => {
      if (err) {
        console.log(err);
        res.json({
          msg: '注册失败',
          code: 0
        })
      } else {
        console.log(data);
        res.json({
          msg: '注册成功',
          code: 1
        })
      }
    })
  }
  connection.query(selsql, (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    if (result == '') {
      regfun()
    } else {
      res.json({ code: -1, msg: "注册失败，用户名已存在" })
      console.log('用户名已存在')
    }

  })
}

// 登录的处理函数
exports.login = (req, res) => {
  console.log(req.body);
  //接收普通键值对的参数
  const { username, password } = req.body
  const sql = `select * from users where username='${username}'and password='${password}'`
  console.log('要执行的sql', sql);
  connection.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        msg: '登录失败',
        code: 0
      })
    } else {
      console.log(data);
      if (data == '') {
        res.json({
          msg: '登录失败',
          code: 0
        })
      } else {
        res.json({
          msg: '登录成功',
          code: 1
        })
      }

    }
  })
}

