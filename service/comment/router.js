const express = require('express')
const router = express.Router()

const {
  create,
  giveLike,
  getAllComments
} = require('./controller')

// 发表评论
router.post('/create', create)
// 点赞
router.post('/givelike', giveLike)
// 获取全部评论信息
router.get('/getcomments', getAllComments)


module.exports = router;