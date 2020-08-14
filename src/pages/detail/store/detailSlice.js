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

    fetchSuccess: (state, action) => {
      console.log(action.payload.data);
      return {
        ...state,
        data: action.payload.data[0],
        status: action.payload.status
      };
    },
    fetchError: state => ({
      ...state,
      data: {}
    }),
    fetchReset: state => ({
      ...state,
      data: undefined,
      status: undefined,
      loading: false
    })

  }
});

export const {
  fetchError, fetchRequest, fetchSuccess, fetchReset
} = detailSlice.actions;

export default detailSlice.reducer;
