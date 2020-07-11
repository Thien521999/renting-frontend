import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false, 
        data: undefined,
        code: undefined
    },
    reducers: {
        fetch_request: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },

        fetch_success: (state, action) => {
            let { data, code } = action.payload;

            state.data = data;
            state.code = code;
            state.loading = false;
        },

        fetch_error: (state, action) => {
            return {
                ...state,
                loading: false,
                code: action.payload
            }
        }
    }
})

export const { fetch_error, fetch_request, fetch_success } = userSlice.actions;

export default userSlice.reducer;