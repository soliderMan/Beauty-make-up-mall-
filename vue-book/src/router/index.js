import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../containers/Home.vue'
import List from '../containers/List.vue'
import Add from '../containers/Add.vue'
import Detail from '../containers/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', component: Home},
    {path: '/list', component: List},
    {path: '/add', component: Add},
    // <!--如果通过对象传递params属性，需要给路径起别名 name:''，否则params不生效-->
    {path:'/detail/:bid',component:Detail,name:'detail'},
    {path:'*',redirect:'/home'}
  ]
})
