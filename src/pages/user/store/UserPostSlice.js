import { createSlice } from '@reduxjs/toolkit';

const UserPostSlice = createSlice({
  name: 'userpost',
  initialState: {
    loading: true,
    dataroom: undefined,
    status: undefined,
  },
  reducers: {
    fetchRequest: state => ({
      ...state,
      loading: true
    }),

    fetchSuccess: (state, action) => ({
      ...state,
      dataroom: action.payload.data,
      status: action.payload.status,
      loading: false
    }),
    fetchError: (state, action) => ({
      ...state,
      dataroom: action.payload
    }),
    fetchReset: state => ({
      ...state,
      dataroom: undefined,
      status: undefined,
      loading: false
    }),
  }
});

export const {
  fetchError, fetchRequest, fetchSuccess, fetchReset
} = UserPostSlice.actions;

export default UserPostSlice.reducer;
