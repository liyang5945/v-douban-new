import request from '@/utils/request'

export function getMovieList(category, count, start) {
  return request({
    url: '/movie/' + category + '?count=' + count + '&start=' + start,
    method: 'get',
  })
}

export function getSubject(subjectId) {
  return request({
    url: '/movie/subject/' + subjectId,
    method: 'get',
  })
}


export function getCelebrity(celebrityID) {
  return request({
    url: 'movie/celebrity/' + celebrityID,
    method: 'get',
  })
}

export function getSearchList(searchText, count, start) {
  return request({
    url: 'movie/search?q=' + searchText + '&count=' + count + '&start=' + start,
    method: 'get',
  })
}



