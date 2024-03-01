import { useState, useEffect } from 'react'
import './App.css'
// props 
import { PropsPassing } from './components/PropsPassing/PropsPassing'
import { PropsPassingFun } from './components/PropsPassingFun/PropsPassingFun'
import { PropsPassingObj } from './components/PropsPassingObj/PropsPassingObj'
// hooks
import UseEffect from './components/Hooks/UseEffect'
import UseContext from './components/Hooks/UseContext/UseContext'
import UseContextChild2 from './components/Hooks/UseContext/UseContextChild2'
import UseRef from './components/Hooks/UseRef/UseRef'


function App() {

  const user = {
    name: "Herishon",
    age: 28,
    profession: "FrontEnd Developer",
    company: "Poronics Limited",
    joinDate: "4-Feb-2018",
  }

  const sayHello = () => {
    alert(`Hello Mr. ${user.name}`);
  }

  return (
    <>
      {/* <PropsPassing title="Vite Project" description="This is a Vite learning project." /> */}
      {/* <PropsPassingObj user={ user } /> */}
      {/* <PropsPassingFun childBtnFun={sayHello} /> */}
      {/* <UseEffect /> */}
      {/* <UseContext />
      <UseContextChild2 /> */}
      <UseRef />
    </>
  )
}

export default App
