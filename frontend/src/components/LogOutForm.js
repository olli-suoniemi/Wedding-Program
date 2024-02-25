import React from 'react'
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    }
  },
});

const LogOutForm = ({ handleLogout }) => {

  return (
    <form onSubmit={handleLogout}>
      <div>
        <Button type="submit" theme={theme} size='big'>
          <p className='whitetext'>Log out</p>
        </Button>
      </div>
    </form>
  )
}

export default LogOutForm
