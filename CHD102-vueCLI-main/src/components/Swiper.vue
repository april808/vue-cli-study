<template>
    <div class="swiper_container">
        <swiper-container>
            <swiper-slide 
                v-for="item in imgData" 
                :key="item"
                class="swiper_img"
            >
                <img :src="`https://picsum.photos/200/300?random=${item}`" :alt="item">
            </swiper-slide>
        </swiper-container>
    </div>
</template>
  
<script>
export default {
    data(){
        return {
            imgData: 5
        }
    }
}
</script>
  
<style lang="scss">
:root {
    --swiper-theme-color: #9747ff;
    --swiper-pagination-bottom: 0px;
}
.swiper{
    &_container{
      background-color: #738280;
      padding: 0.5rem;
    }
    &_img{
        height: 50vh;
        img{
            height: 100%;
        }
    }
}
</style>
  