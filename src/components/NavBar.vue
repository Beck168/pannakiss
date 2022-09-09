<template>
  <div class="abc">
    <b-navbar
      toggleable="lg"
      type="dark"
      fixed="top"
      class="navbar"
      stickys="true"
    >
      <!-- 大标题 -->
      <b-navbar-brand class="home" href="/home/en" @click="setOn()"
        ><h3 style="color: #1a479d">PANNAKISS</h3></b-navbar-brand
      >
      <!-- 小屏图标 -->
      <b-navbar-toggle target="nav-collapse" style="background: #1a479d"></b-navbar-toggle>
      <!-- 右边页面导航文字 -->
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            class="mx"
            v-for="(i, idx) in list"
            :key="idx"
            :href="i.url"
            @click="fn(idx)"
            :id="idx == a ? 'text-border' : ''"
          >
            <span class="text" >{{
              i.text
            }}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import NavList from "../dataList/NavList";
import NavListEn from "../dataList/NavListEn";

export default {
  props: {
    num: {
      type: Number,
    },
  },
  data() {
    return {
      a: this.num,
      list: "",
    };
  },
  methods: {
    fn(n) {
      let num = n == this.list.length - 1 ? 0 : n;
      this.a = num;
      localStorage.setItem("n", num);
    },
    setOn() {
      localStorage.setItem("n", 0);
    },
  },
  created() {
    //判断是哪个语言
    if (this.$route.params.language == "cn") {
      this.list = NavList;
    } else if (this.$route.params.language == "en") {
      this.list = NavListEn;
    }
    if (localStorage.getItem("n")) {
      this.a = localStorage.getItem("n");
    }
  },
};
</script>

<style scoped>
.navbar {
  /* background: #75aea5 !important; */
  background: #fff;
}
.home {
  margin-left: 2rem;
  color: black !important;
}
.mx {
  margin: 0 50px 0 50px;
  
}
.text {
  color: #808080 !important;
  line-height: 100%;
}
#text-border {
  border-bottom: 2px solid #52b548;
}
.abc {
  width: 100%;
  height: 4.2rem;
}
</style>
