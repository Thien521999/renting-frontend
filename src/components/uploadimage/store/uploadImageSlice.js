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

    fetch_reset: (state, action) => ({
      ...state,
      dataimage: [],
      data: []
    }),
    deleteByIndex: (state, action) => {
      // console.log('vào slice');
      const index = action.payload;
      // state.data.splice(index, 1);
      state.dataimage.splice(index, 1);
      // URL.revokeObjectURL(state.dataimage[index]);
    },
    addDataImage: (state, action) => {
      console.log(action.payload);
      // state.data.push(action.payload);
    }
  }
});

export const {
  fetch_addImage, fetch_reset, deleteByIndex, addDataImage
} = UploadImageSlice.actions;

export default UploadImageSlice.reducer;
