<template>
  <div class="detail">
    <router-link to="/home">
      <el-page-header content="详情页面"></el-page-header>
    </router-link>
    <p>{{list.name}}</p>
    <div class="detail_img">
      <img :src="list.img_arr[0]" alt />
      <img :src="list.img_arr[1]" alt />
      <img :src="list.img_arr[2]" alt />
      <img :src="list.img_arr[3]" alt />
    </div>
    <div class="text">
      <span id="sale_price">￥{{list.sale_price}}</span>
      <span id="show_price">{{list.show_price}}</span>
      <span id="sale_num">销量{{list.sale_num}}</span>
    </div>
    <div class="time">
      <span id="created_at">{{list.created_at}}</span>
      <!-- <span>{{list.updated_at}}</span> -->
    </div>
    <br />
    <!-- {{list.show_num}} -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: ""
    };
  },
  methods: {
    axiosChange(id) {
      axios
        .get("http://learn.tx2.qrqy.net/api/product/getById?id=" + id)
        .then(res => {
          this.list = res.data.ret;
          this.$route.params.id;
          console.log(res);
        });
    }
  },
  created() {
    this.axiosChange(this.$route.params.id);
  }
};
</script>

<style>
.detail_img {
  border: 1px solid rgb(219, 215, 215);
 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* display: flex; */
}
.detail_img > img {
   box-shadow: 5px 2px 5px #909399;
  width: 170px;
  padding: 5px;
  /* margin: auto; */
}
.text {
  top: 10px;
  position: relative;
}
#sale_price {
  font-size: 1.5em;
  color: red;
}
#show_price {
  text-decoration: line-through;
}
#sale_num {
  position: absolute;
  right: 10px;
  top: 10px;
}
.time {
  height: 120px;
  position: relative;
  font-size: 15px;
}
#created_at {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>