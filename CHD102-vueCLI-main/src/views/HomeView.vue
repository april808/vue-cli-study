<template>
  <Options />
  <hr>
  <Compositoin />
  <div>
    <h6>取得PHP所回應的資料</h6>
    {{ cgd103Data }}
  </div>
</template>

<script>
import axios from 'axios'
//引入component
import Options from '@/components/Options.vue'
import Compositoin from '@/components/Compositoin.vue'
export default {
  components: {
    //註冊component
    Options,
    Compositoin
  },
  data(){
    return {
      cgd103Data: {}
    }
  },
  methods: {
    fetchcgd103(){
      axios.get('/fake/cgg.json').then(res=>{
      // axios.get('https://tibamef2e.com/cgd103/g2/front/phpfile/mainproduct.php').then(res=>{
        this.cgd103Data= res.data
      }).catch((error) => { // handle error
          console.error(error.message);
      })
    }
  },
  created() {
    // Vue data那些東西掛好了
    // console.log('created');
    // console.log(document.getElementById('map'));
    this.fetchcgd103()
  },
  mounted() {
    // Vue已經掛在DOM中
    // console.log('mounted');
    // console.log(document.getElementById('map'));
  },
}
</script>