const { query } = require('./../config/database')

const getUsers = async () => {
  const result = await query(
    "SELECT * FROM users;",
  );

  if (result) {
    return result.rows;
  }
  
};

const getUser = async (user_id) => {
  const result = await query(
    "SELECT * FROM users WHERE id = $1",
     [user_id],
  );

  if (result) {
    return result.rows;
  }
  
};

module.exports = { 
  getUsers, 
  getUser,
}