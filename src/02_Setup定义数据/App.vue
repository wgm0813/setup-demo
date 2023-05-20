<template>
  <div>
    <h2>message: {{ message }}</h2>
    <button @click="changeBtn">修改</button>
    <hr>
    
    <h2>账号: {{ account.username }}</h2>
    <h2>密码: {{ account.password }}</h2>
    <button @click="changeName">修改账户</button>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  setup() {
    // 定义普通的数据
    // 缺点：数据不是响应式的,点击修改页面没有变化
    let message = "hello world"
    const changeBtn = () => {
      message = '王高敏'
      console.log(message)
    }
    
    //定义响应式数据
    // reactive函数:定义复杂类型的数据
    const account = reactive({
      username: 'wanggaomin',
      password: '123456'
    });
    const changeName = () => {
      account.username = '王高敏'
      console.log(account)
    }
    return  {message,changeBtn,account,changeName}
  }
}
</script>

<style>

</style>