/* eslint-disable no-undef */
var moment = require('moment');

const Enrollment =  ({ enrollment }) => {

  if (!enrollment) {
    return(
      <p className="infoTitle">Ladataan...</p>
    )
  }

  const time = moment(enrollment.created).format('DD.MM.YYYY HH:mm:ss');

  return (
    <table>
      <thead>
        <tr>  
          <th className="infoTitle">ID: {enrollment.id}</th>
        </tr>
        <br></br>
        <tr>
          <th className="infoTitle">Ilmoittautumishetki:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p className="whitetext">{time}</p>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th className="infoTitle">Häihin tuleviksi ilmoittautuneet:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {enrollment.attending_persons.map((person, i) =>
                <p className="whitetext" key={i}>- {person}</p>   
            )}
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th className="infoTitle">Mahdolliset lisätiedot:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p className="whitetext">{enrollment.further_info_text}</p>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th className="infoTitle">Erityisruokavaliot:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p className="whitetext">{enrollment.diet}</p>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th className="infoTitle">Toiveet:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p className="whitetext">{enrollment.other}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Enrollment
