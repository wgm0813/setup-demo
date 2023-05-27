<template>
  <div>这个是子组件</div>
</template>

<script>
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

    return {open}
  }
}
</script>

<style>

</style>