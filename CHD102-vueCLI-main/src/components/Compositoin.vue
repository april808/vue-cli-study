<template>
    <div id="ff" ref="ee">
        <p>composition API</p>
        {{ count }}
        <button @click="add">+</button>
        {{ text }}
        <hr>
        <input type="email" v-model="login.email">
        <input type="password" v-model="login.psw">
        <button @click="loginForm">登入</button>
        {{ weatherData }}
    </div>
</template>
<script setup>
import { ref, computed, reactive, onMounted, watch } from 'vue'
const ee = ref()
const count = ref(0)
const text = computed(()=>{ 
    return count.value > 5 ? 'O': 'X'
})
const add = () => count.value ++
// 登入
const login = reactive({
    email: '',
    psw: ''
})

console.log('setup:'+ document.getElementById('ff'));
onMounted(()=>{
    // console.log('mount:'+ document.getElementById('ff'));
    // console.log('mount:'+ ee);
    // fetcheWeather()
})
const loginForm = () => {
    // console.log(login.email + ':' + login.psw)
}

watch(text, (text, oldtext)=>{
    console.log(text);
})
//如果用來偵測obj裡面的key會出錯
// watch(login.email, (email, oldemail)=>{
// console.log(email);
// })
watch(
  () => login.email,
  (email) => {
    console.log(`email is: ${email}`)
  }
)

const weatherData = ref({})
// 用reactive會壞掉
// const weatherDatas = reactive({})
const fetcheWeather = () =>{
    fetch(`https://api.weatherapi.com/v1/current.json?q=Taiwan&key=b5f51cb98fad45d0868124717232107`)
    .then(res=> res.json())
    .then(json=> {
        weatherData.value = json
        // 用reactive會壞掉
        // weatherDatas = json
    })
}

</script>


<!-- <script setup>
import { ref, computed, reactive } from 'vue'
// export default {
//     setup(){
        //count
        const count = ref(0)
        const text = computed(()=>{ 
            return count.value > 5 ? 'O': 'X'
        })
        const add = () => count.value ++
        // 登入
        const login = reactive({
            email: '',
            psw: ''
        })
        const loginForm = () => {
            console.log(login.email + ':' + login.psw)
        }
//         return {
//             count,
//             text,
//             add
//         }
//     }
// }
</script> -->
<!-- <script>
import { ref, computed } from 'vue'
export default {
    setup(){
        const count = ref(0)
        const text = computed(()=>{ 
            return count.value > 5 ? 'O': 'X'
        })
        const add = () => count.value ++
        return {
            count,
            text,
            add
        }
    }
}
</script> -->