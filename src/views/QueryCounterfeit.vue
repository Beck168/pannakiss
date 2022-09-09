<template>
  <div>
    <!-- 标题 -->
    <nav-bar></nav-bar>
    <!-- 商品列表 -->
    <b-container class="text-center" fluid="true">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters class="pBrow">
          <b-col md="6">
            <swiper :swiperUrl="listdata"></swiper>
          </b-col>
          <b-col md="6" class="b-card-body">
            <b-card-body :title="title">
              <b-card-text v-if="flag">
                {{
                  bool
                    ? "输入防伪码进行查询"
                    : "введите код безопасности для запроса"
                }}
              </b-card-text>
              <b-input-group v-if="flag">
                <!-- 输入框 -->
                <b-form-input type="text" v-model="inputFwm"></b-form-input>

                <b-input-group-append>
                  <b-button
                    variant="outline-primary"
                    @click="queryFw(inputFwm)"
                    >{{ bool ? "查询" : "запрос" }}</b-button
                  >
                </b-input-group-append> </b-input-group
              ><br />

              <b-spinner
                v-if="spinner"
                variant="primary"
                label="Spinning"
              ></b-spinner>

              <!-- 查询结果显示框 -->
              <div id="fwmAlert" :class="fwmClass">
                <!-- 成功 -->
                <div v-if="alertboll == 1" >
                  <b-alert show variant="success" class="b-alert"
                    >Success
                    <b-icon icon="check-circle" variant="success"></b-icon
                  ></b-alert>
                </div>
                <!-- 警告 -->
                <div v-if="alertboll == 2">
                  <b-alert show variant="warning" class="b-alert">Warning
                    <b-icon icon="exclamation-circle-fill" ></b-icon>
                     </b-alert>
                </div>
                <!-- 错误 -->
                 <div v-if="alertboll == 3">
                  <b-alert show variant="danger" class="b-alert">Danger
                    <b-icon icon="exclamation-circle-fill" ></b-icon>
                  </b-alert>
                </div>
                <!-- 结果 -->
                <b-card-text class="msg"> {{ Emsg }}</b-card-text>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
    <!-- 页脚 -->
    <!-- <font></font> -->
    <!-- 返回顶部 -->
    <back-top></back-top>
  </div>
</template>

<script>
import axios from "axios";
import md5 from "js-md5";
import Swiper from "../components/Swiper.vue";
export default {
  components: {
    Swiper,
  },
  data() {
    return {
      alertboll: "",
      flag: true, //input控制
      fwmClass: "",
      Emsg: "",
      spinner: false, //请求等地指示
      Cmsg: "",
      inputFwm: "", //用户输入的防伪码
      bool: false,
      title: "",
      listdata: [
        "http://a.saopoqun.cn/pankiss/yg0.png",
        // "http://a.saopoqun.cn/pankiss/yg3.png",
        // "https://s2.loli.net/2022/05/27/Pmr8RyqfhYcesEp.jpg"
      ],
    };
  },
  created() {
    localStorage.setItem("n", 3);
    //判断是哪个语言
    if (this.$route.params.language == "cn") {
      document.title = "防伪查询";
      this.bool = true;
    } else {
      document.title = "истинное или ложное";
    }
    this.title = this.bool ? "防伪查询" : "запрос против контрафакции";
  },
  mounted() {
    if (this.$route.query.fwm) {
      this.flag = false;
      this.queryFw(this.$route.query.fwm);
    }
  },
  methods: {
    queryFw(fw) {
      this.spinner = true;
      let fwm = fw;
      let code = "LELZSHS27";
      let Key = "66WFrRWaKK";
      let ip = "192.168.1.115";
      let sign = md5(fwm + Key).toUpperCase();

      axios
        .get(" http://tyfwjk.ty-315.com/api/tyfw/QueryA", {
          params: {
            fwm,
            code,
            sign,
            ip,
          },
        })
        .then((res) => {
          this.spinner = false;
          if (res.data.Result == "0") {
            this.alertboll = 1
            this.fwmClass = "fwmClassTure";
            this.Emsg = ` ${res.data.FWCode},здравствуйте, ваш запрос подлинный, пожалуйста, будьте уверены в использовании!`;
            // this.Cmsg = `您好,您所查询的是正品,防伪码为${res.data.FWCode}请放心使用!`;
          } else if (res.data.Result == "1" || res.data.Result == "2") {
            this.alertboll = 2
            this.fwmClass = "fwmClassW";
            this.Emsg = `здравствуйте, код безопасности, который вы спросили, является${res.data.FWCode}, код борьбы с контрафакцией находится в${res.data.FirstSearchTime}, был спрошен, остерегайтесь подделки!`;
            // this.Cmsg = `您好,您所查询的防伪码为${res.data.FWCode},该防伪码在${res.data.FirstSearchTime}已被查询,谨防假冒!`
          } else if (
            res.data.Result == "9" ||
            res.data.Result == "4" ||
            res.data.Result == "10" ||
            res.data.Result == "11"
          ) {
            this.alertboll = 3
            this.fwmClass = "fwmClassError";
            //  this.Cmsg = res.data.ResultMsg
            this.Emsg = `код безопасности, который вы запросили, не существует!`;
          } else if (res.data.Result == "20") {
            this.alertboll = 3
            this.fwmClass = "fwmClassError";
            // this.Cmsg = res.data.ResultMsg
            this.Emag = `ваш запрос слишком часто, пожалуйста, повторите попытку позже!`;
          } else if (res.data.Result == "8") {
            this.alertboll = 3
            this.fwmClass = "fwmClassError";
            //  this.Cmsg = res.data.ResultMsg
            this.Emsg = `код безопасности не может быть пустым!`;
          }
        });
    },
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
.text-center {
  margin-bottom: 20%;
}
.b-container {
  padding-top: 3rem !important;
  background-color: #fff;
}
.b-card-body {
  background-color: rgba(172, 172, 172, 0.1);
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
.msg {
  font-size: 1.1rem;
}
.fwmClassTure {
  background: #caeed2;
 
}
.fwmClassW {
  background: rgb(255, 229, 156);
  
}
.fwmClassError {
  background: rgb(255, 152, 152);
  
}
#fwmAlert{
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.b-alert{
  box-shadow: 0px 0px 2px 0.5px rgb(174, 174, 174) inset
}
</style>
