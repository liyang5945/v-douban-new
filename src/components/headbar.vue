<template>
  <div class="headbar">
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style lang="sass" type="text/sass">
  .headbar
    position: relative
    .title
      display: block
      height: 40px
      width: 100%
      line-height: 40px
      font-size: 20px
      text-align: center
      color: #fff
      background-color: #39424a
</style>
