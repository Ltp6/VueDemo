<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodos="addTodos"/>
        <TodoList :todos="todos" :deleteTodos="deleteTodos"/>
        <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    //数据在哪里，添加数据的行为就在哪个组件
    data () {
      return {
        //从localStorage中读取数据
        todos: JSON.parse(window.localStorage.getItem('todos_key')||'[]')
      }
    },
    methods: {
      addTodos (todo) {
        this.todos.unshift(todo)
      },
      deleteTodos (index) {
        this.todos.splice(index, 1)
      },
      //删除选中的任务
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全选或者全不选
      selectAllTodos (check) {
        this.todos.forEach(todo => todo.complete = check)
      }
    },
    watch:{//监视
      todos:{
        deep:true,//深度监视
        handler:function (newValue) {
          //将更新后的todos数据转化为Json数据，并保存在localStorage中
          window.localStorage.setItem('todos_key',JSON.stringify(newValue))
        }
      }
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
