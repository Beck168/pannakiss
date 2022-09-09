<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar></nav-bar>
    <!-- 轮播图 -->
    <swipers :swiperUrl="swiperUrl" :bool="true" :time="3000"></swipers>
    <!-- 商品卡片 -->
    <HomeCard></HomeCard>
    <b-container class="text-center">
      <b-row align-h="center" class="brow">
        <b-col class="bclo" sm="auto" v-for="(i, idx) in listdata" :key="idx">
          <card :cardlist="i" :idx="idx"></card>
        </b-col>
      </b-row>
    </b-container>

    <!-- 页脚 -->
    <font></font>
    <!-- 返回顶部 -->
    <back-top></back-top>
  </div>
</template>

<script>
//js文件
import GoodsList from "../dataList/GoodsList.js";
import GoodsListEn from "../dataList/GoodsListEn.js";

//组件
import BackTop from "../components/backTop.vue";
import NavBar from "../components/NavBar.vue";

import Swipers from "../components/Swiper.vue";
import Card from "../components/Card.vue";
import HomeCard from "./homeCon/HomeCard.vue";

export default {
  components: {
    NavBar,

    Swipers,
    Card,
    BackTop,
    HomeCard,
  },
  data() {
    return {
      // 轮播图数据
      swiperUrl: [],
      //商品卡片数据
      listdata: "",
    };
  },
  created() {
    if (this.$route.query.fwm) {
      this.$router.push({
        path: "/qc/en",
        query: { fwm: this.$route.query.fwm },
      });
    } else {
      localStorage.setItem("n", 0);
    }

    //判断是哪个语言
    if (this.$route.params.language == "cn") {
      this.listdata = GoodsList;
      document.title = "首页";
      this.swiperUrl = [
        "http://a.saopoqun.cn/pankiss/lubo2.jpg",
        "http://a.saopoqun.cn/pankiss/lunbo1.jpg",
      ];
    } else if (this.$route.params.language == "en") {
      this.listdata = GoodsListEn;
      document.title = "главная страница";
      this.swiperUrl = [
        "http://a.saopoqun.cn/pankiss/lr1.jpg",
        "http://a.saopoqun.cn/pankiss/lr2.jpg",
      ];
    }
  },
};
</script>

<style scoped>
.text-center {
  margin: 4rem auto;
  /* margin-top: 4rem; */
}
.bclo {
  margin: 1rem auto;
  text-align: center;
}
.brow {
  margin: 0 auto;
  margin-left: 8px;
}
</style>
