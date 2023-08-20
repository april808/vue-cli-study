<template>
    <div class="home">
        <div class="weather">
            <div v-if="weatherData.current">
                <template v-if="weatherData.current.condition">
                    <img :src="weatherData.current.condition.icon" alt="">
                </template>
                <div>
                    {{ weatherData.current.temp_c }}°C
                </div>
            </div>
        </div>
        <Spin size="large" fix :show="loading"></Spin>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    components: {},
    data(){
        return {
            weatherData: {},
            loading: false,
            token: 'b5f51cb98fad45d0868124717232107',
            latitude: null,
            longitude: null
        }
    },
    computed: {
        locationParam(){
            //'24.95, 121.22',
            const roundToTwo = (num) => Math.round((num) * 100) / 100
            const lat = this.latitude? roundToTwo(this.latitude): 24.95
            const lon = this.longitude? roundToTwo(this.longitude): 121.22
            return `${lat},${lon}`
        }
    },
    methods: {
        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) =>{
                    this.latitude = position.coords.latitude
                    this.longitude = position.coords.longitude
                    this.fetchWeather()
                },
                () => {
                    //不答應瀏覽器要給權限
                    console.error('不答應瀏覽器要給權限.')
                })
            }else{
                //瀏覽器不支援
                console.error('Geolocation is not supported by this browser.')
            }
        },
        fetchWeather(){
            this.loading = true
            // axios.get('http://api.weatherapi.com/v1/current.json?key=b5f51cb98fad45d0868124717232107&q=Taiwan&aqi=no',{
            axios.get('http://api.weatherapi.com/v1/current.json',{
                params: {
                    key: this.token,
                    // q: this.zone,
                    q: this.locationParam,
                    aqi: 'no'
                }
            })
            .then((response) => { // handle success
                this.weatherData = response.data
            })
            .catch((error) => { // handle error
                console.error(error.message);
            })
            .finally(() => { // always executed
                this.loading = false
            })
        }
    },
    created() {
        //getLocation會延遲，因此在這邊先去呼叫
        this.fetchWeather()
        this.getLocation()
    },
    mounted() {
    },
}
</script>
  
<style lang="scss" scoped>
.weather >div{
    height: 48px;
    display: inline-flex;
    align-items: center;
    img{
        height: 100%;
    }
}
</style>