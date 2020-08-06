import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    data: [],
    status: undefined
  },
  reducers: {
    fetchRequest: state => ({
      ...state,
      loading: true
    }),

    fetchSuccess: (state, action) => ({
      ...state,
      data: action.payload.data,
      status: action.payload.status
    }),

    // fetch_error: (state, action) => {
    //   // console.log('upload thất bại');
    //   // return {
    //   //     ...state,
    //   //     loading: false,
    //   //     status: action.payload
    //   // }
    // },

  }
});

export const {
  fetchError, fetchRequest, fetchSuccess, fetchAddImage
} = homeSlice.actions;

export default homeSlice.reducer;
