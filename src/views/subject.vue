<template>
  <div class="subject">
    <headbar :title="subject.title"></headbar>
    <back></back>
    <div v-if="hasData" class="main-info">
      <div class="head-wrapper">
        <div class="head">
          <h2 class="title">{{subject.title}}</h2>
          <p class="area"><span class="countries">{{subject.countries[0]}}</span>·<span class="year">{{subject.year}}</span></p>
          <p class="like"><span class="wish">{{subject.wish_count}}</span> 人想看 <span class="collect">{{subject.collect_count}}</span> 条评论</p>
          <img class="movie-cover" :src="subject.images.medium" >
        </div>
        <div class="headbg">
          <img  :src="subject.images.large" width="100%">
        </div>
      </div>
      <div class="m-info">
        <h2 class="original_title">{{subject.original_title}}</h2>
        <p class="rate">评分 <rating class="pos" :rating="subject.rating.average"></rating></p>
        <p class="directors">导演 <span class="director" v-for="director in subject.directors">{{director.name}} </span></p>
        <p class="casts">演员 <span class="actor" v-for="(actor,index) in subject.casts">{{actor.name}}<b
          v-if="index!==subject.casts.length-1"> / </b></span></p>
        <p class="genres">类型 <span class="genre" v-for="(genre,index) in subject.genres">{{genre}}<b
          v-if="index!==subject.genres.length-1">、</b></span></p>
      </div>
      <div class="desc">
        <h2>剧情简介</h2>
        <p>{{subject.summary}}</p>
      </div>
      <div class="c-list">
        <h2>影人</h2>
        <div class="c-wrapper">
          <div v-for="cast in subject.casts" class="c-link">
            <router-link :to="'../celebrity/'+cast.id">
              <img v-if="cast.avatars" :src="cast.avatars.medium" alt="">
              <span>主演:{{cast.name}}</span>
            </router-link>
          </div>
          <div v-if="" v-for="cast in subject.directors" class="c-link">
            <router-link :to="'../celebrity/'+cast.id">
              <img v-if="cast.avatars" :src="cast.avatars.medium" alt="">
              <span>导演:{{cast.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="more-info">
        <a class="go-douban" :href="subject.alt">前往豆瓣查看更多信息>></a>
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
  import search from '../components/search.vue'
  import back from '../components/back.vue'
  import rating from '../components/rating.vue'
  const subjectUrl = 'https://api.douban.com/v2/movie/subject/';
  export default {
    data(){
      return {
        subject:{},
        hasData:false,
        loading:true
      }
    },
    watch:{
      '$route':'getSubject'
    },
    methods:{
      getSubject(){
        if(this.$route.params.id!==undefined) {
          this.$http.jsonp(subjectUrl + this.$route.params.id).then((response) => {
            this.subject = response.body;
            this.hasData=true;
            this.loading = false;
          });
        }
      }
    },
    created(){
      this.getSubject();
    },
    components: {
      headbar,
      search,
      back,
      rating
    }
  }
</script>

<style lang="sass" type="text/sass">
  .subject
    #loading
      padding: 150px 0
    .head-wrapper
      position: relative
      width: 100%
      height: 200px
      /*overflow: hidden*/
      color: #fff
      background: rgba(0, 0, 0, 0.1)
      .head
        padding: 20px 15px

        .title
          line-height: 30px
          font-size: 24px
          padding-top: 10px
          padding-bottom: 30px
        .area
          line-height: 20px
          font-size: 18px
          padding-bottom: 30px
        .like
          line-height: 20px
          font-size: 16px
          span
            color: red
        .movie-cover
          display: inline-block
          max-width: 120px
          position: absolute
          top: 5px
          right: 10px

      .headbg
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 180px
        overflow: hidden
        z-index: -1
        -webkit-filter: blur(10px)
        filter: blur(10px)
    .m-info
      padding: 20px 15px
      border-bottom: 1px solid #ccc
      .original_title
        line-height: 24px
        font-size: 18px
        padding: 10px 0
      p
        line-height: 24px
        font-size: 18px
        color: #666
        &.rate
          display: block
          position: relative
          .pos
            position: absolute
            top: 3px
            left: 45px
          .average
            padding-left: 85px
        span
          color: #333
    .desc
      padding: 20px 15px
      border-bottom: 1px solid #ccc
      h2
        line-height: 20px
        font-size: 18px
        padding-bottom: 20px
      p
        line-height: 30px
        font-size: 16px
    .c-list
      padding: 20px 5px
      h2
        padding-left: 10px
        line-height: 20px
        font-size: 18px
        padding-bottom: 20px
      .c-wrapper
        width: 100%
        overflow-x: scroll
        white-space: nowrap
        .c-link
          display: inline-block
          vertical-align: top
          width: 160px
          margin-right: 10px
          text-align: center
          overflow: hidden
          img
            display: block
            width: 100%
          span
            display: block
            font-size: 14px
            line-height: 20px
            width: 100%
            text-align: center
    .more-info
      overflow: hidden
      line-height: 30px
      font-size: 16px
      padding: 10px 15px




</style>
