import React from 'react'
import logo from './assets/lendsqr.png'
import './styles/styles.scss'

const Loading = () => {
  return (
    <section className='load'>
        <div className='loading'>
            <div className='logo'>
              <img src={logo} alt='loading' />
            </div>
        </div>
    </section>
  )
}

export default Loading