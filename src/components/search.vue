<template>
  <div class="search-wrapper">
    <svg @click="toggleSearch" t="1493519075393" class="icon" style="" viewBox="0 0 1025 1024" version="1.1"
         xmlns="http://www.w3.org/2000/svg" p-id="2634" xmlns:xlink="http://www.w3.org/1999/xlink" width="200.1953125"
         height="200">
      <path
        d="M1024.240941 966.294588C1024.240941 966.294588 966.836706 1023.698824 966.836706 1023.698824 966.836706 1023.698824 663.250824 719.992471 663.250824 719.992471 593.197176 777.547294 503.597176 812.122353 405.865412 812.122353 181.729882 812.122353 0 630.302118 0 406.076235 0 181.820235 181.729882 0.030118 405.865412 0.030118 630.031059 0.030118 811.760941 181.820235 811.760941 406.076235 811.760941 503.326118 777.517176 592.504471 720.504471 662.437647 720.504471 662.437647 1024.240941 966.294588 1024.240941 966.294588ZM406.829176 60.536471C215.552 60.536471 60.506353 215.431529 60.506353 406.528 60.506353 597.624471 215.552 752.519529 406.829176 752.519529 598.136471 752.519529 753.182118 597.624471 753.182118 406.528 753.182118 215.431529 598.136471 60.536471 406.829176 60.536471Z"
        p-id="2635"></path>
    </svg>
    <div v-show="showSearch" class="search">
      <button @click.stop="toggleSearch" class="btn-back">返回</button>
      <input type="text" v-model="q" placeholder="请输入关键字" @keyup.enter="submit">
      <button class="btn-search" @click="submit">搜索</button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        showSearch: false,
        q:""
      }
    },
    methods: {
      toggleSearch(){
        this.showSearch = !this.showSearch;
      },
      submit(){
//        this.$router.go({path:"/search/q="})
        this.$router.push({path:"/search",query:{q:this.q}})
      }
    }
  }
</script>

<style lang="sass" type="text/sass">
  .search-wrapper
    position: absolute
    top: 0
    right: 0
    width: 40px
    height: 40px
    line-height: 40px
    svg
      padding: 5px
      width: 30px
      height: 30px
      fill: #fff
    .search
      height: 40px
      width: 100%
      position: fixed
      top: 0
      left: 0
      /*display: none*/
      background-color: #39424a
      display: flex
      input
        float: left
        flex: 1
        padding-left: 10px
        margin: 4px 10px
        font-size: 16px
        border: 1px solid #ddd
        border-radius: 15px
        outline-style: none
        color: #ffffff
        height: 30px
        width: 50%
        line-height: 30px
        background-color: rgba(0, 0, 0, 0.2)
      button
        width: 60px
        height: 40px
        line-height: 40px
        font-size: 16px
        color: #fff
        border: none
        outline-style: none
        background-color: rgba(0, 0, 0, 0)


</style>
