<template>
  <div class="head-bar">
    <h1 class="page-title">{{title}}</h1>
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

