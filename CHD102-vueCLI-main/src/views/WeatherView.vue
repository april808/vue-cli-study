<template>
  <div v-if="loading">
    loading..
  </div>
  <div v-else>
    <div v-if="weatherData.current">
      {{ weatherData['current']['temp_c'] }}`C

      <div v-if="weatherData.current.condition">
        {{ weatherData.current.condition.text }}
        <img :src="weatherData.current.condition.icon" alt="">
      </div>
    </div>
    <div v-else>
      nodata
    </div>
  </div>

  <hr>
  取得裝置地理資料寫在component/LocationMap.vue

</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      loading: false,
      weatherData: {},
      zone: 'Taiwan',
      token: 'b5f51cb98fad45d0868124717232107',
    }
  },
  created() {
    this.fetcheWeather()
  },
  methods: {
    fetcheWeather(){
      this.loading = true
      // 1. 使用fetch
      // fetch(`https://api.weatherapi.com/v1/current.json?q=${this.zone}&key=${this.token}`)
      // .then(res=> res.json())
      // .then(json=> {
      //   this.weatherData = json
      //   this.loading = false
      // })
      //2. 使用axios
      // axios.get(`https://api.weatherapi.com/v1/current.json?q=${this.zone}&key=${this.token}`)
      // .then(res=>{
      //   this.weatherData= res.data
      //   this.loading = false
      //   // console.log(res.data)
      // })
      //3. 使用axios params
      axios.get('https://api.weatherapi.com/v1/current.json',{
        params:{
          q: this.zone,
          key: this.token
        }
      },{}).then(res=>{
        this.weatherData= res.data
        // console.log(res.data)
      }).catch((error) => { // handle error
          console.error(error.message);
      }).finally(() => { // always executed
        this.loading = false
      })
    }
  }
}
</script>