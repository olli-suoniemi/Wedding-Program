import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import weImage from './../assets/images/login.jpg'

import styled from 'styled-components';

import Helmet from 'react-helmet';

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #000000;
    }
  }
`;

const LoginForm = ({ loginUser }) => {
  const [password, setPassword] = useState('')

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const addUser = async (event) => {
    event.preventDefault()
    loginUser(password)
    setPassword('')
  }

  return (
    <>
    <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
      <div className='loginPageContainerV'>
        <div className='loginPageContainerH'>
          <div className='loginPageItems'>
            
            <img className='logInImageBox' src={weImage} />
            <p className='loginTitle'>SURNAME XX.X.XXXX</p>
            <div className='loginPageContainerForInputAndButton'>
              <form onSubmit={addUser}>
                <WhiteBorderTextField value={password}
                  className='loginInput'
                  onChange={handlePasswordChange}
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <br/>
                <Button className='loginButton' type="submit" size="large" style={{color: 'grey', margin: '20px'}}> Log in </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default LoginForm
