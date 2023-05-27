<template>
  <div>{{ names.firstName + names.lastName }}</div>
  <div>{{ fullName }}</div>
  <div>{{ fullName }}</div>
  <button @click="changName">修改</button>
</template>

<script>
import { reactive,computed } from 'vue'
export default {
  setup(){
    // 定义数据
    const names = reactive({
      firstName: '王',
      lastName: '高敏'
    })

    // const fullname = computed(() => {
    //   return names.firstName + names.lastName
    // })

    const fullName = computed({
      get:() => {
        return names.firstName + ' ' + names.lastName
      },
      set: (newValue) => {
        const templates = newValue.split(' ');
        names.firstName = templates[0]
        names.lastName = templates[1]
      }
    })

    function changName() {
      fullName.value = '杨 幂'
      console.log(fullName);
    }
    return {names,fullName,changName}
  }
}
</script>

<style>

</style>