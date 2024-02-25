import * as React from 'react';
import { Button, createTheme} from '@mui/material';
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8f7f6;',
    }
  },
});

const NotFound =  () => {

  const navigate = useNavigate()

  return (
    <div className='notFoundContainer'>
      <h1 style={{textAlign: 'center', color: '#986c4a'}}>404</h1>
      <h4 style={{textAlign: 'center', color: '#986c4a'}}>This page doesn't have anything. If you came here by mistake, you can click the button below to return to the homepage.</h4>
      <Button type="submit" 
        onClick={() => navigate('/')} 
        size="large" 
        variant="contained" 
        theme={theme} 
        style={{marginTop: '25px', marginBottom: '20px', color: 'grey', borderRadius: '10px', width: '66vw', maxWidth: '400px', 'alignSelf': 'center'}}
      >
        <p className="infoTitle">to the homepage</p>
      </Button>
    </div>
  );
}

export default NotFound