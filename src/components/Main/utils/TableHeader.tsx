import React from 'react'
import filter from '../Assets/filter.png'

interface header_interface {
  setpop: (popup: boolean) => void,
  popup: boolean;
}

const TableHeader = ({setpop, popup}: header_interface) => {
  const header = [
    {title: "organization", id: 1},
    {title: "username", id: 2},
    {title: "email", id: 3},
    {title: "phone number", id: 4},
    {title: "Date joined", id: 5},
    {title: "Status", id: 6},
  ]
  return (
    <thead>
      <tr>
        {header.map(header => (
        <th key={header.id}>
          <span className='header-flex'>
            <span className='head'>{header.title}</span>
            <span className='image' onClick={()=> setpop(!popup) }>
              <img src={filter} alt='filter' />
            </span>
          </span>
        </th>
        ))}
      </tr>
    </thead>

  )
}

export default TableHeader