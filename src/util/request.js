import axios from 'axios';
import {Message} from "element-ui";
import qs from 'qs'

const service = axios.create({
  baseURL: '/',
  timeout: 10000,
  transformRequest: function (data) {
    data = qs.stringify(data)
    return data
  }
});

// 后台接口业务成功
const SUCCESS = '00000';

service.interceptors.response.use(
  res => {
    const returnCode = res.data.returnCode;
    const returnMsg = res.data.returnMsg;

    if (returnCode !== SUCCESS) {
      Message({
        message: returnMsg,
        type: 'error',
        duration: 3 * 1000
      });
      return Promise.reject(new Error(returnMsg));
    }
    return res.data;
  },
  error => {
    console.log("onRejected >>" + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
  }
)

export default service
