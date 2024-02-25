import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, createTheme} from '@mui/material';
import Enrollment from './Enrollment';
import Navigation from './NavBar';
import { useDispatch, useSelector } from 'react-redux'
import { initializeEnrollments } from '../reducers/enrollmentReducer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8f7f6;',
    }
  },
});

const Enrollments =  ({ user }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeEnrollments(user.id)) 
  },[dispatch]) 

  const enrollments = useSelector((state) => state.enrollments)

  if (!enrollments) {
    return(
      <div className="infoContainerForEnrollments">
        <div>
          <Navigation/>
        </div>
        <div className='homePageContainerForContainers'> 
          <h1 style={{textAlign: 'center', color: '#986c4a'}}>Ladataan...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="infoContainerForContainer">
      <div>
        <Navigation/>
      </div>
      <div className='homePageContainerForContainers'> 
        <div className='infoContainer'>
          <div className="infoBackButton">
            <Button onClick={() => navigate('/enroll')} variant="contained" theme={theme} style={{marginLeft: '15px'}}>
              <p className="infoTitle">TAKAISIN</p>
            </Button>
          </div>
          <div className="infoContent">
            <p className="whitetextTitleEnroll">OMAT ILMOITTAUTUMISET</p>
            {enrollments.slice(0).reverse().map((enrollment, i, arr) =>
              <>
                <Enrollment key={enrollment.id} enrollment={enrollment} />  
                <div className='whitetextBotttomBlockLineEnrollment'></div>    
              </>
           )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrollments
