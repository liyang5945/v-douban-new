<template>
  <div class="subject">
    <headbar :title="subject.title"></headbar>
    <back></back>
    <div v-if="hasData" class="main-info">
      <div class="head-wrapper">
        <div class="head-box">
          <h2 class="subject-title">{{subject.title}}</h2>
          <p class="subject-area"><span class="countries">{{subject.countries[0]}}</span>·<span class="year">{{subject.year}}</span>
          </p>
          <p class="like-text"><span class="red-text">{{subject.wish_count}}</span> 人想看 <span class="red-text">{{subject.collect_count}}</span>
            条评论</p>
        </div>
        <img class="movie-cover" :src="subject.images.medium">
        <div class="head-bg">
          <img :src="subject.images.large" width="100%">
        </div>
      </div>
      <div class="movie-info">
        <h2 class="original_title">{{subject.original_title}}</h2>
        <p class="rate">评分
          <rating class="rate-inline" :rating="subject.rating.average"></rating>
        </p>
        <p class="directors">导演 <span class="director" v-for="director in subject.directors">{{director.name}} </span>
        </p>
        <p class="casts">演员 <span class="actor" v-for="(actor,index) in subject.casts">{{actor.name}}<b
          v-if="index!==subject.casts.length-1"> / </b></span></p>
        <p class="genres">类型 <span class="genre" v-for="(genre,index) in subject.genres">{{genre}}<b
          v-if="index!==subject.genres.length-1">、</b></span></p>
      </div>
      <div class="movie-desc">
        <h2 class="desc-title">剧情简介</h2>
        <p class="desc-text">{{subject.summary}}</p>
      </div>
      <div class="movie-desc celebrity">
        <h2 class="desc-title">影人</h2>
        <div class="celebrity-box">
          <div v-for="cast in subject.casts" class="celebrity-link">
            <router-link :to="'../celebrity/'+cast.id">
              <img v-if="cast.avatars" :src="cast.avatars.medium" alt="">
              <span class="celebrity-name">主演:{{cast.name}}</span>
            </router-link>
          </div>
          <div v-for="cast in subject.directors" class="celebrity-link">
            <router-link :to="'../celebrity/'+cast.id">
              <img v-if="cast.avatars" :src="cast.avatars.medium" alt="">
              <span class="celebrity-name">导演:{{cast.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="more-info">
        <a class="go-douban" :href="subject.alt">前往豆瓣查看更多信息>></a>
      </div>
    </div>
    <div v-if="loading" class="loading-wrapper">
      <loading></loading>
    </div>
  </div>
</template>

<script>
  import headbar from '../components/headbar.vue'
  import back from '../components/back.vue'
  import rating from '../components/rating.vue'
  import loading from '../components/loading.vue'

  import {getSubject} from '../api/douban.js'


  export default {
    data() {
      return {
        subjectId: '',
        subject: {},
        hasData: false,
        loading: true
      }
    },
    watch: {
      '$route': 'getSubject'
    },
    methods: {
      getSubject() {
        getSubject(this.subjectId).then(response => {
          console.log(response);
          this.subject = response.data;
          this.loading = false;
          this.hasData = true;
        })
      },
      getSubjectId() {
        console.log(this.$route.params.id);
        this.subjectId = this.$route.params.id;
      },
    },
    created() {
      this.getSubjectId();
      this.getSubject();
    },
    components: {
      headbar,
      back,
      rating,
      loading
    }
  }
</script>

