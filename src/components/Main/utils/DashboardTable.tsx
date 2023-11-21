import React, { useState } from 'react'
import TableHeader from './TableHeader'
import Popup from './Popup'
import TableBody from './TableBody'

const DashboardTable = () => {
  const header = [
    {title: "organization", id: 1},
    {title: "username", id: 2},
    {title: "email", id: 3},
    {title: "phone number", id: 4},
    {title: "Date joined", id: 5},
    {title: "Status", id: 6},
  ]

  const [popup, setpopup] = useState(false)

  return (
    <div className='wrap'>
    <table>
      <thead>
        <tr>
          {header.map((e)=>(
            <TableHeader popup={popup} header={e.title} key={e.id} setpop = {setpopup} />
          ))}
        </tr>
      </thead>
      <TableBody />
    </table>
    {popup && <Popup />}
    </div>
  )
}

export default DashboardTable