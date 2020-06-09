<template>
  <div>
    <el-container>
      <el-header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="首页" name="first">
            <!-- banner 轮播图 -->
            <Banner />
            <!-- Icon -->
            <Gategory />
            <!-- 列表 -->
            <Lists />
          </el-tab-pane>
          <el-tab-pane label="美妆" name="second">美妆</el-tab-pane>
          <el-tab-pane label="医药" name="third">医药</el-tab-pane>
          <el-tab-pane label="鞋靴" name="fourth">鞋靴</el-tab-pane>
          <el-tab-pane label="食品" name="five">食品</el-tab-pane>
          <el-tab-pane label="进口" name="six">进口</el-tab-pane>
        </el-tabs>
      </el-header>
    </el-container>
  </div>
</template>

<script>
// import { Alert } from "element-ui";
import axios from "axios";
import request from "../utils/request";
import Gategory from "./Home/Gategory";
import Lists from "./Home/Lists";
import Banner from "./Home/Banner";
export default {
  components: {
    Gategory,
    Banner,
    Lists
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>