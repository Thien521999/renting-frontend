import { createSlice } from '@reduxjs/toolkit';

const changePassSlice = createSlice({
  name: 'changePass',
  initialState: {
    loading: false,
    status: undefined
  },
  reducers: {
    fetch_request: (state, action) => ({
      ...state,
      loading: true
    }),

    fetch_success: (state, action) => {
      const { status } = action.payload;
      state.status = status;
      state.loading = false;
    },

    fetch_error: (state, action) => ({
      ...state,
      loading: false,
      status: 500
    })
  }
});

export const { fetch_error, fetch_request, fetch_success } = changePassSlice.actions;

export default changePassSlice.reducer;
