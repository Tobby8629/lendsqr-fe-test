import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Menu from '../Main/utils/Menu'
import { user } from '../Main/utils/Interface'

interface menu_interface {
  open: boolean,
  user: user,
  setopen: (open: boolean) => void,
}

const Header = ({open,setopen, user}: menu_interface ) => {
  const [desktop, setdesktop] = useState(false)
  useEffect(()=>{
    const resize = () => {
      if (window.innerWidth < 768) {
        setdesktop(false)
      } else {
        setdesktop(true)
      }
    }
    resize()
    window.addEventListener('resize', resize)
  })
  return (
    <section className='details_page'>
      <div className='menu'>
        <Link to="/" className='btn-back'>
          <FontAwesomeIcon icon={faArrowLeft}/>
          <span>Back to users</span>
        </Link>
        <Menu open={open} setopen={setopen}/>
      </div>
      <div className='user'>
        <h3 className='title'>User Details</h3>
        <div className='status-btn'>
          <button className='blacklist'>Blacklist user</button>
          <button className='active'>Activate user</button>
        </div>
      </div>
      <div className='profile'>
        <div className='profile-flex'>
          <div className='profile-image'>
            <div className='icon'>
              <FontAwesomeIcon icon={faUser} size='lg' />
            </div>
            <div className='username'>
              <h3>{user.full_name}</h3>
              <p>{user.serial}</p>
            </div>
          </div>
          <div className='div'>
          </div>
          <div className='acct-detail'>
            <p>user's tier</p>
            <p>stars</p>
          </div>
          <div className='div'>
          </div>
          <div className='acct-bal'>
            <h3>{`₦${user.Amount.toLocaleString()}`}</h3>
            <p>{`${user.account_number}/${user.bank} Bank`}</p>
          </div>
        </div>
        <div className='profile-tab'>
          <ul>
            <li>{desktop ? "General details" : "Details"}</li>
            <li>{desktop ? "Documents" : "docs"} </li>
            <li>{desktop? "Balance" : "bal" }</li>
            <li>loans</li>
            <li>savings</li>
            <li>{desktop? "app and system" : "app & system"}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header