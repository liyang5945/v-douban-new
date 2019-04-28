<template>
  <div class="s-list">
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
    <div v-if="!movieData.subject" v-for="movieData in subjects" class="info">
      <router-link :to="'subject/'+ movieData.id">
        <img :src="movieData.images.medium">
        <h3 class="movie-title">{{movieData.title}}</h3>
        <div class="rating-wrapper">
          <rating :rating="movieData.rating.average"></rating>
        </div>
      </router-link>
    </div>
    <div v-if="movieData.subject" v-for="movieData in subjects" class="info">
      <router-link :to="'subject/'+ movieData.subject.id">
        <img :src="movieData.subject.images.medium">
        <h3 class="movie-title">{{movieData.subject.title}}</h3>
        <div class="rating-wrapper">
          <rating :rating="movieData.subject.rating.average"></rating>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import rating from '../components/rating'
  const listUrl = 'http://api.douban.com/v2/movie/';
  export default {
    props:{
      category:{
        type:String
      }
    },
    data(){
      return{
        subjects: [],
        loading:true
      }
    },
    methods:{
      getData(){
        this.$http.jsonp(listUrl + this.category+'?count=3').then((response) => {
          this.subjects = response.body.subjects;
          this.subjects = this.subjects.splice(0,3);
          this.loading = false;
        });
      }
    },
    created(){
      this.getData();
    },
    components:{
      rating
    }
  }
</script>

<style lang="sass" type="text/sass">
  .s-list
    display: flex
    .info
      text-align: center
      box-sizing: border-box
      margin-bottom: 10px
      width: 33.3%
      float: left
    .rating-wrapper
      position: relative
      left: 50%
      width: 80px
      margin-left: -55px

    img
      height: 150px
    .movie-title
      height: 30px
      line-height: 30px
      font-size: 14px
</style>
