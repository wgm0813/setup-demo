<template>
  <div>
    <h2>message: {{ message }}</h2>
    <button @click="changeBtn">修改</button>
  </div>
</template>

<script>
export default {
  setup() {
    // 定义普通的数据
    // 缺点：数据不是响应式的
    let message = "hello world"

    const changeBtn = () => {
      message = '王高敏'
      console.log(message)
    }
    return  {message,changeBtn}
  }
}
</script>

<style>

</style>