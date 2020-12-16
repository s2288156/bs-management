import request from '@/util/request'

export function login(data) {
  return request({
    url: '/ums/member/login',
    method: 'post',
    data
  })
}
