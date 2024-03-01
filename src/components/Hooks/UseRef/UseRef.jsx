import React, { useEffect, useState, useRef } from 'react'

const UseRef = () => {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h2>Use Ref</h2>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Count'/>
      <h2>Render count: {count.current}</h2>
    </>
  )
}

export default UseRef;
