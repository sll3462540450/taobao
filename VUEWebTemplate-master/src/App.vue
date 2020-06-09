<template>
  <div>
    <div class="nav-bottom">
      <router-link :to="list.url" v-for="(list,index) in lists" :key="index">
        <i class="iconfont" :class="list.icon" />
        <label>{{list.title}}</label>
      </router-link>
    </div>
    <keep-alive>
      <transition name="fadeMove">
        <router-view v-if="$route.meta.keepAlive" />
      </transition>
    </keep-alive>
    <transition name="fadeMove">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          title: "首页",
          url: "/home",
          icon: "icon-shouye"
        },
        { title: "发现", url: "/find", icon: "icon-weitao" },
        { title: "订单", url: "/index", icon: "icon-order-copy" },
        { title: "我的", url: "/my", icon: "icon-wodedangxuan1-copy-copy" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./assets/index.css";
@import "@/styles/main";
.active {
  color: #E6A23C;
}
</style>
