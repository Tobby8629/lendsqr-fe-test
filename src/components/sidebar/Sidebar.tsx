import React from 'react'
import List from './utils/List'
import Dashboard from './assets/dashboard.png'
import organization from './assets/change-org.png'
import change from './assets/drop-down.png'
import './style/styles.scss'
import { Business, Customers, Settings } from './group'

const Sidebar = () => {
  return (
    <nav>
      <div className='drop-down'>
        <img src={organization} alt='change organization' />
        <p>Switch Organization</p>
        <img src={change} alt='change organization' />
      </div>
      <List icon={Dashboard} text='dashboard' />
      <Customers />
      <Business />
      <Settings />
    </nav>
  )
}

export default Sidebar