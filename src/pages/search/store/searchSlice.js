import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    data: [],
    status: undefined,
    keyword: ''
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

    fetchError: (state, action) => ({
      ...state,
      loading: false,
      status: action.payload
    }),
    changeKey: (state, action) => {
      const key = action.payload;
      return {
        ...state,
        keyword: key
      };
    }
  }
});

export const {
  fetchError, fetchRequest, fetchSuccess, changeKey
} = searchSlice.actions;

export default searchSlice.reducer;
