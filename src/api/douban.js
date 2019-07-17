import request from '@/utils/request'

const APIKEY = '0df993c66c0c636e29ecbb5344252a4a';

export function getMovieList(category, count, start) {
  return request({
    url: '/movie/' + category + '?apikey=' + APIKEY + '&count=' + count + '&start=' + start,
    method: 'get',
  })
}

export function getSubject(subjectId) {
  return request({
    url: '/movie/subject/' + subjectId + '?apikey=' + APIKEY,
    method: 'get',
  })
}

export function getCelebrity(celebrityID) {
  return request({
    url: 'movie/celebrity/' + celebrityID + '?apikey=' + APIKEY,
    method: 'get',
  })
}

export function getSearchList(searchText, count, start) {
  return request({
    url: 'movie/search?q=' + searchText + '&apikey=' + APIKEY + '&count=' + count + '&start=' + start,
    method: 'get',
  })
}



