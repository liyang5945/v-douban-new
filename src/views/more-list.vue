<template>
  <div class="more-list">
    <headbar :title="movieList.title"></headbar>
    <back></back>

    <div v-if="hasList" class="list-box">
      <h3 class="release-date" v-if="movieList.date">日期:{{movieList.date}}</h3>
      <div v-if="!item.subject" v-for="item in movieList.subjects" class="movie-item">
        <simple-movie-info :item="item"></simple-movie-info>
      </div>
      <div v-if="item.subject" v-for="item in movieList.subjects" class="movie-item">
        <simple-movie-info :item="item.subject"></simple-movie-info>
      </div>
      <p v-if="movieList.total"><span>总共{{movieList.total}}条记录</span><span>,第{{currentPage}}/{{Math.ceil(movieList.total/count)}}页</span>
      </p>
      <p v-if="!movieList.total">总共{{movieList.subjects.length}}条记录</p>

      <div v-if="movieList.total" class="go-page-box">
        跳至
        <input class="page-input" v-model="currentPage" type="text">
        页
        <span class="go-btn" @click="goPage">跳转</span>
      </div>

    </div>
    <div v-if="loading" class="loading-wrapper">
      <loading></loading>
    </div>
    <div v-if="movieList.total" class="action-box">
      <a :class=" currentPage===1?'disabled':''" @click="prePage" href="javascript:;" class="action-btn">上一页</a>
      <div class="line"></div>
      <a :class=" currentPage===Math.ceil(movieList.total/count)?'disabled':''" @click="nextPage"
         href="javascript:;" class="action-btn">下一页</a>
    </div>

  </div>
</template>

<script>
  import headbar from '../components/headbar.vue';
  import back from '../components/back.vue';
  import loading from '../components/loading.vue';
  import simpleMovieInfo from '../components/simple-movie-info.vue';

  import {getMovieList, getSearchList} from '../api/douban.js'


  export default {
    data() {
      return {
        category: '',
        count: 5,
        movieList: {},
        loading: true,
        hasList: false,
        currentPage: 1,
        total: 0
      }
    },
    created() {
      this.getCategory()
      this.getList()
    },
    computed: {
      startPosition() {
        return this.count * (this.currentPage - 1);
      },
      searchText() {
        return this.$route.query.q
      }
    },
    methods: {
      getList() {
        this.hasList = false;
        this.loading = true;
        if (this.searchText) {
          getSearchList(this.searchText, this.count, this.startPosition).then(response => {
            console.log(response);
            this.movieList = response.data
            this.loading = false
            this.hasList = true
          })
        } else {
          getMovieList(this.category, this.count, this.startPosition).then(response => {
            console.log(response);
            this.movieList = response.data
            this.loading = false
            this.hasList = true
          })
        }
      },
      getCategory() {
        this.category = this.$route.params.category;
      },

      // 上一页，当为第一页时不操作
      prePage() {
        if (this.currentPage <= 1) {
          return null
        } else {
          this.currentPage -= 1;
          this.getList();
        }
      },
      // 下一页，当为最后一页时不操作

      nextPage() {
        // console.log(Math.ceil(this.movieList.total / this.count));
        // 到最后一页时禁止点击
        if (this.currentPage === Math.ceil(this.movieList.total / this.count)) {
          return null
        } else {
          this.currentPage += 1;
          this.getList();
        }
      },
      goPage() {
        this.getList();
      }
    },
    components: {
      back,
      headbar,
      loading,
      simpleMovieInfo
    }
  }
</script>
