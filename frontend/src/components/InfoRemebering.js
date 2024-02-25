import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import Navigation from './NavBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8f7f6;',
    }
  },
});
const InfoRemembering = () => {
  
  const navigate = useNavigate()

  return (
    <div className="infoContainerForContainer">
      <div>
        <Navigation/>
      </div>
      <div className="infoContainer">
        <div className="infoBackButton">
          <Button onClick={() => navigate('/')} variant="contained" theme={theme} style={{marginLeft: '15px'}}>
            <p className="infoTitle">TO THE HOMEPAGE</p>
          </Button>
        </div>
        <div className="infoContent">
          <p className="whitetextTitle">REMEMBERING</p>
          <p className="whitetext">
            Our intention is to go on a honeymoon, and if you'd like to support our journey,
            here is the account number where you can contribute:
          </p>
          <p className="whitetext">
            XX XXXX
            XXXXXXXXXXXXXXX
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoRemembering
