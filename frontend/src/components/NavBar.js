import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogOutForm from './LogOutForm';
import { useSelector } from 'react-redux';

const Navigation =  () => {
  const user = useSelector((state) => state.user)

  const handleLogout = async () => {
    window.localStorage.removeItem('loggedBodaUser')
  }

  return (
      <AppBar position="static" color='transparent' elevation={0} className='navBar'>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
          <p className='whitetext'>{user.username}</p>
          <LogOutForm handleLogout={handleLogout} />
        </Toolbar>
      </AppBar>
  );
}

export default Navigation