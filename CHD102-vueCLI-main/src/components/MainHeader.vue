<template>
  <header>
    <div class="icon"></div>
    <nav>
      <router-link to="/">首頁</router-link>
      <router-link to="/products">商品</router-link>
      <router-link to="/login">登入</router-link>
      <router-link to="/about">關於</router-link> 
    </nav>
    <div class="ham" @click="openSidebar = true"></div>
  </header>

  <MainSidebar 
    :sidebarOpen="openSidebar" 
    @close="openSidebar = false"
  />
</template>

<script>
import MainSidebar from '@/components/MainSidebar.vue'

export default {
  components: {
    MainSidebar,
  },
  data() {
    return {
      openSidebar: false
    }
  }
}
</script>

<style lang="scss" scoped>
// 加了scoped就只會在這一個vue裡面才作用
a{
  padding: 0 1rem;
  border-right: 1px solid #555;
  &:last-child{
    border-right: none;
  }
}
</style>
