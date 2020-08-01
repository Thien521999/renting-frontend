import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        loading: false,
        dp_dt_user:false,
        dp_dt_request:false,
        datausers: [],
        requestupgrade:[],
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
        
        fetch_displayusers:(state,action)=>{    
            //console.log("đã đến đay chưa")
            state.dp_dt_user=true;
            state.dp_dt_request=false;
        },
        fetch_displayrequest:(state,action)=>
        {
            state.dp_dt_user=false;
            state.dp_dt_request=true;
        }
    }
})

export const { fetch_error, fetch_request, fetch_success, fetch_displayusers,fetch_displayrequest } = adminSlice.actions;

export default adminSlice.reducer;