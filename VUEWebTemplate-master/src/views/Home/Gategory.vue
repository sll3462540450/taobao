<template>
  <div class="index-category">
    <div v-for="(list,index) in lists" :key="index" class="category">
      <icon-svg :icon-class="list.icon" class="iconfont" />
       <label>{{list.title}}</label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          title: "淘宝",
          icon: "taobao",
        },
        { title: "今日爆款", icon: "jinribaokuan"},
        { title: "每日返现", icon: "meirifanxianbudaitubiao"},
        { title: "今日爆款", icon: "jinribaokuan1"},
        {
          title: "充值中心",
          icon: "chongzhizhongxin"
        },
        {
          title: "天猫促销",
          icon: "tianmao"
        },
        { title: "购物车", icon: "tianmaochaoshigouwuche"},
        { title: "打折", icon: "dazhe" }
      ]
    };
  }
};
</script>
<style scoped>
</style>