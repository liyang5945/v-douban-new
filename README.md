# v-douban-new

个人练手项目，使用Vue.js和豆瓣电影V2版API制作的小项目。
> - 主要功能： 各类电影排行榜、电影详情、影人详情、根据关键字搜索电影或影人、跳转至豆瓣网站查看更多信息、电影排行列表分页、跳页等；
> - 项目描述：重构两年前写的旧版本，使用新版Vue-cli3.0搭建。把原来在vue组件内写的样式改为外部sass文件。重构组件结构，重写部分样式。把原来在组件内写的请求函数分离成API的形式。API有两个版本，vue-resource版和axios版，生产环境用axios版需要使用nginx代理，因为豆瓣服务器没有配置跨域。开发环境可以使用axios版，因为开发环境配置了devServer里的proxy。

# 项目结构

<pre>
├─App.vue
├─main.js
├─views
|   ├─celebrity.vue
|   ├─home.vue
|   ├─more-list.vue
|   └subject.vue
├─utils
|   └request.js
├─styles
|   ├─celebrity.sass
|   ├─component.sass
|   ├─home.sass
|   ├─index.sass
|   ├─more-list.sass
|   └subject.sass
├─router
|   └index.js
├─components
|     ├─back.vue
|     ├─headbar.vue
|     ├─loading.vue
|     ├─rating.vue
|     ├─search.vue
|     ├─simple-list.vue
|     └simple-movie-info.vue
├─assets
|   ├─icon-back.png
|   ├─icon-close.png
|   └icon-search.png
├─api
|  └douban.js
</pre>


### 调用接口

- [https://api.douban.com/v2/movie/search?q={text}](https://api.douban.com/v2/movie/search?q=%7Btext%7D) 电影搜索api；
- [https://api.douban.com/v2/movie/in_theaters](https://api.douban.com/v2/movie/in_theaters) 正在上映的电影；
- [https://api.douban.com/v2/movie/coming_soon](https://api.douban.com/v2/movie/coming_soon) 即将上映的电影；
- [https://api.douban.com/v2/movie/top250](https://api.douban.com/v2/movie/top250) 电影排行榜；
- [https://api.douban.com/v2/movie/us_box](https://api.douban.com/v2/movie/us_box)  北美票房榜；
- [https://api.douban.com/v2/movie/subject/:id](https://api.douban.com/v2/movie/subject/:id) 电影详情条目；
- [https://api.douban.com/v2/movie/celebrity/:id](https://api.douban.com/v2/movie/celebrity/:id) 影人详情条目。

由于豆瓣API的限制，不能使用ajax的方式获取，所以引入vue-resource，使用jsonp的形式去获取。

北美票房榜返回的数据结构跟其他的不一样，也不能返回指定数量和起始位置，所以没有翻页功能。

# 首先安装npm依赖包
npm install

# 在开发环境运行项目
npm run dev

# 针对发布环境编译(压缩代码)
npm run build

