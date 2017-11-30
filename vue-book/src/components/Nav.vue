<template>
    <Nav>
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>

      <router-link to="/list">
        <i class="iconfont icon-tianjia"></i>
        <span>列表</span>
      </router-link>

      <router-link to="/add">
        <i class="iconfont icon-chazhaobiaodanliebiao"></i>
        <span>添加</span>
      </router-link>
    </Nav>
</template>
<script>

    export default {
        data(){
            return {}
        },
        created(){
        },
        methods: {},
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
  Nav{
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
    height:45px;
    background-color: #fff;
    border-top: 1px solid #cecece;
    display: flex;
  }
  Nav a{
    flex: 1;
    text-align: center;
  }
  Nav a i{
    display:block;
    font-size: 20px;
    color:#000;
  }
  Nav a span{
    font-size: 16px;
    color:#000;

  }
</style>
