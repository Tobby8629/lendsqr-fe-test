import React, { ReactNode } from 'react'
import PropTypes from 'prop-types';

interface group {
    title: string;
    children: ReactNode
  }

const ListGroup = ({title,children}: group) => {
  return (
    <div className='list'>
      <h3>{title}</h3>
      <ul>
        {children}
      </ul>
    </div>
  )
}

ListGroup.propTypes = {
  title: PropTypes.string
}

export default ListGroup