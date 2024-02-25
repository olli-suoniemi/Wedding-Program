import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import Navigation from './NavBar';

import couple from './../assets/images/couple.jpg'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8f7f6;',
    }
  },
});
const InfoContact = () => {
  
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
          <p className="whitetextTitle">ADDRESS & CONTACT</p>
          <div>
            <p className="whitetext">Church Address:</p>
            <p className="whitetext">XXXXXXXX, <a target="_blank" style={{textDecoration: 'none'}} href="https://goo.gl/maps/L6BNtJ58CZSwJGNWA" rel="noreferrer"><span className="whitetextLink">xxxxxxxx</span></a></p>

            <div className='mapDiv'>
            <iframe
                className='mapFrame'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.670466696632!2d23.690444716224533!3d60.08249705744735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468da5a7397d8f5b%3A0x70b0d8bff71ceb66!2sPyh%C3%A4n%20Katariinan%20kirkko!5e1!3m2!1sfi!2sfi!4v1672491197842!5m2!1sfi!2sfi"
                loading="lazy"
                style={{border:0}}
                >
              </iframe>
            </div>

            <div className="whitetextBotttomBlockLine"></div>

            <p className="whitetext">Reception Venue Address:</p>
            <p className="whitetext">XXXXX 2. floor, <a target={'_blank'} style={{textDecoration: 'none'}} href='https://goo.gl/maps/Wp2ariqo2j1vShwc8' rel="noreferrer"><span className="whitetextLink">XXXXXXXXXXX</span></a></p>
            
            <div className='mapDiv'>
              <iframe
                className='mapFrame'
                src=
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631.9548899740087!2d23.547673499999984!3d60.13257959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468dafdc2e02f403%3A0xd82e78a0ae569f83!2sPuimala!5e1!3m2!1sfi!2sfi!4v1672491318636!5m2!1sfi!2sfi"
                loading="lazy"
                style={{border:0}}>
              </iframe>
            </div>
            
            <p className="whitetext">
              Parking space is available near XXXXX, such as
              <a target={'_blank'} style={{textDecoration: 'none'}} href='https://goo.gl/maps/62KAnUtrfudZGbbx5' rel="noreferrer"><span className="whitetextLink"> XXXXXX </span></a>
              and
              <a target={'_blank'} style={{textDecoration: 'none'}} href='https://goo.gl/maps/MGVzpsyfgtUuBrVF8' rel="noreferrer"><span className="whitetextLink"> XXXX.</span></a>
            </p>
          </div>
        </div>
        <div>
          <div className="whitetextBotttomBlockLine"></div>
          
          <p className="whitetext">Wedding couple:</p>
          <p className="whitetext">Bride: YYYYY: (YYYYYYYYY)</p>
          <p className="whitetext">Groom: XXXX: (XXXXXXXXX)</p>
          
          <div className='containerImageBox'>
            <img className='imgCustom' src={couple} alt='Couple'/>
            <div className="block"></div>
          </div>

          <div className="whitetextBotttomBlockLine"></div>
          
          <p className="whitetext">Brides maids:</p>
          <p className="whitetext">XXXXX XXXXX: (XXXXXXXXXXX)</p>
          <p className="whitetext">XXXXXXX XXXXX: (XXXXXXXXXXX)</p>
          
          <div className="whitetextBotttomBlockLine"></div>
          
          <p className="whitetext">Bestmen:</p>
          <p className="whitetext">XXXXX XXXXX: (XXXXXXXXXXX)</p>
          <p className="whitetext">XXXXX XXXXX: (XXXXXXXXXXX)</p>
          
          <br></br>

        </div>
      </div>
    </div>
  )
}

export default InfoContact
