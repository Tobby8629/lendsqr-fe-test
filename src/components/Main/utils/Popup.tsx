import React, { useState } from 'react'
interface search {
  organization: string, 
  username: string,
  email: string, 
  date: string, 
  phone: string,
  status:string
}
interface popup_interface {
  popup: boolean
 }

const Popup = ({popup}: popup_interface) => {
  
  const [param, setparam] = useState<search>()
  return (
    <form className={popup ? 'form-popup show' : 'form-popup'}>
      <div className='filter-input'>
        <label className='label-popup'>Organization</label>
        <select>
          <option value=''>select</option>
          <option value='irorun'>Irorun</option>
          <option value='lendstr'>Lendstr</option>
          <option value='lendsqr'>Lendsqr</option>
        </select>
      </div>
      <div className='filter-input'>
        <label htmlFor='username'>username</label>
        <input type='text' id='username' onChange={(e)=> setparam({...param, username: e.target.value })} />
      </div>
      <div className='filter-input'>
        <label htmlFor='email'>email</label>
        <input type='text' id='email' />
      </div>
      <div className='filter-input'>
        <label htmlFor='date'>date</label>
        <input type='date' id='date' />
      </div>
      <div className='filter-input'>
        <label htmlFor='number'>number</label>
        <input type='number' id='number' />
      </div>
      <div className='filter-input'>
        <label className='label-popup'>status</label>
        <select>
          <option value=''>select</option>
          <option value='active'>Active</option>
          <option value='pending'>pending</option>
          <option value='inactive'>inactive</option>
          <option value='blacklist'>Blacklist</option>
        </select>
      </div>
      <div className='filter-btn'>
        <button type="button" className="reset">Reset</button>
        <button type="button" className="filter">Filter</button>
      </div>
    </form>
  )
}

export default Popup