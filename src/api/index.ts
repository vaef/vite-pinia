import axios from 'axios'
import qs from 'qs'
const CODE_200 = [200, '200', 'T'] // ok
const CODE_401 = [401, 40101, '401', '40101'] // token 过期

// 初始化axios实例
const serviceAxios = axios.create({
  baseURL: '',
  timeout: 1000 * 10, // 请求超时时间
  withCredentials: false, // 是否携带cookie
})

// 设置请求拦截
serviceAxios.interceptors.request.use(
  (config) => {
    // 如果开启token认证
    // if (serviceConfig.useTokenAuthorization) {
    //   config.headers.Authorization = localStorage.getItem('token')
    // }

    if (!config.headers['Content-Type']) {
      if (config.method === 'post') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.data = qs.stringify(config.data)
      } else {
        config.headers['Content-Type'] = 'application/json'
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 设置响应拦截
serviceAxios.interceptors.response.use(
  (res) => {
    // let { config, headers } = res
    if (res.status === 200) {
      if (
        CODE_200.includes(res.data.code) ||
        CODE_200.includes(res.data.flag)
      ) {
        return Promise.resolve(res)
      }

      if (CODE_401.includes(res.data.code)) {
        return Promise.reject(res)
      } else if (CODE_200.includes(res.data.code)) {
        return Promise.reject(res)
      }
    } else {
      return Promise.reject(res)
    }

    // let data = res.data
    // 处理自己的业务逻辑，比如判断 token 是否过期等等
    // return data
  },
  (error) => {
    let message = ''
    if (error && error.response) {
      switch (error.response.status) {
        case 302:
          message = '接口重定向了！'
          break
        case 400:
          message = '参数不正确！'
          break
        case 401:
          message = '您未登录，或者登录已经超时，请先登录！'
          break
        case 403:
          message = '您没有权限操作！'
          break
        case 404:
          message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          message = '请求超时！'
          break
        case 409:
          message = '系统已存在相同数据！'
          break
        case 500:
          message = '服务器内部错误！'
          break
        case 501:
          message = '服务未实现！'
          break
        case 502:
          message = '网关错误！'
          break
        case 503:
          message = '服务不可用！'
          break
        case 504:
          message = '服务暂时无法访问，请稍后再试！'
          break
        case 505:
          message = 'HTTP 版本不受支持！'
          break
        default:
          message = '异常问题，请联系管理员！'
          break
      }
    }
    return Promise.reject(message)
  }
)
