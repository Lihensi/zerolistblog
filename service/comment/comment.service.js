const connections = require('../db')
// const express = require('express');


class CommentService {
  // 发表评论
  async create(name, time, note) {
    const statement = `INSERT INTO comments (com_name, create_time, com_content) 
    VALUES (?, ?, ?);`
    const [result] = await connections.execute(statement, [name, time, note])

    console.log(result);
    return result
  }
  // 点赞
  async giveLike(id, ifTrue) {
    // 根据评论唯一 id 查询点赞数
    const statement = `SELECT good_number FROM comments WHERE id = ?;`
    const number = await connections.execute(statement, [id])
    if (ifTrue) {
      const goodNumber = number[0][0].good_number + 1
      // 点赞数 +1
      const statement2 = `UPDATE comments SET good_number=? WHERE id=?;`
      const result = await connections.execute(statement2, [goodNumber, id])
      return result
    } else {
      const goodNumber2 = number[0][0].good_number - 1
      // 点赞数 -1
      const statement3 = `UPDATE comments SET good_number=? WHERE id=?;`
      const result2 = await connections.execute(statement3, [goodNumber2, id])
      return result2
    }

  }
  // 获取最新的10条评论信息
  async getAllComments() {
    const statement = `SELECT * FROM comments ORDER BY id DESC LIMIT 10;`
    const result = await connections.execute(statement)
    const comments = result[0]

    return comments
  }
  // 根据页数和数量获取评论 admin
  async getSomeComments(page,num) {
    const newPage = (page-1)*num
    const statement = `SELECT * FROM comments LIMIT ?,?;`
    const data = await connections.execute(statement,[newPage+'', num+''])
    return data[0]
  }
  // 获取评论总数
  async getCommentTotal() {
    const statement =  `SELECT COUNT(id) AS total FROM comments;`
    const data = await connections.execute(statement)
    return data[0]
  }
  // 删除某条评论
  async delSomeComment(id) {
    const statement = `DELETE FROM comments WHERE id=?;`
    const data = await connections.execute(statement,[id])
    return data
  }
}

module.exports = new CommentService();