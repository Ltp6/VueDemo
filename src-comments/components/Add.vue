<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        //初始化数据
        name:'',
        content:''
      }
    },
    props:{
      //指定了属性名，属性值得类型，必要性
      addComment:{
        type:Function,
        required:true
      }
    },
    methods:{
      add(){
        //1、数据校验
        const name = this.name.trim()
          const content=this.content.trim()
        if (!name || !content ){
          alert('用户名或内容不能为空')
          return
        }
        //2、封装成为一个comment对象
        const comment={name,content}
        //3、将comment添加到comments中
        this.addComment(comment)
        //4、清除数据
        this.name=''
        this.content=''
      }
    }
  }
</script>

<style scoped>

</style>
