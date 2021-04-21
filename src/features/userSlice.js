import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      //the user is set to the payload - in this case uid & email
      state.user = action.payload;
    },
    logout: (state) => {
      //Sets user to null
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//state is undefined
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
