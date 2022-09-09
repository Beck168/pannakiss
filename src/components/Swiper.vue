<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="time"
      :controls="bool"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div v-for="(i, idx) in swiperUrl" :key="idx" @click="toDetails(idx)">
        <b-carousel-slide :img-src="i"></b-carousel-slide>
      </div>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    swiperUrl: {
      type: Array,
    },
    bool: {
      type: Boolean,
    },
    time: {
      type: Number,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    toDetails(idx) {
      console.log(idx);
      // //判断是哪个语言
      // if (this.$route.params.language == "cn") {
      //   this.$router.push({
      //     // path: `/details/${idx}/cn`,
      //     path: `/details/0/cn`,
      //   });
      // } else if (this.$route.params.language == "en") {
      //   this.$router.push({
      //     // path: `/details/${idx}/en`,
      //     path: `/details/0/en`,
      //   });
      // }
    },
  },
};
</script>

<style></style>
