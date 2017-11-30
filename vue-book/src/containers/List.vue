<template>
    <div>
      <MHeader title="列表"></MHeader>
      <ul>
        <!--如果通过对象传递params属性，需要给路径起别名，否则params不生效-->
        <router-link :to="{name:'detail',params:{bid:product.id}}" v-for="(product,index) in products" :key="index" tag="li">
          <img :src="product.productCover" alt="">
          <div class="right">
            <h3>{{product.productName}}</h3>
            <p>{{product.productInfo}}</p>
            <p class="red"> ￥:{{product.productPrice}}</p>
            <button class="btn" @click="remove(product.id)">删除</button>
          </div>

        </router-link>
      </ul>
    </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue';
  import axios from 'axios';
    export default {
        data(){
            return {
                products:[]
            }
        },
      components:{
        MHeader
      },
        created(){
            axios.get('/api/products').then(res=>{
                this.products=res.data;
            }).catch(err=>{
                console.log(err)
            })
        },
        methods: {
            remove(id){
                axios.delete(`/api/products?id=${id}`);
               this.products=this.products.filter(item=>item.id !==id)
            }
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
  ul{
    padding-top: 45px;
    padding-bottom: 45px;
    box-sizing: border-box;
    width:100%;
    height:100%;
  }
  ul li{
    width:100%;
    height:120px;
    margin: 5px 10px;
    border-bottom: 1px solid #cecece;
  }
  ul li img{
    float: left;
    width:30%;
    height:120px;
  }
  ul li .right{
    width: 70%;
    height:120px;
    float: right;
    padding-left: 15px;
    box-sizing: border-box;
  }
  ul li .right h3{
    margin-top: 5px;
  }
  ul li .right p{
    margin-top: 5px;

  }
  ul li .right .red{
    color:red
  }

  ul li .right .btn{
    border: none;
    width: 50px;
    height:30px;
    color:#fff;
    border-radius: 2px;
    background-color: red;
    font-size: 18px;
   margin-left: 140px;
  }
</style>
