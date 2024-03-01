import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const UseContext1 = () => {

  const user = useContext(UserContext);

  return (
    <>
      <div className='border'>
        <h2 className=''>User Context Child 1</h2>
        <p>Context value: {user}</p>
      </div>
    </>
  )
}

export default UseContext1;
