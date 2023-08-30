# CHD102-vueCLI

test

### swiper
用[](https://swiperjs.com/vue)簡單很多，但官網說之後有可能刪除，不過通常沒說什麼時後要刪除的就先用**舊版**，因為新版文件還不完整應該蠻多人反應不要刪掉舊版。

但也沒有到很複雜，用新版的方式可以參考
[參考文章](https://ithelp.ithome.com.tw/articles/10311890)

1. [安裝](https://swiperjs.com/get-started)
    ```sh
    npm install swiper
    ```
2. 需要註冊到main.js
    ```
        ...
        import { register } from 'swiper/element/bundle';

        const app = createApp(App)
        app.use(store)
        app.use(router)

        app.use(register)

        app.mount('#app')
    ```
3. 調整vue.config.js

    ```
    const { defineConfig } = require('@vue/cli-service')
    module.exports = defineConfig({
        transpileDependencies: true,
        chainWebpack: config => {
            config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => ({
                ...options,
                compilerOptions: {
                    // 將所有帶 swiper- 的標籤名都視為自定義元素
                    isCustomElement: tag => tag.startsWith('swiper-')
                }
            }))
        }
    })
    ```
4. css沒有想像中的難改加上class，可以不用引入直接加上自定義class來調整即可，可以參考**src/components/Swiper.vue**


### bootstrap-vue
    對vue3的支援度很奇怪，文件也寫得不清不楚的，我放棄T___T
    如果已經有安裝bootstrap請先移除
    ```sh
        npm uninstall bootstrap bootstrap-vue
        rm -rf node_modules package-lock.json
    ```
### UI 套件
先確認是否需要再安裝

- [iviewui](https://www.iviewui.com/view-ui-plus/guide/install)
    文件使用 Option API：比較友善一點
    官方有配置範例https://github.com/view-design/view-ui-project-vuecli
    
    1. 安裝
        ```sh
        npm install view-ui-plus --save
        ```
    2. main.js
        ```
            import { createApp } from 'vue'
            import ViewUIPlus from 'view-ui-plus'
            import App from './App.vue'
            import router from './router'
            import store from './store'
            import 'view-ui-plus/dist/styles/viewuiplus.css'

            const app = createApp(App)
            app.use(store).use(router)
            app.use(ViewUIPlus)
            app.mount('#app')
        ```
    3. scss被覆蓋了
        需要把原本App.vue放的scss改位置到**main.js**，請參考寫法
        
    4. 組件運用可以參考
         src/components/HelloWorld.vue

- [Element Plus](https://element-plus.org/)
    很穩定，不過範例大多是Composition API寫法，需要會轉換


