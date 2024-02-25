import { configureStore } from '@reduxjs/toolkit'

import enrollmentReducer from './reducers/enrollmentReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
  reducer: {
    enrollments: enrollmentReducer,
    user: userReducer
  }
})

export default store