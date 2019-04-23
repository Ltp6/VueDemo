<template>
  <div class="container" id="app">
    <Search/>
    <UserMain/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Main from './components/Main'
  export default {
    name: 'App',
    components:{
      Search,
      UserMain:Main
    }
  }
</script>

<style scoped>

</style>
