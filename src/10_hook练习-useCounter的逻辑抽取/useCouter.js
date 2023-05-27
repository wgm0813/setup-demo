import { ref } from "vue";

export default function useCounter() {
  const count = ref(0);

  function decrement() {
    count.value--;
  }
  function increment() {
    count.value++;
  }

  return {
    count,
    decrement,
    increment
  };
}
