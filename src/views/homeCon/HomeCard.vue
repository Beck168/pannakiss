<template>
  <div>
    <!-- 商品列表 -->
    <b-container fluid="true" class="text-center">
      <b-card no-body class="overflow-hidden aa-center">
        <b-row no-gutters v-for="(i, idx) in listdata" :key="idx" class="pBrow">
          <b-col md="8">
            <swiper :swiperUrl="i.imgUrl"></swiper>
          </b-col>
          <b-col align-self="center" md="4" class="b-card-body">
            <b-card-body :title="i.name">
              <b-card-text>
                {{ i.describe }}
              </b-card-text>
              <b-button variant="outline-primary" @click="toDetails(idx)">{{
                buttonText
              }}</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import PGoodsList from "../../dataList/PGoodsList.js";
import PGoodsListEn from "../../dataList/PGoodsListEn.js";
import Swiper from "../../components/Swiper.vue";
export default {
  components: {
    Swiper,
  },
  data() {
    return {
      listdata: "",
      hText: "",
      buttonText: "",
    };
  },
  methods: {
    toDetails(no) {
      console.log(no);
      // localStorage.removeItem("n")
      // this.$router.push({
      //   path:`/details/${no}/${this.$route.params.language}`
      // })
    },
  },
  created() {
    //判断是哪个语言
    if (this.$route.params.language == "cn") {
      this.listdata = PGoodsList;
      this.hText = "热卖";
      this.buttonText = "查看详情";
    } else if (this.$route.params.language == "en") {
      this.listdata = PGoodsListEn;
      this.hText = "HOT";
      this.buttonText = "подробная информация";
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
.details-h1 {
  margin: 2rem 0 2rem 0;
}

.pBrow {
  margin: 5% 0 5% 0;
}
.h2 {
  margin: 5% 0 5% 0;
}
.aa-center {
  padding: 0px 50px 0 50px;
}
</style>
