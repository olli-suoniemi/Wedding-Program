require('dotenv').config()

const PORT = process.env.NODE_ENV === 'development' 
  ? process.env.PORT_DEV
  : process.env.PORT

const URI = process.env.NODE_ENV === 'development' 
  ? process.env.CONNECTION_DEV
  : process.env.CONNECTION


module.exports = {
  PORT,
  URI
}