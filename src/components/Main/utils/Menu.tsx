import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface menu_interface {
  open: boolean,
  setopen: (open: boolean) => void,
}

function Menu({open,setopen}: menu_interface) {
  return (
    <div className='icon'>
        {open ? <FontAwesomeIcon icon={faTimes} onClick={() =>setopen(false)}/> :
        <FontAwesomeIcon icon={faBars} onClick={() =>setopen(true)}/> }
    </div>
  )
}

export default Menu