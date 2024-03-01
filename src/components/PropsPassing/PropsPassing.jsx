import React from 'react'

export const PropsPassing = ( props ) => {
  // destructuring the props
  const { title, description } = props;
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}
