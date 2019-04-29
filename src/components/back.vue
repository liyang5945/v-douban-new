<template>
  <div @click="back" class="btn-back">
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

