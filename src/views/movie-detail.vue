<template>
      <router-link v-if="item" class="m-link" :to="'../subject/'+item.id">
        <img class="pic" :src="item.images.medium">
        <div class="item-desc">
          <h3 class="title">{{item.title}}</h3>
          <div class="r-wrapper">
            <rating :rating="item.rating.average"></rating>
          </div>
          <p>年份:{{item.subject?item.subject.year:item.year}}</p>
          <p>类型:<span class="genre" v-for="(genre,index) in item.genres">{{genre}}<b
            v-if="index!==item.genres.length-1">、</b></span></p>
          <p>导演: <span class="director" v-for="(d,index) in item.directors">{{d.name}}<b
            v-if="index!==item.directors.length-1">、</b></span></p>
          <p>主演:<span class="actor" v-for="(actor,index) in item.casts">{{actor.name}}<b
            v-if="index!==item.casts.length-1">、</b></span></p>
        </div>
      </router-link>
</template>

<script>
  import rating from '../components/rating.vue';

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

<style lang="sass" type="text/sass">
  .m-link
    position: relative
    display: flex
    width: 100%
    height: 100%
    .pic
      flex: 0 0 100px
      width: 100px
      height: 150px
    .item-desc
      flex: 1
      padding-left: 20px
      overflow: hidden
      p
        line-height: 24px
        font-size: 16px
      .r-wrapper
        padding-top: 6px
        padding-bottom: 2px
</style>
