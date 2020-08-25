import Vue from 'vue'
import App from './APP.vue'

new Vue({
    el:'#app',
    router,
    // 指定渲染单文件组件
    render:function(create){
        return create(App)
    }
})