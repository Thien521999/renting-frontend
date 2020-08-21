import { createSlice } from '@reduxjs/toolkit';

const updatepostSlice = createSlice({
  name: 'updatepost',
  initialState: {
    loading: true,
    data: undefined,
    status: undefined
  },
  reducers: {
    fetchRequest: state => ({
      ...state,
      loading: true
    }),

    fetchSuccess: (state, action) => {
      console.log('đã dến đây');
      return {
        ...state,
        data: action.payload.data[0],
        status: action.payload.status,
        loading: false
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
} = updatepostSlice.actions;

export default updatepostSlice.reducer;
