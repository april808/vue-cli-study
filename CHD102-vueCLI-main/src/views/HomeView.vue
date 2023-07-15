<template>
  <div class="home">
    <Swiper/>
    <HelloWorld :sctionTitle="title" sectionBg="grayGreen"/>
    <HelloWorld sctionTitle="sction 2" sectionBg="gray"/>
    <HelloWorld sctionTitle="sction 3" sectionBg="red"/>
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
  data(){
    return {
       title: '😮‍💨這禮拜一直加班😮‍💨'
    }
  }
}
</script>
