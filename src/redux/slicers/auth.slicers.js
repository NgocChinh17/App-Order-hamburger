import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    data: {},
    loading: true,
    error: null,
  },
  registerData: {
    loading: false,
    error: null,
  },
};

  export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
      // register
      registerRequest: state => {
        state.registerData.loading = true;
        state.registerData.error = null;
      },
      registerSuccess: (state, action) => {
        state.registerData.loading = false;
      },
      registerFail: (state, action) => {
        const {error} = action.payload;
        state.registerData.error = error;
        state.registerData.loading = false;
      },
    },
  });

  export const {registerRequest, registerSuccess, registerFail} = authSlice.actions;

  export default authSlice.reducer;

