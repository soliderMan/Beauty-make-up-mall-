<template>
    <div class="only">
      <MHeader title="美妆商城"></MHeader>
      <div class="content">
        <Swiper :swiperSlides="arr"></Swiper>
           <h3>商品列表</h3>
        <ul class="hot-list">
          <li v-for="product in products">
            <img :src="product.productCover" alt="">
            <h4>{{product.productName}}</h4>
            <span> ￥:{{product.productPrice}}</span>
          </li>
        </ul>

      </div>
    </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue'
  import Swiper from '../components/Swiper.vue'
  import axios from 'axios'
    export default {
        data(){
            return {
                arr:[],
              products:[]
            }
        },
      created(){  //跨域 8080=>3000 在config/index.js => proxyTable: {}
           axios.get('/api/sliders').then(res=>{
               this.arr=res.data;
           }).catch(err=>console.log(err))
        axios.get('/api/hot').then(res=>{
            this.products=res.data;
        }).catch(err=>console.log(err))
      },
        components:{
          MHeader,
          Swiper
        },
        methods: {},
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .only{
    width: 100%;
    height:100%;
  }
  .content{
    width: 100%;
    height:100%;
    padding: 45px 0;
    overflow: scroll;
    box-sizing: border-box;
  }
  h4{
    color:#3A3A3A;
  }
  .hot-list{
    /*flex布局默认是不换行的，所以需要加上一个flex-wrap: wrap;*/
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
  }
  .hot-list li{
    width: 33.333%;
  }

  .hot-list li img{
    width:100% ;

  }

</style>
