import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false, 
        data: undefined,
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
            let { data, status } = action.payload;
            console.log(action.payload);
            state.data = data;
            state.status = status;
            state.loading = false;
        },

        fetch_error: (state, action) => {
            return {
                ...state,
                loading: false,
                status: action.payload
            }
        },

        fetch_exit:(state, action)=>{
            return{
                ...state,
                loading:false,
                status:undefined,
                data:undefined
            }
        }
    }
})

export const { fetch_error, fetch_request, fetch_success, fetch_exit } = userSlice.actions;

export default userSlice.reducer;