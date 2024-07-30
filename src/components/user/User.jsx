import React from 'react'
import "./User.css"
export const User = ({userId, userName}) => {

    console.log("userName-------------", userName);
  return (
    <div className='user'>
      {userName}
    </div>
  )
}

