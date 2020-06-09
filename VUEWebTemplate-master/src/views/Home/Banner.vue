<template>
  <div>
    <!-- banner轮播图 -->
    <el-carousel indicator-position="none" id="el-carousel">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img :src="item.img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return{
       banners: [
        {
          img: require("../../assets/img/1.jpg")
        },
        {
           img: require("../../assets/img/2.jpg")
        },
        {
          img: require("../../assets/img/3.jpg")
        },
        {
          img: require("../../assets/img/4.jpg")
        },
        {
          img: require("../../assets/img/5.jpg")
        },
        {
           img: require("../../assets/img/6.jpg")
        }
      ]
    }
  }
}
</script>

<style>

</style>