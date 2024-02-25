const express = require('express')
const path = require('path')
require('express-async-errors');
const app = express()
const cors = require('cors')

const loginRouter = require('./routes/login')
const enrollmentRouter = require('./routes/enrollment')
const { errorHandler, userExtractor } = require('./utils/middleware')
const logger = require('./utils/logger')
const config = require('./utils/config')

logger.info('connecting to', config.URI)

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json())

app.use('/login', loginRouter)
app.use('/enroll', userExtractor, enrollmentRouter)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(errorHandler)

module.exports = app