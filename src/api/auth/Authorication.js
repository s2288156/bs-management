import request from '@/util/request'

export function login(params) {
  return request({
    url: '/auth/login',
    method: 'post',
    params: params
  })
}
