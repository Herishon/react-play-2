import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const UseContextChild2 = () => {

  const user = useContext(UserContext);

  return (
    <>
      <h2>User Context Child 2</h2>
      <p>Context value: {user}</p>
    </>
  )
}

export default UseContextChild2;
