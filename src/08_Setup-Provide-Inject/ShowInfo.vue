<template>
  <div>这个是子组件</div>
  <div>{{counter}} - {{ info }}</div>
</template>

<script>
import { inject } from 'vue'
export default {
  // methods:{
  //   open(){
  //     console.log('子组件的方法')
  //   }
  // }
  setup() {
    function open() {
      console.log('showinfo子组件的方法')
    }
    const counter = inject('counter')
    const info = inject('info')
    return {open,counter,info}
  }
}
</script>

<style>

</style>