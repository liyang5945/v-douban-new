<template>
    <div class="home">
        <headbar :title="homeTitle"></headbar>
        <search></search>
        <div v-for="(item,index) in types" class="list-wrapper">
            <h2 class="category-title">{{item.title}}</h2>
            <router-link class="more" :to="'/'+ item.category">更多></router-link>
            <simple-list :category="item.category"></simple-list>
            <split v-show="index!==types.length-1"></split>
        </div>

    </div>
</template>

<script>
  import simpleList from './simple-list'
  import split from '../components/split'
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
      split,
      simpleList,
      headbar,
      search
    }
  }
</script>

<style lang="sass" type="text/sass">
    .home
        .category-title
            padding-left: 10px
            display: inline-block
            height: 50px
            width: 60%
            line-height: 50px
            font-size: 18px
        .more
            float: right
            display: inline-block
            width: 30%
            height: 50px
            line-height: 50px
            font-size: 18px
            text-align: right
            padding-right: 10px
            color: #1c78ca


</style>
