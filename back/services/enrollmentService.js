const { query } = require('./../config/database')
var moment = require('moment'); // require

const getOwnEnrollments = async (id) => {
  // const { rows } = await query(
  //   `SELECT * FROM enrollments WHERE user_id = $1;`, [id]
  // );

  // if (rows) {
  //   return rows;
  // }
};

const enroll = async (user_id, persons, i, d, o) => {
  const now = moment().format('YYYY-MM-DD HH:mm:ss');
  const info = i ? i : "''"
  const diet = d ? d : "''"
  const other = o ? o : "''"
  const personsInStrings = persons.length ? persons.map(p => `'${p}'`) : ["''"]
  const injection = `INSERT INTO enrollments (user_id, attending_persons, further_info_text, diet, other, created) VALUES (${user_id}, array[${personsInStrings}], '${info}', '${diet}', '${other}', '${now}');`
  await query(injection);
};

module.exports = { getOwnEnrollments, enroll }