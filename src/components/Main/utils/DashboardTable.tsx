import React, { useState } from 'react'
import TableHeader from './TableHeader'
import Popup from './Popup'
import TableBody from './TableBody'

const DashboardTable = () => {
  const [popup, setpopup] = useState(false)

  return (
    <div className='wrap'>
    <table>
      <TableHeader setpop={setpopup} popup = {popup}/>
      <TableBody />
    </table>
    {popup && <Popup />}
    </div>
  )
}

export default DashboardTable