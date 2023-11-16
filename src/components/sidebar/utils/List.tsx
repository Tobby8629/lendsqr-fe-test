import PropTypes from 'prop-types';
import React from 'react'

interface font {
  icon: string;
  text: string;
}

const List = ({icon,text}: font) => {
  return (
    <li> 
      <img src={icon} alt={text} />
      <span className='text'>{text}</span>
    </li>
  )
}

List.propTypes = {
    icon: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired,
  };
  

export default List