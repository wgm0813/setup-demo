<template>
  <h2>App:{{ info }}</h2>
  <show-info :info="info" :roInfo="roInfo" @changeInfo="changeInfoName" @changeInfoRo="changeInfoRoName"></show-info>
</template>

<script>
import { reactive, readonly } from 'vue'
import ShowInfo from './ShowInfo.vue';
export default {
  components: { ShowInfo },
  setup() {
    // 本地定义多个数据，传递给子组件
    const info = reactive({
      name: 'why',
      age: '18',
    })

    // 使用readonly包裹info
    const roInfo = readonly(info)

    const changeInfoName=(payload)=>{
      info.name = payload
    }
    const changeInfoRoName=(payload)=>{
      info.name = payload
    }
    return {info, changeInfoName, roInfo,changeInfoRoName};
  }
}
</script>

<style>

</style>