<template>
  <div class="home">
    <Spin />
    <button @click="fetchProduct">get</button>

    {{ productData }}
    <br>
    <hr>
    <div v-for="(item, key) in productData" :key="key">

      {{ item.id }}
    <br>
    </div>
    <br>
    <hr>
    <br>
    <Swiper />
    <HelloWorld :sctionTitle="title" sectionBg="grayGreen" />
    <HelloWorld sctionTitle="sction 2" sectionBg="gray" />
    <HelloWorld sctionTitle="sction 3" sectionBg="red" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Swiper from '@/components/Swiper.vue'

export default {
  components: {
    HelloWorld,
    Swiper
  },
  data() {
    return {
      productData: []
    }
  },
  methods: {
    fetchProduct() {
      console.log(1)
      // fetch('https://fakestoreapi.com/carts')
      fetch('./data/cartsData.json')
        .then(res => res.json())
        .then(json => {
          this.productData = json
        })
    }
  }
}
</script>
