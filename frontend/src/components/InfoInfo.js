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
const InfoInfo = () => {
  
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
          <p className="whitetextTitle">ADDITIONAL INFO</p>
          <p className="whitetext">
            There will be a photographer at our wedding. We want you to be present at our party, therefore
            phones or cameras are not desired companions.
            Thank you for considering our wish 8-)
          </p>
          <p className="whitetext">
            There is a guest book and a Polaroid camera at the party venue,
            with which we hope you will immortalize yourselves in the book along with any greetings!
          </p>
          <p className="whitetext">
            Alcohol will be served at the party.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoInfo
