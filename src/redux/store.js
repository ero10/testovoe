import { configureStore } from '@reduxjs/toolkit'
import directions from './directions'
import filter from './filter'

export const store = configureStore({
  reducer: {
    directions: directions,
    filter: filter,
  },
})
