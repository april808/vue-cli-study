import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// swiper
import { register } from 'swiper/element/bundle'

// view-ui-plus
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import '@/assets/scss/main.scss'


const app = createApp(App)
app.use(store).use(router)

app.use(register)
app.use(ViewUIPlus)

app.mount('#app')