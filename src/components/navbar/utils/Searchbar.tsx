import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Searchbar = () => {
  return (
    <form className='nav-form'>
      <input type='text' placeholder='search for anything' />
      <button type='submit'className='nav-form-btn'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </form>
  )
}

export default Searchbar 