import React from 'react'

export const PropsPassingFun = ( props ) => {

  const { childBtnFun } = props;

  return (
    <div>
      <h1>PropsPassingFun</h1>
      <button onClick={ childBtnFun }>Click Me</button>
    </div>
  )
}
