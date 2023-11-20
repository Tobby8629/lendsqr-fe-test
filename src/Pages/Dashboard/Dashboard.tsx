import React from 'react'
import Main from '../../components/Main/Main'

interface dashboard_interface {
  open: boolean,
  setopen: (open: boolean) => void
}

const Dashboard = ({open, setopen}: dashboard_interface) => {
 
  return (
    <div>
      <Main open={open} setopen={setopen} />
    </div>
  )
}

export default Dashboard