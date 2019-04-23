import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import './css/bootstrap.css'

//声明使用插件
//Vue.use(VueResource)//内部会给vm对象和组件对象添加一个属性：$http

//入口文件
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
