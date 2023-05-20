<template>
  <div>
    <h2>message: {{ message }}</h2>
    <button @click="changeBtn">修改</button>
    <hr>
    
    <h2>账号: {{ account.username }}</h2>
    <h2>密码: {{ account.password }}</h2>
    <button @click="changeName">修改账户</button>
    <hr>
    
    <!-- 默认情况下在tempalte中使用ref时，vue会自动对其进行解包（取出其中value，ref使用时不需要.value，在Setup操作时需要.value -->
    <h2>当前技术：{{ counter }}</h2>
    <button @click="add">+1</button>
    <button @click="deAdd">-1</button>


    <hr>
    <!-- 使用的时候不需要写.value -->
    <h2>当前计数： {{ info.counter }}</h2>
    <!-- 修改的时候需要些.value -->
    <button @click="info.counter.value++">+1</button>
    <button @click="info.counter.value--">+1</button>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
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
    
    // 响应式数据
    // ref函数：定义简单类型的数据（也可以定义复杂类型的数据）
    const counter = ref(0);
    const add = () => {
      counter.value += 1
    }
    const deAdd = () => {
      counter.value -= 1;
    }

    // ref时浅层解包
    const info = {
      counter
    }
    return  {message,changeBtn,account,changeName, counter, add, deAdd, info}
  }
}
</script>

<style>

</style>