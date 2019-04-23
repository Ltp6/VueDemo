/*
* 1）对象
* 2）函数
* 如果只有一个方法就暴露函数，如果存在对个方法就暴露对象
* */
const TODOS_KEY='todos_key'
export default {
  //存数据
  saveTodos(todos){
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },
  //读数据
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KEY)||'[]')
  }
}
