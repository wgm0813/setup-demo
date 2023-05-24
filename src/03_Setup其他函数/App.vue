<template>
  <h2>App:{{ info }}</h2>
  <show-info :info="info" @changeInfo="changeInfoName"></show-info>
</template>

<script>
import { reactive } from 'vue'
import ShowInfo from './ShowInfo.vue';
export default {
  components: { ShowInfo },
  setup() {
    // 本地定义多个数据，传递给子组件
    const info = reactive({
      name: 'why',
      age: '18',
    })

    const changeInfoName=(payload)=>{
      info.name = payload
    }
    return {info,changeInfoName};
  }
}
</script>

<style>

</style>