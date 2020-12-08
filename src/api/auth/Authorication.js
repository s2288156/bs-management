import request from '@/util/request'

export function login(params) {
  return request({
    url: '/auth/oauth/token',
    method: 'post',
    params: params
  })
}
