import axios from 'axios';
import {Message, Notification} from "element-ui";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
  // baseURL: '/api',
  timeout: 10000
});

// 后台接口业务成功
const SUCCESS = '00000';

service.interceptors.response.use(res => {
  console.log(res);
  const code = res.status || 200;
  const returnCode = res.data.returnCode;
  const returnMsg = res.data.returnMsg;

  if (code === 500 || code === 400) {
    // 中央顶部错误信息
    Message({
      message: returnMsg,
      type: 'error'
    })
    return Promise.reject(new Error(returnMsg))
  } else if (code !== 200) {
    // 右侧弹窗通知
    Notification.error({
      title: returnMsg
    })
    return Promise.reject('error')
  } else {
    if (returnCode === SUCCESS) {
      return res.data;
    }
    Message({
      message: returnMsg,
      type: 'error'
    })
    return Promise.reject(new Error(returnMsg))
  }
})

export default service
