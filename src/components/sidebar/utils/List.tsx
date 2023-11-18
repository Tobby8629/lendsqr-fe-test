import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';

interface font {
  icon: string;
  text: string;
}

const List = ({icon,text}: font) => {
  return (
    <li> 
      <Link to="/">
        <img src={icon} alt={text} />
        <span className='text'>{text}</span>
      </Link>
    </li>
  )
}

List.propTypes = {
    icon: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired,
  };
  

export default List