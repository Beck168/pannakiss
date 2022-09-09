<template>
  <div>
  <b-card
    :title="cardlist.name"
   
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 bCard"
  > 
    <swiper :swiperUrl="cardlist.imgUrl" :bool="false" :time="cardlist.time"></swiper>
    <b-card-text>
     {{cardlist.price}}
    </b-card-text>

    <b-button  variant="outline-primary" @click="toDetails(idx,cardlist.language)">{{this.$route.params.language =="cn"? '商品详情':'подробная информация'}}</b-button>
  </b-card>
</div>
</template>


<script>
import Swiper from "./Swiper.vue"
export default {
  components: { Swiper },
  props:{
    cardlist:{
      type:Object
    },
    idx:{
      type:Number
    }
  },
  methods:{
    toDetails(no,language){
      localStorage.removeItem("n")
      this.$router.push({
        path:`/details/${no}/${language}`
      })
    }
  }
}
</script>

<style scoped>
  .bCard{
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
.bCard:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>