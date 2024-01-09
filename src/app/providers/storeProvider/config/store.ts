import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { StateSchema } from 'app/providers/storeProvider'

export const createReduxStore = (initialState?: StateSchema) => configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools:
  __IS_DEV__,
  preloadedState: initialState,
})
