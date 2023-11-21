import React from 'react'
import './styles/styles.scss'
import Card from './utils/Card'
import user from './Assets/users.png'
import active from './Assets/active.png'
import loan from './Assets/loan.png'
import savings from './Assets/saving.png'
import DashboardTable from './utils/DashboardTable'
import Menu from './utils/Menu'
import Pagination from './utils/Pagination'

interface toogle {
  open: boolean,
  setopen: (open: boolean) => void,

}

const Main = ({open, setopen}: toogle) => {
  return (
    <main className='dashboard'>
      <div className='top'>
        <h3>Users</h3>
        <Menu open={open} setopen={setopen}/>
      </div>
      <section className='grid'>
        <Card image={user} status='Users' value={'2,000'}/>
        <Card image={active} status='Active Users' value={'2,000'}/>
        <Card image={loan} status='Users with Loans' value={'2,000'}/>
        <Card image={savings} status='Users with Savings' value={'2,000'}/>
      </section>
      <DashboardTable />
      <Pagination />
    </main>
  )
}

export default Main