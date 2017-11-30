// document.body.innerHTML='hello word'

//vuex 平级组件交互，找共同的父级解决，跨足间交互  eventBus 混乱（发布订阅）

//vuex 主要借鉴了 flux  redux，者两种可以和其他搭配使用，例如和jq，而 vuex只能在vue中使用

//

import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
    el:'#app',
    store, // store被注册到实例上 所有组件都会有一个属性 this.$store
    render: h=>h(App)
})
