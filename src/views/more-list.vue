<template>
    <div class="more-list">
        <headbar :title="movieList.title"></headbar>
        <back></back>

        <div v-if="hasList" class="list">
            <h3 class="date" v-if="movieList.date">日期:{{movieList.date}}</h3>
            <div v-if="!item.subject" v-for="item in movieList.subjects" class="item">
                <movie-detail :item="item"></movie-detail>
            </div>
            <div v-if="item.subject" v-for="item in movieList.subjects" class="item">
                <movie-detail :item="item.subject"></movie-detail>
            </div>
            <p v-if="movieList.total"><span>总共{{movieList.total}}条记录</span><span>,第{{currentPage}}/{{Math.ceil(movieList.total/count)}}页</span>
            </p>
            <p v-if="!movieList.total">总共{{movieList.subjects.length}}条记录</p>

            <div v-if="movieList.total" class="go">
                跳至
                <input v-model="currentPage" type="text">
                页
                <button @click="goPage">跳转</button>
            </div>

        </div>

        <div v-if="loading" id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                </div>
            </div>
        </div>
        <div v-if="movieList.total" class="action">
            <a :class="currentPage===1?'disabled':''" @click="prePage" href="javascript:;" class="pre">上一页</a>
            <div class="line"></div>
            <a :class="currentPage===Math.ceil(movieList.total/count)?'disabled':''" @click="nextPage"
               href="javascript:;" class="next">下一页</a>
        </div>

    </div>
</template>

<script>
  import headbar from '../components/headbar.vue';
  import back from '../components/back.vue';
  import movieDetail from './movie-detail';

  import {getMovieList}  from '../api/douban.js'


  export default {
    data() {
      return {
        movieList: {},
        loading: true,
        hasList: false,
        currentPage: 1,
        count: 10,
        startPosition: 0,
        total: 0
      }
    },
    created() {
      // this.getData();
      this.getList()
    },
    // watch: {
    //   '$route': 'getData',
    // },
    methods: {
      getList() {
        getMovieList().then(response => {
          console.log(response);
          this.movieList = response.data
          this.loading = false
          this.hasList = true
        })
      },


      // 上一页，当为第一页时不操作
      prePage() {
        if (this.currentPage <= 1) {
          return;
        } else {
          this.currentPage -= 1;
          this.getData();
        }
      },
      // 下一页，当为最后一页时不操作

      nextPage() {
        console.log(Math.ceil(this.movieList.total / this.count));
        if (this.currentPage >= Math.ceil(this.movieList.total / this.count)) {
          return;
        } else {
          this.currentPage += 1;
          this.getData();
        }
      },
      goPage() {
        this.getData();
      }
    },
    components: {
      back,
      headbar,
      movieDetail
    }
  }
</script>

<style lang="sass" type="text/sass">
    .more-list
        #loading
            padding: 150px 0
        .list
            padding: 20px 15px 10px 15px
            position: relative
            .date
                padding-bottom: 10px
                line-height: 20px
                font-size: 18px
            .go
                padding-top: 10px
                line-height: 20px
                font-size: 16px
                button
                    width: 40px
                    height: 20px
                    line-height: 20px
                    font-size: 16px
                    padding: 0
                    box-sizing: border-box
                    background-color: #fff
                    border: 1px solid #ff4401
                    color: #ff4401
                    outline-style: none
                input
                    position: relative
                    top: -1px
                    box-sizing: border-box
                    width: 30px
                    height: 20px
                    font-size: 16px
                    outline-style: none
                    border: 1px solid #ccc
                    display: inline-block
        .item
            padding: 10px 0
            overflow: hidden
            border-top: 1px solid #ccc
        .action
            position: relative
            display: flex
            a
                flex: 1
                text-align: center
                height: 30px
                line-height: 30px
                background-color: #eee
                color: #1c78ca
                &.disabled
                    color: #aaa
                    cursor: not-allowed
            .line
                position: absolute
                top: 8px
                left: 50%
                width: 1px
                height: 16px
                padding: 8px 0
                box-sizing: border-box
                border-right: 1px solid #4a5259


</style>
