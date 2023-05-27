<template>
  <div>setup语法糖 {{ message }}</div>
  <button @click="changeMessage">修改消息</button>
</template>

<script setup>
// 导入子组件也直接在这里面加就行，不用components了
import {ref} from 'vue'
// import ShowInfo from '@/03_Setup其他函数/ShowInfo'
// 所有编写在顶层的代码，都是默认暴露给template可以使用


// 定义响应式数据
const message = ref('hello world')

// 定义绑定的函数
function changeMessage(){
  message.value = '你好啊'
}
</script>

<style>

</style>