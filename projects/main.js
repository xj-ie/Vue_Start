// 引入vue和App组件
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el:'#app',
    // 渲染App组件中的内容，返回给index.html文件使用
    render:function(creater){
        return creater(App)
    }
})
