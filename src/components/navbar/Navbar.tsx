import React from 'react'
import logo from './assets/lendsqr.png'
import { Searchbar, User } from './utils'
import './styles/styles.scss'

const Navbar = () => {
  return (
    <nav className='top-bar'>
      <div>
        <img src={logo} alt='logo'/>
      </div>
      <Searchbar />
      <User />
    </nav>
  )
}

export default Navbar