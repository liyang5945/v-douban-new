<template>
  <router-link v-if="item" class="movie-link" :to="'../subject/'+item.id">
    <img class="item-pic" :src="item.images.medium">
        <div class="item-desc">
          <h3 class="movie-title">{{item.title}}</h3>
          <div class="rate-wrapper">
            <rating :rating="item.rating.average"></rating>
          </div>
          <p class="desc-text">年份:{{item.subject?item.subject.year:item.year}}</p>
          <p class="desc-text">类型:<span class="genre" v-for="(genre,index) in item.genres">{{genre}}<b
            v-if="index!==item.genres.length-1">、</b></span></p>
          <p class="desc-text">导演: <span class="director" v-for="(d,index) in item.directors">{{d.name}}<b
            v-if="index!==item.directors.length-1">、</b></span></p>
          <p class="desc-text">主演:<span class="actor" v-for="(actor,index) in item.casts">{{actor.name}}<b
            v-if="index!==item.casts.length-1">、</b></span></p>
        </div>
      </router-link>
</template>

<script>
  import rating from './rating.vue';

  export default {
    props:{
      item:{
        type:Object
      }
    },
    components:{
      rating
    }
  }
</script>
