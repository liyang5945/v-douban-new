<template>
  <div @click="setStar" class="rating">
    <div class="star b-star">
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
    </div>
    <div ref="star" class="star t-star">
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
      <svg viewBox="0 0 500 500">
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon>
      </svg>
    </div>
    <span class="num">{{rating}}</span>
  </div>
</template>

<script>
  export default {
    props:{
      rating:{
        type:Number
      }
    },
    watch:{
      'rating':'setStar'
    },
    methods:{
      setStar(){
        this.$refs.star.style.width = (parseFloat(this.rating)/10 * 80)+'px';
      }
    },
    created(){
      this.$nextTick(()=>{
        this.setStar();
      });
    }
  }

</script>

<style lang="sass" type="text/sass">
  .rating
    position: relative
    height: 16px
    width: 80px
    .star
      position: absolute
      display: flex
      top: 0
      left: 0
      height: 100%
      width: 100%
      overflow: hidden
      fill: #ddd
      &.t-star
        fill: red
      svg
        height: 16px
        flex: none
    .num
      position: absolute
      color: #000
      display: block
      top: 2px
      left: 90px
      height: 16px
      line-height: 16px
      vertical-align: bottom
      font-size: 14px





</style>
