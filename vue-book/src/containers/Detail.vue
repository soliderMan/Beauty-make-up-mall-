<template>
    <div>
      <ul class="pic">
        <li v-for="l in product">
          <img :src="l.productCover" alt="">
          <slot></slot>
          <i class="iconfont icon-fanhui fan" v-if="back"></i>
          <i class="iconfont icon-goumaiyemiande-xiaogouwuche car"></i>
          <i class="iconfont icon-xiaoxilingdang msg"></i>
        </li>

      </ul>
      <div class="det">
        <p>卡姿兰初学者彩妆全套组合正品，裸妆淡妆化妆品套装 美妆工具</p>
        <div class="share">
          <i class="iconfont icon-fenxiang"></i>
          <span>分享链接</span>
        </div>
      </div>


    </div>
</template>
<script>
  import axios from 'axios';
    export default {
        data(){
            return {
                product:[],
              back:{
                type:Boolean,
                default:true
              }
            }
        },
        created(){
          axios.get('/api/products').then(res=>{
          this.products=res.data;
        }).catch(err=>{
            console.log(err)
            })
        },
        methods: {
//            getOneProduct(id){
//              this.product= axios.get(`/api/products?id=${id}`);
//
//            }
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
  .pic{
    position: relative;
    width:100%;
    height:332px;
    border-bottom: 1px solid #cecece;
  }
  .pic img{
    width: 100%;
    height:100%;
  }
  .pic .fan{
    display: block;
    margin-top: 50px;
    color:#FF3467;
    font-size: 46px;
    position: absolute;
    top:-41px;
    left:10px;
  }
  .pic .car{
    display: block;
    position: absolute;
    top:16px;
    right:87px;
    background: rgba(0,0,0,.3);
    width:40px;
    height:40px;
    border-radius: 50%;
    font-size: 38px;
  }
  .pic .msg{
    display: block;
    position: absolute;
    top:16px;
    right:25px;
    background: rgba(0,0,0,.3);
    width:40px;
    height:40px;
    border-radius: 50%;
    font-size: 38px;
  }
  .det{
    width:100%;
    height:30px;
    margin-top: 10px;
  }
  .det p{
    width:70%;
    float: left;
  }
  .det .share{
    width: 30%;
    height:42px;
  position: absolute;
    right:-46px;
    top:341px;
    margin: 0 auto;

  }
  .det .share i{
    display: block;
    width:20px;
    height:20px;
    /*margin-right: 5px;*/
    font-size: 28px;
    margin-bottom: 5px;

  }
  .det .share span{
    font-size: 13px;
  }
</style>
