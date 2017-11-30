<template>
  <div id="app">
    <MNav></MNav>
    <router-view/>
  </div>
</template>

<script>
  import MNav from './components/Nav.vue'
export default {
  name: 'app',
  components:{
      MNav
  }
}
</script>

<style>

  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  body{
    width: 100%;
    height:100%;
  }

</style>
