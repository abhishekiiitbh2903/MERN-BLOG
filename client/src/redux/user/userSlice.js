import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure,updateStart,updateFailure,updateSuccess } = userSlice.actions;

export default userSlice.reducer;

// In this code snippet, we're using Redux Toolkit, which is a library built on top of Redux, simplifying Redux logic. We define a Redux slice named `'user'` using `createSlice`, including initial state with `currentUser`, `error`, and `loading` properties. The slice contains reducers like `signInStart`, `signInSuccess`, and `signInFailure`, handling sign-in actions. `signInStart` sets `loading` to `true` and resets `error`. `signInSuccess` updates `currentUser` on successful sign-in, while `signInFailure` handles sign-in errors. Action creators (`signInStart`, `signInSuccess`, `signInFailure`) and the reducer function (`userSlice.reducer`) are exported. Redux Toolkit reduces boilerplate, making state management more efficient.