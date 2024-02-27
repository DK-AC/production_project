import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { StateSchema } from 'app/providers/storeProvider';
import { userReducer } from 'entities/user';

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export const createReduxStore = (initialState?: StateSchema) => configureStore({
  reducer,
  devTools:
  __IS_DEV__,
  preloadedState: initialState,
});
