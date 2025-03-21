import { useState, useCallback } from 'react';

export function useCount() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); 

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []); 
  return { count, decrement, increment };
}
