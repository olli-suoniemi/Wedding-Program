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
const InfoWhat = () => {
  
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
          <p className="whitetextTitle">WHAT, WHERE & WHEN?</p>
          <p className="whitetext">Welcome to celebrate our wedding!</p>
          <p className="whitetext">The celebration begins with a ceremony at the XXXXX church at 15:00.</p>
          <p className="whitetext">We will move to the main party venue, the 2nd floor of the XXXXX, after the ceremony, around 16:00.</p>
          <p className="whitetext">
            Dinner will be served at the party around 17:00 and coffee with treats around 20:30. The official program of the party should end by 22:00 at the latest. Later in the evening, there will be a supper.
            There will be a program between the meals.
          </p>
          <p className="whitetext">
            The party will end at 03:00 at the latest.
          </p>
          <p className="whitetext">
            The detailed program will be revealed at the party 8--)
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoWhat
