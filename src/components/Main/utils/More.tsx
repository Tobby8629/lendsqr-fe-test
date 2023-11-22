import React from 'react'
import { Link } from 'react-router-dom'

interface link {
  id: string
}

const More = ({id}: link) => {
  return (
    <td>
      <button>
        <Link to={`/${id}`}>View details</Link>
      </button>
      <button>
        <span>Blacklist user</span>
      </button>
      <button>
        <span>Activate user</span>
      </button>
    </td>
  )
}

export default More