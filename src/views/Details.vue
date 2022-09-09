<template>
    <div >
      <!-- 导航栏 -->
      <nav-bar  :num="-1"></nav-bar>
      <!-- 商品卡片 -->
      <b-container class="text-center b-container ">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <swiper :swiperUrl="Goods.imgUrl"></swiper>
              <!-- <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                class="rounded-0"
              ></b-card-img> -->
            </b-col>
            <b-col md="6" class="b-card-body">
              <b-card-body :title="Goods.name">
                <b-card-text>
                 {{Goods.describe}}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <!-- 详情图 -->
        <div class="b-img-bg">
          <h1 class="details-h1">{{this.$route.params.language =="cn"? '商品详情':'Goods details'}}</h1>
          <b-img :src="Goods.detailsImg" fluid></b-img>
        </div>
      </b-container>
      <!-- 返回顶部 -->
      <back-top></back-top>
      <!-- 页脚 -->
      <font></font>
    </div>
</template>

<script>
//js文件
import GoodsList from "../dataList/GoodsList"; //商品详情数据 （中文）
import GoodsListEn from "../dataList/GoodsListEn"; 

//组件
import Swiper from "../components/Swiper.vue";
import Font from '../components/font.vue';


export default {
  components: {  Swiper, Font, },
  data() {
    return {
      Goods: [],
    };
  },
  created() {
    //判断是哪个语言
    localStorage.removeItem("n")
    if (this.$route.params.language == "cn") {
      this.Goods = GoodsList[this.$route.params.no];
      document.title = '详情'
    } else if (this.$route.params.language == "en") {
      this.Goods = GoodsListEn[this.$route.params.no];
      document.title = 'details'
    }
  },
};
</script>

<style scoped>
.b-container {
  padding-top: 3rem !important;
  background-color: #fff;
}
.b-card-body {
  background-color: rgba(172, 172, 172, 0.1);
}
.details-h1{
  margin: 2rem 0 2rem 0;
}
</style>
