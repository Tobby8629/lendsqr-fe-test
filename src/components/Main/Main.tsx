import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles/styles.scss'
import Card from './utils/Card'
import user from './Assets/users.png'
import active from './Assets/active.png'
import loan from './Assets/loan.png'
import savings from './Assets/saving.png'

interface toogle {
  open: boolean,
  setopen: (open: boolean) => void
}

const Main = ({open, setopen}: toogle) => {
  return (
    <main className='dashboard'>
      <div className='top'>
        <h3>Users</h3>
        <div className='icon'>
          {open ? <FontAwesomeIcon icon={faTimes} onClick={() =>setopen(false)}/> :
          <FontAwesomeIcon icon={faBars} onClick={() =>setopen(true)}/> }
        </div>
      </div>
      <section className='grid'>
        <Card image={user} status='Users' value={'2,000'}/>
        <Card image={active} status='Active Users' value={'2,000'}/>
        <Card image={loan} status='Users with Loans' value={'2,000'}/>
        <Card image={savings} status='Users with Savings' value={'2,000'}/>
      </section>
    </main>
  )
}

export default Main