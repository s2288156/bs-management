import request from '@/utils/request'

export function currentAll() {
  return request({
    url: '/role/current/all',
    method: 'get'
  })
}
