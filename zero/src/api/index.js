import requests from "./request";
import reqAxios from '@/utils/axios/axios-instance.js'
/**
 * 注册接口
 * @param {*} param0 {username: 用户名, password: 密码, repassword: 确认密码}
 * @returns Promise对象
 */
// 升级：使用解构赋值传参
export const registerAPI = ({ username, password, repassword }) => {
  return reqAxios({
    method: 'POST',
    url: '/api/register',
    data: {
      // 简写形式
      username,
      password,
      repassword
    }
  })
}

/**
 * 登录接口
 * @param {*} param0 {username: 用户名, password: 密码}
 * @returns Promise对象
 */
export const loginAPI = ({ username, password }) => {
  return reqAxios({
    method: 'POST',
    url: '/api/login',

    data: {
      username,
      password
    }
  })
}

