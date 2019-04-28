<template>
  <div @click="back" class="back">
    <svg t="1493518919675" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
         xmlns="http://www.w3.org/2000/svg" p-id="1428" xmlns:xlink="http://www.w3.org/1999/xlink" width="200"
         height="200">
      <path
        d="M350.8436 510.469134 744.849232 116.562762c11.656481-11.651364 11.656481-30.556946 0-42.208311-11.670807-11.656481-30.568203-11.656481-42.224684 0L289.420669 487.473397c-6.314823 6.314823-8.909927 14.728446-8.374738 22.995737-0.535189 8.267291 2.059915 16.678868 8.374738 22.995737l413.20388 413.104619c5.832845 5.832845 13.470803 8.749268 21.10876 8.749268 7.646144 0 15.281031-2.916423 21.116947-8.749268 11.656481-11.648294 11.656481-30.55183 0-42.199101L350.8436 510.469134z"
        p-id="1429"></path>
    </svg>
  </div>

</template>

<script>
  export default {
    methods:{
      // 返回上一页
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="sass" type="text/sass">
  .back
    position: absolute
    top: 0
    left: 0
    width: 40px
    height: 40px
    line-height: 40px
    svg
      padding: 5px
      width: 30px
      height: 30px
      fill: #fff
</style>
