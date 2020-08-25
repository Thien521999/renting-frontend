import { createSlice } from '@reduxjs/toolkit';
// import { object } from 'yup';

const UploadImageSlice = createSlice({
  name: 'uploadimage',
  initialState: {
    loading: false,
    dataimage: [],
    status: undefined,
    data: []
  },
  reducers: {
    fetch_addImage: (state, action) => {
      // console.log(action.payload);
      state.dataimage.push(action.payload);
    },

    fetchReset: (state, action) => ({
      ...state,
      dataimage: [],
      data: []
    }),
    deleteByIndex: (state, action) => {
      const index = action.payload;
      state.dataimage.splice(index, 1);
    },
    addDataImage: (state, action) => {
      console.log(action.payload);
      // state.data.push(action.payload);
    },
    addArrayDataImage: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        dataimage: action.payload
      };
    }
  }
});

export const {
  fetch_addImage, fetchReset, deleteByIndex, addDataImage, addArrayDataImage
} = UploadImageSlice.actions;

export default UploadImageSlice.reducer;
