import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    loading: false,
    data: undefined,
    status: undefined
  },
  reducers: {
    fetchRequest: state => ({
      ...state,
      loading: true
    }),

    fetchSuccess: (state, action) => ({
      ...state,
      data: action.payload.data[0],
      status: action.payload.status
    }),
    fetchError: state => ({
      ...state,
      data: {}
    })

  }
});

export const {
  fetchError, fetchRequest, fetchSuccess
} = detailSlice.actions;

export default detailSlice.reducer;
