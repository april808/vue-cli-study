import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// 外部函式庫 view-ui-plus
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import '@/assets/scss/viewuipluscover.scss'

// swiper
import { register } from 'swiper/element/bundle'
import '@/assets/scss/main.scss'

import { setupCalendar, Calendar } from 'v-calendar';
import 'v-calendar/style.css';

// createApp(App).use(store).use(router).use(ViewUIPlus).mount('#app')

const app = createApp(App)
// 引入vuex || pinia
app.use(store)
app.use(router)
app.use(ViewUIPlus)
app.use(register)

app.use(setupCalendar, {})
app.component('VCalendar', Calendar)

app.mount('#app')