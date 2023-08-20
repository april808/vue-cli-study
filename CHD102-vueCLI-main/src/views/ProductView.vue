<template>
  <div class="product_container">
    <aside>
      <input type="text" v-model="searchText">
      <button @click="updateDisplay">search</button>
    </aside>
    <main >
      <div v-if="productDisplay.length > 0" class="product_list">
        <router-link 
          v-for="item in productDisplay" 
          :key="item.id"
          class="product_card"
          :to="`/productDetail/${item.id}`"
        >
          <div class="product_img">
            <img :src="item.image" alt="">
          </div>
          <p>{{ item.title }}</p>
          <p class="right">${{ item.price }}</p>
        </router-link>
      </div>
      <div v-else class="nodata">
        <p>沒有資料</p>
        <button @click="resetData">重新取得商品</button>
      </div>
    </main>
    <Spin size="large" fix :show="loading"></Spin>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      searchText: '',
      // 商品資料(僅在進入畫面時去取一次資料)
      productData: [],
      // 呈現的商品資料(針對productData來搜尋篩選)
      productDisplay: [],
      loading: false
    }
  },
  created() {
    this.fetchProduct()
  },
  methods: {
    updateDisplay(){
      if(this.searchText === ''){
        this.productDisplay = this.productData
      }else{
        this.productDisplay = this.productData.filter(item => item.title.includes(this.searchText))
      }
    },
    resetData(){
      this.searchText = ''
      this.updateDisplay()
    },
    fetchProduct(){
      this.loading = true

      // 1. 用fetch
      // https://fakestoreapi.com/
      // fetch('https://fakestoreapi.com/products')
      // .then(res=>res.json())
      // .then(json=>{
      //   this.productData = json
      //   this.updateDisplay()
      //   this.loading = false
      // })
      
      // 2. 用axios
      //axios.get('/fake/products.json')
      axios.get('https://fakestoreapi.com/products')
      .then((response) => { // handle success
        this.productData = response.data? response.data: []
      })
      .catch((error) => { // handle error
        console.error(error.message);
      })
      .finally(() => { // always executed
        this.loading = false
        this.updateDisplay()
      })
    },
  },
}
</script>

<style lang="scss">
.product{
  &_container{
    display: inline-flex;
    width: 100%;
    min-height: calc(100vh - 5rem);
    >aside{
      flex-basis: 10rem;
      background-color: rgb(175, 197, 197);
    }
    >main{
      flex-basis: calc(100% - 10rem);
      background-color: #dff2ea;
    }
  }
  &_list{
    display: inline-flex;
    flex-wrap: wrap;
    padding: 1rem;
  }
  &_card{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin: 0.25rem;
    p{
      width: 15rem;
      height: 1em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: .5rem;
      &.right{
        text-align: right;
      }
    }
  }
  &_img{
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
    background-color: #fff;
    overflow: hidden;
    
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 50%;
      object-fit: contain;
      height: auto;
    }
  }
}
.nodata{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #dff2ea;
  height: 100%;
}
</style>
