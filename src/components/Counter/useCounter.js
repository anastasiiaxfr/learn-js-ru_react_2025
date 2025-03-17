import { useState } from 'react'

export function useCounter() {
  const [count, setCount] = useState(0)
  const increment = (e) => {e.preventDefault();  setCount(count + 1)}
  const decrement = (e) => {e.preventDefault(); setCount(count - 1)}
  return { count, decrement, increment }
}