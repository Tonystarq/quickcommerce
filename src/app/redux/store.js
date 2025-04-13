import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './features/tabSlice'
import loadingReducer from './features/loadingSlice'

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    loading: loadingReducer,
  },
})