import { createSlice } from '@reduxjs/toolkit';

const changePassSlice = createSlice({
    name: 'changePass',
    initialState: {
        loading: false,
        status: undefined
    },
    reducers: {
        fetch_request: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },

        fetch_success: (state, action) => {
            let { status } = action.payload;
            state.status = status;
            state.loading = false;
        },

        fetch_error: (state, action) => {
            return {
                ...state,
                loading: false,
                status: 500
            }
        }
    }
})

export const { fetch_error, fetch_request, fetch_success } = changePassSlice.actions;

export default changePassSlice.reducer;