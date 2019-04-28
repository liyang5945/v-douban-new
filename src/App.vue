<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import search from './components/search';
  import simpleList from './views/simple-list';
  import moreList from './views/more-list';
  export default {
    components: {
      search,
      simpleList,
      moreList
    }
  }
</script>

<style lang="sass" type="text/sass">
  .fade-enter-active, .fade-leave-active
    transition: all .3s
    .fade-enter, .fade-leave-active
      transform: translateX(-100%)
</style>
