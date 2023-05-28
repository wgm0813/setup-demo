import { reactive } from "vue"

export default function useScrollPosition(){
  const scrollPostion = reactive({
    x: 0,
    y: 0
  })

  document.addEventListener('scroll',() => {
    scrollPostion.x = window.scrollX
    scrollPostion.y = window.scrollY
    console.log(scrollPostion)
  })

  return {
    scrollPostion
  }
}