import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false, 
        data: undefined,
        status: undefined,
        displayMenu: false
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

        fetch_error: (state,action) => {
            console.log(action.payload)

            return {
                ...state,
                loading: false,
                status:400
                //status: action.payload
            }
        },

        fetch_exit:(state, action)=>{
            return{
                ...state,
                loading:false,
                status:undefined,
                data:undefined
            }
        },

        fetch_displayMenu:(state,action)=>
        {
            let display=!state.displayMenu;
            return{
                ...state,
                displayMenu:display
            }
        }
    }
})

export const { fetch_error, fetch_request, fetch_success, fetch_exit, fetch_displayMenu } = userSlice.actions;

export default userSlice.reducer;