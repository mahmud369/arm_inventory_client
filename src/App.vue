<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<style>
  @import './assets/css/styles.css';
</style>

<script>
import Menu from '@/components/Menu'

export default {
  components:{
    Menu
  }
}
</script>