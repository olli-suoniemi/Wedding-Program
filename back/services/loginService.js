const { query } = require('./../config/database')

const checkPassword = async () => {
  const { rows } = await query(
    "SELECT * FROM users;",
  );

  if (rows) {
    return rows;
  }
  
};


module.exports = { checkPassword }