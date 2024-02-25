import enrollmentService from '../services/enrollment'
import { createSlice } from '@reduxjs/toolkit'

const enrollmentSlice = createSlice({
  name: 'enrollments',
  initialState: [],
  reducers: {
    appendEnrollment(state, action) {
      state.push(action.payload)
    },
    setEnrollments(state, action) {
      return action.payload
    }
  },
})

export const initializeEnrollments = (id) => {
  // return async dispatch => {
  //   const enrollments = await enrollmentService.getOwnEnrollments(id)
  //   dispatch(setEnrollments(enrollments))
  // }
}

export const createEnrollment = (user, content) => {
  return async dispatch => {
    const newEnrollment = await enrollmentService.enroll(user, content)
    dispatch(appendEnrollment(newEnrollment))
  }
}

export const { appendEnrollment, setEnrollments } = enrollmentSlice.actions
export default enrollmentSlice.reducer
