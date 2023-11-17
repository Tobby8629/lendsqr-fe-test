import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../authentication/AuthService';

const Form = () => {
  const [user, setuser] = useState({username:'', password:''});
  const Navigate = useNavigate();
  const Submit = async (e: FormEvent, user: { username: string; password: string }) => {
    e.preventDefault();
      if (user.username !== "" && user.password !== "") {
        await login(user);
        Navigate('/', { replace: true });
      } else {
        console.log('Fill in all input fields');
      }
  };
  return (
    <form onSubmit={(e)=>Submit(e, user)}>
      <div className='form-input'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' value={user.username}  onChange={(e)=> setuser({...user, username: e.target.value})}/>
      </div>
      <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={user.password} onChange={(e)=> setuser({...user, password: e.target.value})} />
      </div>
      <p>Forget password?</p>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Form