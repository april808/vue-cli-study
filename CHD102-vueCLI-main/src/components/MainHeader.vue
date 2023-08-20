<template>
  <header>
    <div class="icon">Logo</div>
    <nav>
      <router-link to="/">首頁</router-link>
      <router-link to="/products">商品</router-link>
      <router-link to="/login">登入</router-link>
      <router-link to="/weather">天氣</router-link> 
      <router-link to="/weatherMap">天氣+日曆</router-link> 
      <router-link to="/about">關於</router-link> 
    </nav>
    <div>Hello, {{ $store.state.name }}</div>
    <div class="ham" @click="openSidebar = true">漢堡</div>
  </header>

  <!-- <組件名稱 
        :<子組件props裡面定義的key>="<父組件變數>"
        @<子組件emit括號裡面的第一個值>="<父組件function name>"
  > -->
  <MainSidebar 
    :sidebarOpen="openSidebar" 
    @close="menuclose"
  >
    <template v-slot:slotheader>
      <h1>title</h1>
    </template>
    <template v-slot:slotfooter>
      <h1>adasdsdasds</h1>
    </template>
  </MainSidebar>
</template>
<script>
// 1. 引入component
import MainSidebar from '@/components/MainSidebar.vue'
export default {
  //2. 註冊component
  components: {
    MainSidebar,
  },
  data() {
    return {
      openSidebar: false
    }
  },
  methods:{
    menuclose() {
      console.log('父層close');
      this.openSidebar = false
    }
  }
}
</script>

<style lang="scss" scoped>
// 加了scoped就只會在這一個vue裡面才作用
.icon,
.ham{
  display: flex;
  align-items: center;
  justify-content: center;
}
a{
  padding: 0 1rem;
  border-right: 1px solid #555;
  &:last-child{
    border-right: none;
  }
}
</style>
