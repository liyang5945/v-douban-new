<template>
  <div class="simple-list">
    <loading v-if="loading"></loading>
    <div v-if="!movieData.subject" v-for="movieData in subjects" class="movie-item">
      <router-link class="movie-item-link" :to="'subject/'+ movieData.id">
        <img :src="movieData.images.medium">
        <h3 class="movie-title">{{movieData.title}}</h3>
        <div class="rating-wrapper">
          <rating :rating="movieData.rating.average"></rating>
        </div>
      </router-link>
    </div>
    <div v-if="movieData.subject" v-for="movieData in subjects" class="movie-item">
      <router-link class="movie-item-link" :to="'subject/'+ movieData.subject.id">
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
  import rating from './rating'
  import loading from './loading'
  import {getMovieList} from '../api/douban.js'


  export default {
    props: {
      category: {
        type: String
      }
    },
    data() {
      return {
        count: 3,
        startPosition: 0,
        subjects: [],
        loading: true
      }
    },
    methods: {
      getList() {
        getMovieList(this.category, this.count, this.startPosition).then(response => {
          console.log(response.data);
          this.subjects = response.data.subjects.splice(0, 3);
          this.loading = false
        })
      }
    },
    created() {
      this.getList();
    },
    components: {
      rating,
      loading
    }
  }
</script>
