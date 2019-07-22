<template>
  <div class="celebrity">
    <headbar :title="celebrity.name"></headbar>
    <back></back>
    <div v-if="hasData" class="c-main-info">
      <div class="c-head-wrapper clearfix">
        <img class="avatar-img" :src="celebrity.avatars.medium">

        <div class="c-desc-box">
          <h2 class="celebrity-name">{{celebrity.name}}</h2>
          <p class="c-desc">性别 {{celebrity.gender}}</p>
          <p class="c-desc">别名 <span>{{celebrity.aka[0]}}</span></p>
          <p class="c-desc">英文名 {{celebrity.name_en}}</p>
          <p class="c-desc">出生地 {{celebrity.born_place}}</p>
          <a class="more-info-link" :href="celebrity.mobile_url">查看更多信息>></a>
        </div>
        <div class="c-head-bg">
          <img :src="celebrity.avatars.large" width="100%">
        </div>
      </div>
      <div class="works">
        <h2>代表作品</h2>
        <div v-for="work in celebrity.works" class="work">
          <simple-movie-info :item="work.subject"></simple-movie-info>
        </div>
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
  import loading from '../components/loading.vue'
  import simpleMovieInfo from '../components/simple-movie-info.vue';

  import {getCelebrity} from '../api/douban.js'

  export default {
    data(){
      return{
        celebrityId: '',
        celebrity:{},
        hasData:false,
        loading:true
      }
    },
    methods:{
      getCelebrity(){
        if(this.$route.params.id!==undefined) {
          getCelebrity(this.celebrityId).then(response => {
            this.celebrity = response.data
            this.loading = false
            this.hasData = true
          })
        }
      },
      getCelebrityId() {
        console.log(this.$route.params.id);
        this.celebrityId = this.$route.params.id;
      },
    },
    created(){
      this.getCelebrityId();
      this.getCelebrity();
    },
    components:{
      headbar,
      back,
      loading,
      simpleMovieInfo
    }
  }
</script>
