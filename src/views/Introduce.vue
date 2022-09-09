<template>
  <div>
    <!-- 标题 -->
    <nav-bar></nav-bar>
    <!-- banner图 -->
    <div>
      <b-img
        src="http://a.saopoqun.cn/pankiss/yg0.png"
        fluid-grow
        alt="Responsive image"
      ></b-img>
    </div>
    <!-- 商品列表 -->
    <b-container class="text-center">
      <h2 class="h2">{{ hText }}</h2>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters v-for="(i, idx) in listdata" :key="idx" class="pBrow">
          <b-col md="6" class="b-card-body">
            <b-card-body :title="i.title">
              <b-card-text>
                {{ i.text }}
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="6">
            <b-img :src="i.imgUrl" fluid-grow alt="Responsive image"></b-img>
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
export default {
  data() {
    return {
      listdata: "",
      hText: "",
      buttonText: "",
    };
  },
  methods: {
    toDetails(no) {
      localStorage.removeItem("n");
      this.$router.push({
        path: `/details/${no}/${this.$route.params.language}`,
      });
    },
  },
  created() {
    //判断是哪个语言
    if (this.$route.params.language == "cn") {
      document.title = "品牌介绍";
      this.listdata = [
        {
          title: "关于PANNAKISS",
          imgUrl: "http://a.saopoqun.cn/pankiss/about1.jpg",
          text: "PANNAKISS产品涵盖护肤品、化妆品、清洁护肤品等领域,推出了多款注重脸部肌肤呵护的面膜和注重牙齿健康问题的牙膏",
        },
        // {
        //   title: "产品特点",
        //   imgUrl: "https://s2.loli.net/2022/05/28/Cfv5B1UZ4d8uVQr.jpg",
        //   text: "AFI玻尿酸亮颜补水面膜注重于保持面部水分，达到补水效果。玻尿酸也叫透明质酸（HA），它是一种多糖类的大分子物质，大量存在于我们人体的结缔组织和真皮层中。一般在表皮下层和真皮层中起到保持水分和皮肤弹性的作用，与皮肤的屏障健康、弹性衰老和水分含量都有一定关系。AFI烟酰胺美肌修护面膜则注重与皮肤的修复，烟酰胺一旦进入皮肤深层，就能破坏络氨酸酶的生长环境，利用皮肤的新陈代谢能力，将隐藏在皮肤间的黑色素运转出去，从而起到淡化斑点，提亮肤色的美白作用。AFI手工山羊奶皂是采用最好的原料，既可用作洗脸、卸妆，又可用作沐浴使用；可保持肌肤弹性，能够延缓皮肤衰老，具有抗皱功效；温和无刺激，补水保湿，增加肌肤活力；",
        // },
        {
          title: "公司愿景",
          imgUrl: "http://a.saopoqun.cn/pankiss/about2.jpg",
          text: "PANNAKISS一直关注人们因牙齿问题而带来的许多烦恼,致力于减轻牙齿健康问题给生活带来不好的影响，所以PANNAKISS产品不但注重于脸部肌肤的保护，更注重于对牙齿健康的保护。",
        },
      ];
    } else if (this.$route.params.language == "en") {
      document.title = "Введение";
      this.listdata = [
        {
          title: "о компании PANNAKISS",
          imgUrl: "http://a.saopoqun.cn/pankiss/about1.jpg",
          text: "продукты PANNAKISS охватывают средства по уходу за кожей, косметику, чистящие средства по уходу за кожей и другие области, запустили ряд масок для лица, которые уделяют внимание уходу за кожей лица и зубной пасте, которые обращают внимание на проблемы со здоровьем зубов",
        },
        // {
        //   title: "Product features",
        //   imgUrl: "https://s2.loli.net/2022/05/28/Cfv5B1UZ4d8uVQr.jpg",
        //   text: "AFI Hyaluronic Acid Moisturizing Mask focuses on retaining facial moisture for hydration. Hyaluronic acid, also known as hyaluronic acid (HA), is a carbohydrate macromolecule found in abundance in the connective tissue and dermis of our bodies. It generally plays a role in maintaining moisture and skin elasticity in the lower epidermis and dermis, and has a certain relationship with skin barrier health, elastic aging and moisture content. AFI Nicotinamide Skin Repair Mask focuses on skin repair. Once nicotinamide penetrates deep into the skin, it destroys the growth environment of tyrosinase and uses the skin's metabolic capacity to remove melanin hidden between the skin, thereby fading spots and brightening the skin. AFI Handmade goat milk soap is made from the finest ingredients available for cleansing, makeup removal, and bath use. Can maintain skin elasticity, can delay skin aging, with anti-wrinkle effect; Mild without irritation, moisturizing and moisturizing, increase skin vitality.",
        // },
        {
          title: "видение компании",
          imgUrl: "http://a.saopoqun.cn/pankiss/about2.jpg",
          text: "PANNAKISS уделяет внимание многим неприятностям, вызванным стоматологическими проблемами, и стремится уменьшить негативное влияние стоматологических проблем на жизнь, поэтому продукты PANNAKISS не только сосредоточены на защите кожи лица, но и уделяют больше внимания защите стоматологического здоровья.",
        },
      ];
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
.details-h1 {
  margin: 2rem 0 2rem 0;
}

.pBrow {
  margin: 5% 0 5% 0;
}
.h2 {
  margin: 5% 0 5% 0;
}
</style>
