<template>
  <div  class="celebrity">
    <headbar :title="celebrity.name"></headbar>
    <back></back>
    <div v-if="hasData" class="c-main-info">
      <div class="c-head-wrapper">
        <div class="c-head">
          <img class="avatar" :src="celebrity.avatars.medium" >
          <div class="c-desc">
            <h2 class="title">{{celebrity.name}}</h2>
            <p>性别 {{celebrity.gender}}</p>
            <p>别名  <span>{{celebrity.aka[0]}}</span></p>
            <p>英文名  {{celebrity.name_en}}</p>
            <p>出生地 {{celebrity.born_place}}</p>
            <a class="more-info" :href="celebrity.mobile_url">查看更多信息>></a>
          </div>
        </div>
        <div class="c-headbg">
          <img :src="celebrity.avatars.large" width="100%">
        </div>
      </div>
      <div class="works">
        <h2>代表作品</h2>
        <div v-for="work in celebrity.works" class="work">
          <movie-detail :item="work.subject"></movie-detail>
        </div>
      </div>
    </div>
    <div v-if="loading"  id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div class="object"></div>
          <div class="object"></div>
          <div class="object"></div>
          <div class="object"></div>
          <div class="object"></div>
          <div class="object"></div>
          <div class="object"></div>
          <div class="object"></div>
          <div class="object"></div>
          <div class="object"></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import headbar from '../components/headbar.vue'
  import back from '../components/back.vue'
  import rating from '../components/rating.vue'
  import movieDetail from './movie-detail.vue'
  const celebrityUrl = 'https://api.douban.com/v2/movie/celebrity/';
  export default {
    data(){
      return{
        celebrity:{},
        hasData:false,
        loading:true
      }
    },
    watch:{
      '$route':'getCelebrity'
    },
    methods:{
      // 通过jsonp方法获取影人详细信息
      getCelebrity(){
        if(this.$route.params.id!==undefined) {
          this.$http.jsonp(celebrityUrl + this.$route.params.id).then((response) => {
            this.celebrity = response.body;
            this.hasData=true;
            this.loading = false;
          });
        }
      }
    },
    created(){
      this.getCelebrity();
    },
    components:{
      headbar,
      back,
      rating,
      movieDetail
    }
  }
</script>

<style lang="sass" type="text/sass">
  .celebrity
    #loading
      padding: 150px 0
    .c-head-wrapper
      position: relative
      width: 100%
      height: 240px
      border-bottom: 1px solid #ccc
      /*overflow: hidden*/
      color: #fff
      .c-head
        padding: 20px 15px
        .avatar
          display: inline-block
          max-width: 150px
        .c-desc
          position: absolute
          left: 180px
          .title
            line-height: 24px
            font-size: 24px
            padding: 10px 0
          p
            line-height: 30px
            font-size: 16px
          .more-info
            line-height: 30px
            font-size: 16px
            color: #ddd
        .avatar
          position: absolute
          left:  15px
          top:  20px
      .c-headbg
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 240px
        overflow: hidden
        z-index: -1
        -webkit-filter: blur(10px)
        filter: blur(10px)
    .works
      padding: 20px 15px
      h2
        line-height: 30px
        font-size: 24px
        padding-bottom: 10px
      .work
        padding: 10px 0
        border-top: 1px solid #ccc

</style>
