<template>
  <div class="index-main">
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <ul>
            <li v-for="(list ,index) in lists" :key="index">
              <router-link v-bind:to="'/list/'+list.id">
                <img :src="list.img_arr[0]" class="index-img" />
              </router-link>
              <label>
                <p class="name">{{list.name}}</p>
                <span class="show_price">￥{{list.show_price}}</span>
                <span class="sale_num">{{list.sale_num}}人付款.....</span>
              </label>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <ul>
            <li v-for="(list ,index) in lists" :key="index">
              <router-link v-bind:to="'/list/'+list.id">
                <img :src="list.img_arr[3]" class="index-img" />
              </router-link>
              <label>
                <p class="name">{{list.name}}</p>
               <span class="show_price">￥{{list.show_price}}</span>
                <span class="sale_num">{{list.sale_num}}人付款.....</span>
              </label>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    axios
      .get("http://learn.tx2.qrqy.net/api/product/getListByCon")
      .then(res => {
        this.lists = res.data.ret.data;
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>