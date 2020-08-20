import { createSlice } from '@reduxjs/toolkit';

const UploadPostSlice = createSlice({
  name: 'uploadpost',
  initialState: {
    loading: false,
    status: undefined,
    data: undefined,
  },
  reducers: {
    fetch_request: (state, action) => ({
      ...state,
      loading: true
    }),

    fetch_success: (state, action) => {
      const { data, status } = action.payload;
      // console.log('upload thành công');
      // console.log(action.payload);
      state.data = data;
      state.status = status;
      state.loading = false;
    },

    fetch_error: (state, action) => {
      console.log('upload thất bại');
      // return {
      //     ...state,
      //     loading: false,
      //     status: action.payload
      // }
    },

    fetch_addImage: (state, action) => {
      state.dataimage.push(action.payload);
    },
    fetch_reset: (state, action) => ({
      ...state,
      dataimage: []
    })
  }
});

export const {
  fetch_error, fetch_request, fetch_success, fetch_addImage
} = UploadPostSlice.actions;

export default UploadPostSlice.reducer;
