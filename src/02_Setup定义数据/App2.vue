<template>
  <div>
    <form>
      账号：<input type="text" v-model="account.username">
      密码：<input type="password" v-model="account.password">
    </form>  
  </div>
</template>

<script>
import {reactive, ref,onMounted} from 'vue'
export default {
  name: 'App',
  setup() {
    // 定义响应式数据：reactive/ref
    // 强调：ref也可以定义复杂的数据
    const info =ref({})

    // reactive的应用场景
    // reactive应用于本地的数据
    // 多个数据之间有联系/关系（聚合的数据，组织在一起会有特定的作用）
    const account = reactive({
      username: 'Wanggaomin',
      password: '123456'
    })

    // ref的应用场景：其他场景基本用ref(computed)
    // 定义本地的一些简单数据
    const message = ref('hello world')
    const counter = ref(0)

    // 定义从网络中获取的数据也是使用ref
    // const musics = reactive([])
    const musics = ref([])
    onMounted(() => {
      const serverMusics = ['1','2','3']
      musics.value= serverMusics
    })
    return {info,account,message,counter,musics}

  }
}
</script>

<style>

</style>