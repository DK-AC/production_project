import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserShema';

const initialState: UserSchema = {
  username: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
