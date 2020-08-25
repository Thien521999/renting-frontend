import { createSlice } from '@reduxjs/toolkit';

const UploadPostSlice = createSlice({
  name: 'uploadpost',
  initialState: {
    loading: false,
    status: undefined,
    data: undefined,
    editor: '',
  },
  reducers: {
    fetch_request: state => ({
      ...state,
      loading: true
    }),

    fetch_success: (state, action) => {
      const { data, status } = action.payload;
      // console.log('upload thành công');
      console.log(action.payload);

      return {
        ...state,
        data,
        status,
        loading: false
      };
    },

    fetch_error: (state, action) => {
      console.log('upload thất bại');
      // return {
      //     ...state,
      //     loading: false,
      //     status: action.payload
      // }
    },
    fetch_reset: (state, action) => ({
      loading: false,
      status: undefined,
      data: undefined,

    }),
    setEditor: (state, action) => ({
      ...state,
      editor: action.payload
    })
  }
});

export const {
  fetch_error, fetch_request, fetch_success, fetch_addImage, fetch_reset, setEditor
} = UploadPostSlice.actions;

export default UploadPostSlice.reducer;
