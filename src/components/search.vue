<template>
  <div class="search-wrapper">
    <div @click="toggleSearch" class="toggle-search-btn">

    </div>

    <div v-show="showSearch" class="search-box">
      <span @click.stop="toggleSearch" class="btn-text-back">返回</span>
      <input class="text-input" type="text" v-model="searchText" placeholder="请输入关键字" @keyup.enter="submit">
      <span class="btn-search" @click="submit">搜索</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showSearch: false,
        searchText: ""
      }
    },
    methods: {
      toggleSearch() {
        this.showSearch = !this.showSearch;
      },
      submit() {
        // this.$router.go({path:"/search/q="+ this.q})
        this.$router.push({path: "/search", query: {q: this.searchText}})
      }
    }
  }
</script>

