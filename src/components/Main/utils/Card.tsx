import React from 'react'

interface Card_component {
  image: string,
  status: string,
  value: string
}

const Card = ({image, status, value }: Card_component) => {
  return (
    <div className='card'>
       <div className='image'>
        <img src={image} alt={status}/>
       </div>
       <p>{status}</p>
       <h3>{value}</h3>
    </div>
  )
}

export default Card