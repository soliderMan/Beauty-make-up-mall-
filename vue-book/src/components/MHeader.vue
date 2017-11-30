<template>
    <div>
        {{title}}
      <slot></slot>
      <i iconfont icon-fanhui v-if="back"></i>
    </div>
</template>
<script>
    export default {
        data(){
            return {
              back:{
                type:Boolean,
                default:true
              }
            }
        },
      props:{
        title:{}
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

  div{
    width: 100%;
    height:45px;
    line-height: 45px;
    position: fixed;
    top:0;
    left:0;
    background-color: #E0E0E0;
    font-size: 18px;
    text-align: center;
    z-index: 100;
  }
</style>
