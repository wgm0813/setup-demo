<template>
  <div>{{ count }}</div>
  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>
</template>

<script>
import useCounter from './useCouter';
export default {
  setup() {
    return {
      ...useCounter()
    }
  }
}
</script>

<style>

</style>