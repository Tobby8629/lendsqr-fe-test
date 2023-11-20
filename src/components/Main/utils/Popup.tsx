import React from 'react'

const Popup = () => {
  return (
    <form className='form-popup'>
      <div className='filter-input'>
        <label className='label-popup'>Organization</label>
        <select>
          <option value=''>select</option>
          <option value='1'>Organization 1</option>
          <option value='2'>Organization 2</option>
          <option value='3'>Organization 3</option>
          <option value='4'>Organization 4</option>
          <option value='5'>Organization 5</option>
          <option value='6'>Organization 6</option>
          <option value='7'>Organization 7</option>
          <option value='8'>Organization 8</option>
          <option value='9'>Organization 9</option>
          <option value='10'>Organization 10</option>
        </select>
      </div>
      <div className='filter-input'>
        <label htmlFor='username'>username</label>
        <input type='text' id='username' />
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
          <option value='1'>Organization 1</option>
          <option value='2'>Organization 2</option>
          <option value='3'>Organization 3</option>
          <option value='4'>Organization 4</option>
          <option value='5'>Organization 5</option>
          <option value='6'>Organization 6</option>
          <option value='7'>Organization 7</option>
          <option value='8'>Organization 8</option>
          <option value='9'>Organization 9</option>
          <option value='10'>Organization 10</option>
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