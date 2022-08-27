import requests from "./request";
// import reqAxios from '@/utils/axios/axios-instance.js'
// 获取个人介绍全部内容
const getMyIntroduce = () => {
  return requests({
    method: 'post',
    url: '/introduce/getintroduce',
    data: {
      queryKey: 'all'
    }
  })
}
/**
 * 注册接口
 */
// 升级：使用解构赋值传参
// export const registerAPI = ({ username, password, repassword }) => {
//   return reqAxios({
//     method: 'POST',
//     url: '/api/register',
//     data: {
//       // 简写形式
//       username,
//       password,
//       repassword
//     }
//   })
// }

/**
 * 登录接口
 */
// export const loginAPI = ({ username, password }) => {
//   return reqAxios({
//     method: 'POST',
//     url: '/api/login',

//     data: {
//       username,
//       password
//     }
//   })
// }

export {
  getMyIntroduce,
}
