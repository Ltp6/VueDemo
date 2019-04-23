<template>
  <div id="app">
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
    data () {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted () {
      //发送ajax请求
      const url = 'https://api.github.com/search/repositories?q=vu&sort=stars'
      /*this.$http.get(url).then(
        //成功
        response => {
          const result = response.data
          //最受欢迎的库
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        },
        //失败
        response => {
          alert('请求失败')
        }
      )*/
      //使用axios
      Axios.get(url).then(response => {
        const result = response.data
        //最受欢迎的库
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(error => {
        alert('请求失败ssss')
      })

    }
  }
</script>

<style scoped>

</style>
