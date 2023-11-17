import React from 'react'
import logo from './assets/Group.svg'
import image  from './assets/login.svg'
import Form from './Form';
import './styles/styles.scss'

const Login = () => {
  
  return (
    <section className='login'>
       <div className='logo'>
          <img src={logo} alt='brand logo' />
        </div> 
        <main>
          <div className='image'>
            <img src = {image} alt='welcome to lendsqr' />
          </div>
          <div className='form'>
            <div className='text'>
              <h3>Welcome!</h3>
              <p>Enter details to login</p>
            </div>
            <Form />
          </div>
        </main>
    </section>
  )
}

export default Login