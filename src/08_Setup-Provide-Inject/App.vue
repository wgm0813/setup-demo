<template>
  <div>provide/inject</div>
  <show-info></show-info>
</template>

<script>
import { provide } from 'vue'
import ShowInfo from '@/08_Setup-Provide-Inject/ShowInfo.vue'
export default {
  components: { ShowInfo },
  setup() {
    let counter = 100
    let info = {
      name: 'why',
      age: 10
    }

    provide('counter', counter)
    provide('info', info)
  }
}
</script>

<style>

</style>