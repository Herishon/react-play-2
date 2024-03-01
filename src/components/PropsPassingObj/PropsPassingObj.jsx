import React from 'react'

export const PropsPassingObj = ( props ) => {

  const { name, age, company, profession, joinDate } = props.user;

  return (
    <div>
      <h1>PropsPassingObj</h1>
      <ul>
        <li>Employee Name: { name }</li>
        <li>Company Name: { company }</li>
        <li>Profession: { profession }</li>
        <li>Age: { age }</li>
        <li>Date of Join: { joinDate }</li>
      </ul>
    </div>
  )
}
