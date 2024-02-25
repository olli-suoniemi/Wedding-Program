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
const InfoHousing = () => {
  
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
          <p className="whitetextTitle">ACCOMMODATION</p>
          <p className="whitetext">
            We have received a group offer from XXXXX for double hotel rooms. With the code XXXX, you can get a double room
            at a special price of XX €/night, including breakfast. The offer only applies to double rooms. The hotel room must be booked by XXX XXX. After this, the rooms will be available for everyone to book.
          </p>
          <p className="whitetext">
            The booking is made on <a target={'_blank'} style={{textDecoration: 'none'}} href='XXX' rel="noreferrer"><span className="whitetextLink"> XXX XXX's website</span></a>.
            At the top of the page it says BOOK A ROOM, where you can make a booking. The offer is activated by entering the code XXXXX in the ADD PROMOTIONAL CODE field.
          </p>
          <p className="whitetext">
            There is also, for example, Hotel XXX, which is a cheaper option, about a 15-minute drive away.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoHousing
