import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './reducers/userReducer'
import { createEnrollment } from './reducers/enrollmentReducer'
import { Routes, Route, useNavigate } from 'react-router-dom'

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import loginService from './services/login'
import enrollmentService from './services/enrollment'

// Components
import LoginForm from './components/LogInForm'
import NavBar from './components/NavBar'
import InfoWhat from './components/InfoWhat'
import InfoInfo from './components/InfoInfo'
import InfoEnrolment from './components/InfoEnrolment'
import InfoContact from './components/InfoContact'
import InfoHousing from './components/InfoHousing'
import InfoRemembering from './components/InfoRemebering'
import Enrollments from './components/Enrollments'

import weImage from './assets/images/we.jpg'
import NotFound from './components/NotFound'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    }
  },
});

const App = () => {
  // Default state is true, because users can enroll at first
  // After they have enrolled, the state will be false for 15 secs. Then true again
  const [canEnroll, setCanEnroll] = useState(true);
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBodaUser')
    if (loggedUserJSON) {
      const userFromCookies = JSON.parse(loggedUserJSON)
      dispatch(setUser(userFromCookies))
      enrollmentService.setToken(userFromCookies.token)
    }
  }, [])

  const handleLogin = async (password) => {
    try {
      const user = await loginService.login({
        password
      })

      window.localStorage.setItem('loggedBodaUser', JSON.stringify(user))

      enrollmentService.setToken(user.token)
      dispatch(setUser(user))
      toast.success('Welcome to the wedding page!');
      
      navigate('/')
    } catch (exception) {
      toast.error('Wrong password!');
      
    }
  }

  const handleEnrollment = async (data) => {
    try {
      if (canEnroll) {
        dispatch(createEnrollment(user, data))
        toast.success('Enrollment was successful!');

        // set to false, so user cant immediately enroll again
        setCanEnroll(false)
        
        // after 15 secs, set to true
        setTimeout(() => {
          setCanEnroll(true)
        }, 1500 * 10)

      } else {  
        toast.warning('You can"t enroll again so soon!');
      }      
    } catch (exception) {
      toast.error('Enrollment failed!');
      
    }
  }

  const Home = () => {
    return(
      <>
        <div className='homePageContainerForContainers'>
          <NavBar/>
          <div className='homePageWelcomeContainer'>
            <div className='homePageWelcomeContainerTextBox'>
              <p className='homePageWelcomeTitle'>John & Jane</p>
              <p className='homePageWelcomeDate'>XX.XX.XXXX</p>
              <p className='homePageWelcomeText'>Welcome!</p>
            </div>
            <img className='homePageWelcomeContainerImageBox' src={weImage} alt='image'/>
          </div>
          
          <div className='homePageContainerForBalls'>
            <div className='homePageInfoBall'>
              <Button
                onClick={() => navigate('/what')}
                variant="contained"
                theme={theme}
                className='mainButton'
              >
                <p className='ballText'>WHAT & WHERE & WHEN</p>
              </Button>
            </div>
            <div className='homePageInfoBall'>
              <Button
                  onClick={() => navigate('/info')}
                  variant="contained"
                  theme={theme}
                  className='mainButton'
                >
                  <p className='ballText'>INFO</p>
                </Button>
            </div>
            <div className='homePageInfoBall'>
              <Button
                  onClick={() => navigate('/enroll')}
                  variant="contained"
                  theme={theme}
                  className='mainButton'
                >
                  <p className='ballText'>ENROLLMENT</p>
                </Button>
            </div>
          </div>

          <div className='homePageContainerForBalls'>
            <div className='homePageInfoBall'>
              <Button
                  onClick={() => navigate('/housing')}
                  variant="contained"
                  theme={theme}
                  className='mainButton'
                >
                  <p className='ballText'>ACCOMODATION</p>
                </Button>
            </div>
            <div className='homePageInfoBall'>
              <Button
                  onClick={() => navigate('/remembering')}
                  variant="contained"
                  theme={theme}
                  className='mainButton'
                >
                  <p className='ballText'>REMEMBERING</p>
                </Button>
            </div>
            <div className='homePageInfoBall'>
              <Button
                  onClick={() => navigate('/contact')}
                  variant="contained"
                  theme={theme}
                  className='mainButton'
                >
                  <p className='ballText'>ADDRESS & CONTACT</p>
                </Button>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {user ?
        <div className='homePageContainerV'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what" element={<InfoWhat />} />
            <Route path="/info" element={<InfoInfo />} />
            <Route path="/enroll" element={<InfoEnrolment enrollUser={handleEnrollment}/>} />
            <Route path="/contact" element={<InfoContact />} />
            <Route path="/remembering" element={<InfoRemembering />} />
            <Route path="/housing" element={<InfoHousing />} />
            {/* <Route path="/enroll/:id" element={<Enrollments user={user}/>} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      :
        <LoginForm loginUser={handleLogin} />
      }
      
      <ToastContainer/>
    </>
  )
}

export default App