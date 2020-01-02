import axios from 'axios';
import NProgress from 'nprogress';
import { notification, message } from 'antd';
import { routerRedux } from 'dva/router';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api/v1';
// axios.defaults.baseURL = 'http://139.196.80.87:8093/mock/117/';
axios.defaults.withCredentials = true;


axios.interceptors.request.use((config) => {
  NProgress.start();
  return config;
}, (error) => {
  return Promise.reject(error);
});

const ERROR_CODE = {// 1xxx为接口自定义业务错误，252xx为通用错误
  25201: '参数不匹配',
  25202: '参数校验不合格',
};

// 添加一个返回拦截器
axios.interceptors.response.use((response) => {
  // 请求结束，蓝色过渡滚动条消失
  setTimeout(()=>NProgress.done(),200);
  const res = response.data;
  if (res.code !== 0) {
    console.log('request business fail:', res.code);
    return Promise.reject(ERROR_CODE[res.code] || res.msg);
  } else {
    return response.data;
  }
}, (error) => {
  // 请求结束，蓝色过渡滚动条消失
  // 即使出现异常，也要调用关闭方法，否则一直处于加载状态很奇怪
  setTimeout(()=>NProgress.done(),200);
  console.log('request network fail:', error.code);
  return Promise.reject(error);
});

const getCacheItem=(k)=>sessionStorage.getItem("req_cache_"+k);
const setCacheItem=(k,v)=>sessionStorage.setItem("req_cache_"+k,v);

const axiosPromise = (method,cacheSign) => (url, params, data, config) => {
  if(cacheSign && getCacheItem(url)){
    return new Promise((resolve,reject)=>{
      resolve(getCacheItem(url));
    });
  }
  return new Promise((resolve, reject) => {
    const conf = Object.assign({}, {
      params: params,
      data: data,
      method: method,
    }, config);
    console.log('request url:', url, method);
    JSON.stringify(params) !== '{}' && console.log('request params:', JSON.stringify(params));
    JSON.stringify(data) !== '{}' && console.log('request data:', JSON.stringify(data));
    return axios(url, conf)
      .then((res) => {
        if(cacheSign){
          setCacheItem(url,res.data);
        }
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
};

const request = {
  getStorage:axiosPromise('get',true),
  postStorage:axiosPromise('get',true),
  get: axiosPromise('get'),
  post: axiosPromise('post'),
  put: axiosPromise('put'),
  delete: axiosPromise('delete'),
};

export { request };

