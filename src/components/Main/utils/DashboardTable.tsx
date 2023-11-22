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
     <Popup popup = {popup} />
    </div>
  )
}

export default DashboardTable