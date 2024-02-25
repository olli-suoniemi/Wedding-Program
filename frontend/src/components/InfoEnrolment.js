import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { 
  FormControl, 
  Button, 
  createTheme,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Checkbox
} from '@mui/material';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import styled from 'styled-components';
import Navigation from './NavBar';

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #547d66;
    }
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8f7f6;',
    }
  },
});

const InfoEnrolment = ({enrollUser}) => {
  const [selectedValue, setSelectedValue] = useState('a');
  const [attendingPersons, setAttendingPersons] = useState([])
  const [furtherInfoCheckBox, setFurtherInfoCheckBox] = useState(false);
  const [furtherInfoText, setFurtherInfoText] = useState('');
  const [diet, setDiet] = useState('');
  const [other, setOther] = useState('');

  const user = useSelector((state) => state.user)
  const users = (user.name.split('/'))

  let initialAttendingPersons = []

  useEffect(() => {
    users.map((user) => {
      initialAttendingPersons = initialAttendingPersons.concat(user)
    })
    setAttendingPersons(initialAttendingPersons)
  }, [])

  const handleChangeYesOrNo = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAttendance = (event) => {
    if (event.target.checked) {
      setAttendingPersons(attendingPersons.concat(event.target.value))
    } else {
      setAttendingPersons(attendingPersons.filter(person => person !== event.target.value))
    }
  };

  const handleFurtherInfo = (event) => {
    if (event.target.checked) {
      setFurtherInfoCheckBox(true);
    } else {
      setFurtherInfoCheckBox(false);
    }
  };

  const handleFurtherInfoText = (event) => {
    setFurtherInfoText(event.target.value);
  };

  const handleDiet = (event) => {
    setDiet(event.target.value);
  };

  const handleOther = (event) => {
    setOther(event.target.value);
  };

  const addEnrolment = (event) => {;
    event.preventDefault()
    if(users.length > 1) {
      enrollUser({
        'attendingPersons': attendingPersons,
        'furtherInfoText': furtherInfoText,
        'diet': diet,
        'other': other
      })
    } else {
      let attPers = []
      if (selectedValue === 'a'){
        attPers = users
      }
      enrollUser({
        'attendingPersons': attPers,
        'furtherInfoText': furtherInfoText,
        'diet': diet,
        'other': other
      })
    }
    
  }
  
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChangeYesOrNo,
    value: item,
  });
  
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
          <p className="whitetextTitleEnroll">ENROLLMENT</p>
          <p className="whitetextBotttomBlockLine">
            Please submit the query below by March 20, 2023.<br></br>
            Kindly send the query even if you are unable to participate.
            If you wish to change your registration details, you can always resubmit the query.
            We assume that the most recently submitted query is final.
          </p>
          <FormControl>
            <div className="enrollmentBlock">
              {users.length === 1 ? (
                <>
                  <p className="basicwhiteTextEnroll">Are you able to join us in celebrating?</p>
                  <RadioGroup>
                    <FormControlLabel value="yes" control={<Radio {...controlProps('a')} color="default" />} label={<p className="radioText">Yes!</p>} />
                    <FormControlLabel value="no" control={<Radio {...controlProps('b')} color="default" />} label={<p className="radioText">No.</p>} />
                  </RadioGroup>
                </>
                ) : <>
                  <p className="basicwhiteTextEnroll">Please select below the individuals who are able to attend.</p>
                  <FormControlLabel control={
                        <div>
                        {users.map((user, index) => (
                          <div key={index}>
                            <Checkbox
                              defaultChecked
                              id={user}
                              icon={<RadioButtonUncheckedIcon/>}
                              checkedIcon={<RadioButtonCheckedIcon />}
                              onChange={handleAttendance}
                              color="default"
                              value={user}
                              name="radio-buttons"
                              sx={{
                                '& .MuiSvgIcon-root': {
                                  fontSize: 18,
                                },
                              }}
                            />
                            <label className="radioText" htmlFor={user}>{user}</label>
                          </div>
                          ))}
                          <div>
                            <Checkbox 
                              icon={<RadioButtonUncheckedIcon/>}
                              checkedIcon={<RadioButtonCheckedIcon />}
                              onChange={handleFurtherInfo} 
                              color="default"
                              id="checkbox_id"
                              value="true"
                              sx={{
                                '& .MuiSvgIcon-root': {
                                  fontSize: 18,
                                },
                              }}
                            />
                            <label className="radioText" htmlFor="checkbox_id">I*</label>
                          </div>
                        </div>
                      } />
                      {furtherInfoCheckBox ? (
                        <WhiteBorderTextField rows={3} multiline style={{backgroundColor: '#eee8e3', borderRadius: '10px', minWidth: '70%'}} onChange={handleFurtherInfoText}/>
                      ) : null}

                      <p className="asterixText">* = The response requires additional information.</p>
                    </>
              }
            </div>

            <div className="whitetextBotttomBlockLine"></div>

            <div className="enrollmentBlock">
            <p className="basicwhiteTextEnroll">Please indicate any special dietary requirements below.</p>
            <WhiteBorderTextField 
                multiline  
                style={{backgroundColor: '#eee8e3', borderRadius: '10px', minWidth: '40%'}}
                onChange={handleDiet}
                />
            </div>

            <div className="whitetextBotttomBlockLine"></div>

            <div className="enrollmentBlock">
            <p className="basicwhiteTextEnroll">Is there anything else you would like us to take into consideration or any other requests regarding anything?</p>
            <WhiteBorderTextField 
                multiline  
                style={{backgroundColor: '#eee8e3', borderRadius: '10px', minWidth: '40%'}}
                onChange={handleOther}
                />
            </div>

            <div className="whitetextBotttomBlockLine"></div>

            <div className="enrollmentBlock">
            <p className="basicwhiteTextEnroll">
                In order to streamline the schedule of the wedding, we kindly ask you to contact the maid of honor XXX: (XXXXXXXXXX) if you wish to give a speech or be otherwise involved in the program.
            </p>
            </div>
            
            <div className="whitetextBotttomBlockLine"></div>

            <div className="enrollmentBlock">
              <p className="basicwhiteTextEnroll">
                  For any additional questions, please contact the following individuals:
              </p>

              <ul>
                <li>
                  <p className="basicwhiteTextEnrollList">XXX: (XXXXXXXX)</p>
                </li>
                <li>
                  <p className="basicwhiteTextEnrollList">XXX: (XXXXXXXX)</p>
                </li>
                <li>
                  <p className="basicwhiteTextEnrollList">XXX: (XXXXXXXX)</p>
                </li>
              </ul>
            </div>

            <div className="whitetextBotttomBlockLine"></div>

            <div className="enrollmentBlock">
              <p className="whitetextTitleEnroll">
                Thank you!
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <Button type="submit" onClick={addEnrolment} size="large" variant="contained" theme={theme} style={{marginTop: '25px', marginBottom: '20px', color: 'grey', borderRadius: '10px', maxWidth: '400px'}}>
                <p className="infoTitle">SUBMIT</p>
              </Button>
            </div>
              
          </FormControl>
        </div>

        {/* <div className="whitetextBotttomBlockLineThick"></div>

        <p className="basicwhiteTextEnroll">
          Voit tarkastella vastauksiasi täällä. Oletamme, että uusin ilmoittautumisenne on pysyvä.
        </p>

        <div style={{textAlign: 'center'}}>
          <Button type="submit" onClick={() => navigate(`/enroll/${user.id}`)} size="large" variant="contained" theme={theme} style={{marginTop: '25px', marginBottom: '20px', color: 'grey', borderRadius: '10px', maxWidth: '400px'}}>
            <p className="infoTitle">katso omat vastaukset</p>
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default InfoEnrolment
