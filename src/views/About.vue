
<template>
  <div>
    <!-- 标题 -->
    <nav-bar></nav-bar>
    <!-- banner图 -->
    <div>
      <b-img
        src="https://s2.loli.net/2022/05/28/8bZFcer6wnpzKqC.jpg"
        fluid-grow
        alt="Responsive image"
      ></b-img>
    </div>
    <!-- 商品列表 -->
    <b-container class="text-center">
      <b-card no-body class="overflow-hidden">
        
          <b-row no-gutters v-for="(i,idx) in listdata" :key="idx"  class="pBrow">
            <b-col md="6">
              <swiper :swiperUrl="i.imgUrl"></swiper>
            </b-col>
            <b-col md="6" class="b-card-body">
              <b-card-body :title="i.name">
                <b-card-text>
                 {{i.describe}}
                </b-card-text>
                <b-button  variant="outline-primary" @click="toDetails(idx)">{{buttonText}}</b-button>
              </b-card-body>
               
            </b-col>
          </b-row>
        </b-card>
    </b-container>
    <!-- 页脚 -->
    <font></font>
    <!-- 返回顶部 -->
    <back-top></back-top>
  </div>
</template>

<script>
import PGoodsList from "../dataList/GoodsList.js"
import PGoodsListEn from "../dataList/GoodsListEn.js"
import Swiper from "../components/Swiper.vue"
export default {
  components:{
    Swiper
  },
  data() {
    return {
       listdata:'',
       hText:"",
       buttonText:''
    };
  },
   methods:{
    toDetails(no){
      localStorage.removeItem("n")
      this.$router.push({
        path:`/details/${no}/${this.$route.params.language}`
      })
    }
  },
     created() {
    //判断是哪个语言
    if (this.$route.params.language == "cn") {
      this.listdata = PGoodsList;
      this.hText='热卖'
      this.buttonText = '查看详情'
      document.title = '关于我们'
    } else if (this.$route.params.language == "en") {
      this.listdata = PGoodsListEn;
      this.hText='HOT'
      this.buttonText = 'Введение'
       document.title = 'Введение'
    }
  },
};
</script>

<style scoped>

.bclo {
  margin: 1rem auto;
  text-align: center;
}
.brow {
  margin: 0 auto;
  margin-left: 8px;
}

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

.pBrow{
  margin: 5% 0 5% 0;
}
.h2{
  margin: 5% 0 5% 0;
}
</style>
