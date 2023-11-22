import { faEye, faTimes, faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

interface link {
  id: string
  openRowId: string | null,
  setOpenRowId: (openRowId: string | null) => void
}

const More = ({id, setOpenRowId}: link) => {
  return (
    <td className='more'>
      <button className='times' onClick={() => setOpenRowId(null)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <button>
        <FontAwesomeIcon icon={faEye} />
        <span className='text'>
          <Link to={`/${id}`}>View details</Link>
        </span>
      </button>
      <button>
        <FontAwesomeIcon icon={faUserTimes} />
        <span className='text'>Blacklist user</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faUserCheck} />
        <span className='text'>Activate user</span>
      </button>
    </td>
  )
}

export default More