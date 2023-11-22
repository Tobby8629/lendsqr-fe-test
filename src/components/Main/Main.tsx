import React, { useEffect } from 'react'
import './styles/styles.scss'
import Card from './utils/Card'
import profileUser from './Assets/users.png'
import active from './Assets/active.png'
import loan from './Assets/loan.png'
import savings from './Assets/saving.png'
import DashboardTable from './utils/DashboardTable'
import Menu from './utils/Menu'
import Pagination from './utils/Pagination'
import { useSelector } from 'react-redux'
import { user } from './utils/Interface'
import Loading from '../Loading/Loading'

interface toogle {
  open: boolean,
  setopen: (open: boolean) => void,

}

const Main = ({open, setopen}: toogle) => {
  const users = useSelector((state: any)=>state.user.users)
  const activated = users.filter((user: user)=>user.status === 'active')
  const onLoan = users.filter((user: user)=>user.loan_repay >  0)
  const withSavings = users.filter((user: user)=>user.Amount >  0)
  console.log(users)
  return (
  <>
    {users.length > 0 ?
    <main className='dashboard wrapper'>
      <div className='top'>
        <h3>Users</h3>
        <Menu open={open} setopen={setopen}/>
      </div>
      <section className='grid'>
        <Card image={profileUser} status='Users' value={users.length}/>
        <Card image={active} status='Active Users' value={activated.length}/>
        <Card image={loan} status='Users with Loans' value={onLoan.length}/>
        <Card image={savings} status='Users with Savings' value={withSavings.length}/> 
      </section>
      <DashboardTable />
      <Pagination />  
    </main>  : <Loading />
  }
  </>
  )
}

export default Main