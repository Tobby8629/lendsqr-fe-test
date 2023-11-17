import React from 'react'
import notification from '../assets/bells.png'
import avatar from '../assets/avatar.png'
import dropdown from '../assets/dropdown.png'

const User = () => {
  return (
    <div className='user'>
      <p className='docs'>Docs</p>
      <div className='user-details'>
        <div className='notification'>
          <img src={notification} alt='notifications' />
        </div>
        <img src={avatar} alt='username'/>
        <p>Tobby</p>
        <img src={dropdown} alt='dropdown' />
      </div>
    </div>
  )
}

export default User