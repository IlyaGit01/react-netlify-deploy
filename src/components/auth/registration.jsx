import { useState } from 'react'
import { useHistory } from "react-router";
import axios from 'axios'
import to from 'await-to-js'
import '../../assets/style/Auth.css'
import logo from '../../assets/img/logo.svg'


export const Registration = props => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory();

  const regUser = async () => {
    const [, resp] = await to(axios.post('http://localhost:8000/auth/reg', { name, email, password}))
    localStorage.setItem('token', resp.data.token)
    history.push('/login')
  }

  return(
      <form className='reg-form' onSubmit={e => { e.preventDefault(); }}>
        <div className='form-header'>
          <img src={logo} />
          <h3>Primary System</h3>
        </div>

        <div className='form-container'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input
            id='name'
            className='form-input'
            onInput={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-container'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input
            id='email'
            className='form-input'
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-container'>
        <label htmlFor='password' className='form-label'> Password </label>
        <input
          id='password'
          className='form-input'
          type='password'
          onInput={(e) => setPassword(e.target.value)}
        />
        </div>
        <button className='form-button' onClick={regUser}>submit</button>
      </form>
  )
};

