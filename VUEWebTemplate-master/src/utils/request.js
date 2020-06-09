// 请求器实例，挂载于window._request
import axios from 'axios'
import qs from 'qs'
import store from '../store/index'
import {
  prodApi
} from '../../my-config'
import {
  Message
} from 'element-ui'

// const request = axios.create({
//   baseURL: 'http://jsonplaceholder.typicode.com/',
//   timeout: 12000,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// })
// request.interceptors.request.use(
//   config => {
//     console.log(config.baseURL);

//     config.headers['token'] = store.state.token
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }

// )
// request.interceptors.response.use(
//   response => {
//     console.log(response.data);

//     return response
//   },
//   error => {
//     console.log(error.message);
//     Message.error({
//       message: error.message
//     })

//     return Promise.reject(error)
//   }
// )



var config = {
  timeout: 7000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },

  transformRequest: qs.stringify
}

var axiosInstance = axios.create({
  baseURL:'http://learn.tx2.qrqy.net',

  // baseURL: process.env.NODE_ENV === 'production' ? prodApi : '/api',
  // baseURL: process.env.prodApi,
  ...config
})

axiosInstance.interceptors.request.use(requestDataHandler)
axiosInstance.interceptors.response.use(responseDataHandler)

// 拦截器的写法请参考 @see https://www.kancloud.cn/yunye/axios/234845#_395

// 请求拦截器
function requestDataHandler(req) {
  config => {
      console.log(config.baseURL);

      config.headers['token'] = store.state.token
      return config
    },
    error => {
      return Promise.reject(error)
    }
  return req
}
// 响应拦截器
function responseDataHandler(res) {
  res => {
      console.log(res.data);
      return res
    },
    error => {
      return Promise.reject(error)
    }
  return res.data
}
export default axiosInstance;