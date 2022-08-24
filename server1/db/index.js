const mysql = require('mysql')
/* 创建连接 */
const db = mysql.createConnection({
  host: '127.0.0.1',         //数据库的ip地址
  user: 'root',             //登录数据库的账号
  password: 'admin123',//登录数据库的密码
  database: 'myblog',  //指定要操作哪个数据库
  port: '3306'
})
/* 连接数据库 */
db.connect((err) => {
  if (err) return console.log('数据库连接失败');
  console.log("数据库连接成功");
});

module.exports = db
