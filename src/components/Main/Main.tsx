import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles/styles.scss'

interface toogle {
  open: boolean,
  setopen: (open: boolean) => void
}

const Main = ({open, setopen}: toogle) => {
  return (
    <main className='dashboard'>
      <div className='top'>
        <h3>Users</h3>
        <div>
          {open ? <FontAwesomeIcon icon={faTimes} onClick={() =>setopen(false)}/> :
          <FontAwesomeIcon icon={faBars} onClick={() =>setopen(true)}/> }
        </div>
      </div>
    </main>
  )
}

export default Main