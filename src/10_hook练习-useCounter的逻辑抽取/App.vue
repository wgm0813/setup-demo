<template>
  <div>hook练习</div>
  <div>此练习主要是说：vue3用setup函数的好处是，同一块逻辑的代码，可以写在一个setup里面，不像vue2要在methods里面写多个方法，同时vue3还可以抽离出来，以便多个页面共同复用同一块逻辑代码</div>

  <div>{{ count }}</div>
  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>

  <hr />
  <hooks-practice></hooks-practice>
</template>

<script>
import useCounter from './useCouter';
import hooksPractice from './hooks-practice.vue'
export default {
  components: { hooksPractice },
  setup() {
    return {
      ...useCounter()
    }
  }
}
</script>

<style>

</style>