import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    loading: false,
    dp_dt_user: false,
    dp_dt_request: false,
    datausers: [],
    userupgrade: [],
    status: undefined
  },
  reducers: {
    fetchRequest: (state, action) => ({
      ...state,
      loading: true
    }),

    fetchSuccess: (state, action) => {
      const { data, status } = action.payload;

      console.log('gọi service admin');
      state.datausers = data;
      state.status = status;
      state.loading = false;
    },
    fetchGetRequestSC: (state, action) => {
      const { data, status } = action.payload;
      state.userupgrade = data;
      state.status = status;
      state.loading = false;
    },

    fetchError: (state, action) => ({
      ...state,
      loading: false,
      status: action.payload
    }),

    Displayusers: (state, action) => ({
      ...state,
      dp_dt_user: true,
      dp_dt_request: false
    }),
    Displayrequest: (state, action) => ({
      ...state,
      dp_dt_user: false,
      dp_dt_request: true
    })
  }
});

export const {
  fetchError, fetchRequest, fetchSuccess, Displayusers, Displayrequest, fetchGetRequestSC
} = adminSlice.actions;

export default adminSlice.reducer;
