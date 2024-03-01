import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  )
}

export default UseEffect;
