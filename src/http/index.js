import axios from 'axios'
import qs from 'qs' // 解析参数
import { MessageBox, Message } from 'element-ui';
import router from '../router/index'

const service = axios.create({
	timeout: 20000,
	withCredentials: true,
})

let count = 0 // 计数器


// 添加请求拦截器
service.interceptors.request.use(function (config) {// 在发送请求之前做些什么
  let token = sessionStorage.getItem("token")
  console.log(config, '‘config')
	if (token) {
		//将token放到请求头发送给服务器,将tokenkey放在请求头中
		config.headers.token = token; 
  }
  if (config.url === '/json/login.json') {// 请求接口为登录的时候
    count = 0
  } 
  return config;
}, function (error) {// 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use(
  function (response) {// 对响应数据做点什么
    if (response.status === 200) {
      const _data = response.data
      if (_data.code == 1000) {
        return Promise.resolve(response)
      } else if (_data.code == 1001) { //  登录过期
        if (count === 0) { // 为0弹出错误
          Message({
            showClose: true,
            message: '登录过期请重新登录',
            type: 'error',
          });
        }
        count++
        router.push({name: 'Login' })
        return Promise.reject()
      } else {
        return Promise.reject()
      }
    }

    
  }, 
  function (error) {// 对响应错误做点什么
    return Promise.reject(error);
  });


  // get 请求
export const get = (url, params) => {
  return service.get(url, {params: params}).then(res => res.data)
}