import React from 'react'

const Pagination = () => {
  return (
    <section className='pagination'>
        <div className='dropdown'>
          <label>showing</label>
          <select>
            <option value="1">1</option>
          </select>
          <p>out of 100</p>
        </div>
    </section>
  )
}

export default Pagination