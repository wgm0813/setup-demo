<template>
  <div>setup生命周期函数</div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  // vue2常见的生命周期选项
  // created(){},
  // beforeMount(){},
  // mounted(){},
  // beforeUpdate(){},

  // vue3在setup里面使用生命周期
  setup(){
    // 需要注册别的生命周期
    onMounted(() => {
      console.log('onMounted')
    })
  }
}
</script>

<style>

</style>