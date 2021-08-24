//A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

//A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
