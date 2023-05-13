import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import counterSlice from './slice/counterSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice
  }
})