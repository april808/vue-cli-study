<template>
    <div class="home">
        <div v-if="weatherData">
            {{ weatherData }}
            <hr>
            <div v-if="weatherData.current">
                {{ weatherData.current }}
                <div v-if="weatherData.current.condition">
                    {{ weatherData.current.temp_c }}°C
                    <img :src="weatherData.current.condition.icon" alt="">
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
                weatherData: [],
                loading: false
            }
        },
        methods: {
        fetchProduct(){
            this.loading = true
            // axios.get('http://api.weatherapi.com/v1/current.json?key=b5f51cb98fad45d0868124717232107&q=Taiwan&aqi=no',{
            axios.get('http://api.weatherapi.com/v1/current.json',{
                params: {
                    key: 'b5f51cb98fad45d0868124717232107',
                    q: 'Taiwan',
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
            this.fetchProduct()
        }
    }
</script>
  