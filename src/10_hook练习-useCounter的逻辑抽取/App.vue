<template>
  <div>hook练习</div>
  <div>此练习主要是说：vue3用setup函数的好处是，同一块逻辑的代码，可以写在一个setup里面，不像vue2要在methods里面写多个方法，同时vue3还可以抽离出来，以便多个页面共同复用同一块逻辑代码</div>

  <div>{{ count }}</div>
  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>

  <hr />
  <hooks-practice></hooks-practice>
  <hr />

  <button @click="oneClick">标题-1</button>
  <button @click="twoClick">标题-2</button>
  <button @click="threeClick">标题-3</button>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>

</template>

<script>
import useCounter from './useCouter';
import hooksPractice from './hooks-practice.vue'
import useTitle from './useTitle'
import useScrollPosition from './useScrollPosition'
export default {
  components: { hooksPractice },
  setup() {
    const title = useTitle('首页')

    function oneClick(){
      title.value = '标题1'
    }
    function twoClick(){
      title.value = '标题2'
    }
    function threeClick(){
      title.value = '标题3'
    }

    // 当前页面的滚动
    const {scrollPostion} = useScrollPosition()
    console.log(scrollPostion.x,scrollPostion.y)
    return {
      ...useCounter(),
      oneClick,
      twoClick,
      threeClick,
      scrollPostion
    }
  }
}
</script>

<style>

</style>