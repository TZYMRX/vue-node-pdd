import axios from "axios";

// export default function ajax(url = '', params = {}, type = 'GET') {
//   // 定义promise对象
//   let promise;
//   return new Promise((resolve, reject) => {
//     // 判断请求方式
//     if ('GET' === type) {
//       // 拼接字符串
//       let paramsStr = ''
//       Object.keys(params).forEach(key => {
//         paramsStr += key + '=' + params[key] + '&'
//       })
//       // 过滤最后的 &
//       if (paramsStr !== '') {
//         paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
//       }
//       // 拼接完整路径
//       url += '?' + paramsStr
//
//       // 发送GET请求
//       promise = axios.get(url)
//     } else if ('POST' === type) {
//       promise = axios.post(url, params)
//     }
//
//     // 返回结果
//     promise.then(res => {
//       resolve(res.data)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
  })
}