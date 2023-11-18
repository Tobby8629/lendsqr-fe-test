import React, { useState } from 'react'
import { Navbar, Sidebar } from '../../components'
import Main from '../../components/Main/Main'

const Dashboard = () => {
  const [open, setopen] = useState(false)
  return (
    <div>
      <Navbar />
      <Sidebar open = {open} />
      <Main open={open} setopen={setopen}/>
    </div>
  )
}

export default Dashboard