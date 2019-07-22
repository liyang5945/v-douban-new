import request from '@/utils/request'


import Vue from 'vue'

const API_URL = 'http://api.douban.com/v2/movie/';

const API_KEY = '0df993c66c0c636e29ecbb5344252a4a';

// axios版本API 因为豆瓣服务端未配置跨域请求，需要nginx代理才能使用

/*export function getMovieList(category, count, start) {
  return request({
    url: '/movie/' + category + '?apikey=' + API_KEY + '&count=' + count + '&start=' + start,
    method: 'get',
  })
}
export function getSubject(subjectId) {
 return request({
   url: '/movie/subject/' + subjectId + '?apikey=' + API_KEY,
   method: 'get',
 })
}

export function getCelebrity(celebrityID) {
 return request({
   url: 'movie/celebrity/' + celebrityID + '?apikey=' + API_KEY,
   method: 'get',
 })
}

export function getSearchList(searchText, count, start) {
 return request({
   url: 'movie/search?q=' + searchText + '&apikey=' + API_KEY + '&count=' + count + '&start=' + start,
   method: 'get',
 })
}*/

// vue-resources版本 API

/*电影列表*/
export function getMovieList(category, count, start) {

  return Vue.http.jsonp(API_URL + category + '?apikey=' + API_KEY + '&count=' + count + '&start=' + start)
}

/*电影详情*/

export function getSubject(subjectId) {


  return Vue.http.jsonp(API_URL + 'subject/' + subjectId + '?apikey=' + API_KEY)
}

/*名人详情*/

export function getCelebrity(celebrityID) {

  return Vue.http.jsonp(API_URL + 'celebrity/' + celebrityID + '?apikey=' + API_KEY)

}

/*搜索*/

export function getSearchList(searchText, count, start) {

  return Vue.http.jsonp(API_URL + 'search?q=' + searchText + '&apikey=' + API_KEY + '&count=' + count + '&start=' + start)

}



