const router = require('express').Router()
const service = require('../services/enrollmentService')
require('dotenv').config()

// router.get('/:id', async (request, response) => {
//   const userId = String(request.params.id)

//   if (!request.user) {
//     return response.status(401).json({ error: 'token missing or invalid' })
//   }
  
//   if (String(request.user[0].id) !== userId) {
//     return response.status(404).json({ error: 'access denied' })
//   }

//   const enrollments = await service.getOwnEnrollments(userId)
//   response.json(enrollments)
// })

router.post('/:id', async (request, response) => {
  
  if (!request.user) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const userId = request.params.id
  const persons = request.body.attendingPersons
  const infoText = request.body.furtherInfoText
  const diet = request.body.diet
  const otherText = request.body.other

  
  if (process.env.NODE_ENV === 'development') {
    console.log("In dev mode. Enrollment submitted");
  }

  await service.enroll(userId, persons, infoText, diet, otherText)

  response.status(201).end()
})

module.exports = router