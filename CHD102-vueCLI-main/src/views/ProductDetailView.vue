<template>
  <button @click="goToProductPage()">
    回到商品列表
  </button>
  <button @click="goToNext()">
    下一商品
  </button>
  mobile: {{ mobile }}
  params :{{ $route.params }}
  query :{{ $route.query }}
  <br>
  <br>
  
  {{ productData }}

  <button @click="goToModify()">
    修改商品
  </button>
  <!-- <div v-if="productData">
    <img :src="productData.image" alt="">
    <p>{{ productData.title }}</p>
    <p>{{ productData.description }}</p>
    <p>{{ productData.category }}</p>
    <p>${{ productData.price }}</p>
    <span v-for="item in Math.round(productData.rating.rate)">
      🌟
    </span>
    <span>{{ productData.rating.count }}</span>
  </div>
  <div v-else>
    Loading...
  </div> -->
</template>

<script>
// 偵測螢幕變化
let resizeEvent = null
export default {
  data(){
    return {
      productData: null,
      mobile: false,
      resizeEvent: null
    }
  },
  watch: {
    '$route.params.id': {
      // 在這邊不能用箭頭函式
      handler: function(newVal){
        this.getTarget(newVal)
			},
			immediate:true //一開始載入(created)就觸發
    }
  },
  created() {
    // this.getTarget(this.$route.params.id);
    this.setWidth(window.innerWidth)
    this.resizeEvent = (e) => this.setWidth(e.target.innerWidth)
    window.addEventListener("resize", resizeEvent)
    // window.addEventListener("resize", this.resizeEvent)
  },
  unmounted() {
    window.removeEventListener("resize", esizeEvent)
    // window.removeEventListener("resize", this.resizeEvent)
  },
  methods:{
    setWidth(width){
      console.log(width)// 換頁就可以知道unmounted有沒有效
      this.mobile = (width <= 768)
    },
    goToProductPage(){
      this.$router.push('/products')
      //this.$router.push({name: 'products'})
    },
    goToNext(){
      this.$router.push(`/productDetail/${parseFloat(this.$route.params.id)+1}`)
    },
    goToModify(){
      this.$router.push(`/productModify/${parseFloat(this.$route.params.id)}`)
    },
    getTarget(newVal){
      fetch(`https://fakestoreapi.com/products/${newVal}`)
      .then(res=>res.json())
      .then(json=>{
        this.productData = json
      })
    }
  },
}
</script>

<style lang="scss">
img{
  width: 10rem;
}
</style>
