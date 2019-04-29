<template>
  <div class="home-wrapper">
    <headbar :title="homeTitle"></headbar>
    <search></search>
    <div v-for="(item,index) in types" class="list-wrapper">
      <div class="list-head">
        <h2 class="category-title">{{item.title}}</h2>
        <router-link class="more" :to="'/'+ item.category">更多></router-link>
      </div>
      <simple-list :category="item.category"></simple-list>
    </div>

  </div>
</template>

<script>
  import simpleList from '../components/simple-list'
  import headbar from '../components/headbar'
  import search from '../components/search'


  export default {
    data() {
      return {
        types: [
          {
            title: "正在热映",
            category: "in_theaters"
          },
          {
            title: "即将上映",
            category: "coming_soon"
          },
          {
            title: "好评排行榜",
            category: "top250"
          },
          {
            title: "北美票房榜",
            category: "us_box"
          }],
        homeTitle: '豆瓣电影',

      }
    },
    methods: {},
    components: {
      simpleList,
      headbar,
      search
    }
  }
</script>

