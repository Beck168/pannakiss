<template>
  <div class="font">
    <b-container fluid class="bv-example-row b-container-font">
      <!-- <b-row class="text-center b-row">
        <b-col> {{this.$route.params.language =="cn"? '导航':'navigation'}}</b-col>
      </b-row>
      <b-row class="text-center linkRow" >
       
        <b-col  v-for="(i,idx) in list " :key="idx" @click="fn(idx)">
          <b-link class="blink"  :id="idx == n?'blink': ''" :href="i.url" >{{i.text}}</b-link>
        </b-col>
      </b-row> -->
      <b-row class="text-center" id="row">
        <b-col>&copy;2022 PANNAKISS. All rights reserved</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavList from "../dataList/NavList"
import NavListEn from "../dataList/NavListEn"
export default {
  data(){
    return{
      list:[],
      n:0
  }
  },
     created() {
       this.n = localStorage.getItem("n")
    //判断是哪个语言
    if (this.$route.params.language == "cn") {
      this.list = NavList;
    } else if (this.$route.params.language == "en") {
      this.list = NavListEn;
    }
  },
  methods:{
    fn(idx){
      if(idx == this.list.length - 1){
        console.log(11111);
        localStorage.setItem("n",0)
        return;
      }
      localStorage.setItem("n",idx)
       
    }
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.b-container-font {
  margin-top:10% ;
  color: #fff;
}
.blink {
  color: #fff;

}
#blink{
  border-bottom: 1px solid #fff;
}
.linkRow{
   background-color: black;
   font-size: 12px;
}
.text-center {
  background-color: black;
  padding: 1% 0 1% 0;
}
#row {
  padding: 1% 0 1% 0;
  border-top: 1px solid rgb(196, 211, 255);
  background-color: #1a479d;
}
</style>
