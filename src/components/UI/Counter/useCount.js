import { useState } from 'react';

export default function useCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  }; 

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  }; 
  return { count, decrement, increment };
}

