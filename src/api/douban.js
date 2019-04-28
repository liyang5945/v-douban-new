import request from '@/utils/request'

export function getSubject(count,start) {
  return request({
    url: '/subject',
    method: 'get',
    params:{count,start}
  })
}

export function getMovieList(count,start) {
  return request({
    url: '/movie/in_theaters',
    method: 'get',
    params:{count,start}
  })
}





export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

