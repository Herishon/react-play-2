import React, {useState, useContext} from 'react'
import { UserContext } from './UserContext';
import UseContextChild1 from './UseContextChild1';

const UseContext = () => {
  const [name, setName] = useState("John Doe");
  return (
    <>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 font-bold mb-12 after:content-[""] after:w-full after:h-1 after:bg-gradient-to-l after:from-purple-500 after:to-red-500 after:rounded after:block after'>
        Use Context Main
      </h1>
      <UserContext.Provider value={name}>
        <UseContextChild1 />
      </UserContext.Provider>
    </>
  )
}

export default UseContext;
