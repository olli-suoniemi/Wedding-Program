const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('express').Router()
const service = require('./../services/userService')

router.post('/', async (request, response) => {
  // Get the password from the request
  const { password } = request.body

  // Check if password was submitted
  if (!password) {
    return response.status(401).json({
      error: 'password required'
    })
  }
  
  // Get all users from database
  const users = await service.getUsers()

  // Check if there are any users in database
  if (!users) {
    return response.status(401).json({
      error: 'no users'
    })
  }
  
  // Init the user
  var user;

  // Loop through all the users and stop when there is found a user with the given password
  for(var i = 0; i < users.length; i++) {
    const passwordCorrect = await bcrypt.compare(password, users[i].password)
    if (passwordCorrect) {
        user = users[i]
        break;
    }
  }

  // If a user was not found
  if (!user) {
    return response.status(401).json({
      error: 'invalid password'
    })
  }
  
  const userForToken = {
    username: user.username,
    id: user.id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET || 'secret')

  response
    .status(200)
    .send({ token, username: user.username, name: user.name, id: user.id })
})

module.exports = router