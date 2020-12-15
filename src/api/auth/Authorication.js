import request from '@/util/request'

export function login(params) {
  return request({
    url: '/ums/member/login',
    method: 'post',
    params: params
  })
}
