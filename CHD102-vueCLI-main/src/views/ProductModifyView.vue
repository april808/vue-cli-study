<template>
  <button @click="goToProductPage()">
    回到商品列表
  </button>
  params :{{ $route.params }}
  query :{{ $route.query }}
  <br>
  
  {{ productData }}
  <button @click="modifyProduct()">
    更改
  </button>
</template>

<script>
import axios from 'axios'

// 偵測螢幕變化
export default {
  data(){
    return {
      productData: null,

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
  methods:{
    getTarget(newVal){
      // fetch(`https://fakestoreapi.com/products/${newVal}`)
      // .then(res=>res.json())
      // .then(json=>{
      //   this.productData = json
      // })
      axios(`https://fakestoreapi.com/products/${newVal}`)
      .then(json=>{
        this.productData = json.data
      })
    },
    modifyProduct(){
      // fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`,{
      //   method:"PUT",
      //   body:JSON.stringify(
      //       {
      //           title: 'test product',
      //           price: 13.5,
      //           description: 'lorem ipsum set',
      //           image: 'https://i.pravatar.cc',
      //           category: 'electronic'
      //       }
      //   )
      // })
      // .then(res=>res.json())
      // .then(json=>console.log(json))
      axios.put(`https://fakestoreapi.com/products/${this.$route.params.id}`, {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      })
      .then(json=>{
        this.productData = json.data
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
