import { createSlice } from '@reduxjs/toolkit';
import { data } from 'jquery';

const updatepostSlice = createSlice({
  name: 'updatepost',
  initialState: {
    loading: true,
    data: undefined,
    status: undefined,
    editor: ''
  },
  reducers: {
    fetchRequest: state => ({
      ...state,
      loading: true
    }),

    fetchSuccess: (state, action) => ({
      ...state,
      data: action.payload.data[0],
      status: action.payload.status,
      loading: false
    }),
    fetchError: (state, action) => ({
      ...state,
      data: action.payload
    }),
    fetchReset: state => ({
      ...state,
      data: undefined,
      status: undefined,
      loading: false
    }),
    setEditor: (state, action) => ({
      ...state,
      data: {
        ...state.data,
        description: action.payload
      }
    })
  }
});

export const {
  fetchError, fetchRequest, fetchSuccess, fetchReset, setEditor
} = updatepostSlice.actions;

export default updatepostSlice.reducer;
