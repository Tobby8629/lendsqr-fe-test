import React from 'react'
import filter from '../Assets/filter.png'

interface header_interface {
  header: string,
  key: number,
  setpop: (popup: boolean) => void,
  popup: boolean;
}

const TableHeader = ({header,key,setpop, popup}: header_interface) => {
  return (
    <th key={key}>
      <span className='head'>{header}</span>
      <span className='image' onClick={()=> setpop(!popup) }>
        <img src={filter} alt='filter' />
      </span>
    </th>
  )
}

export default TableHeader