import { createSlice } from '@reduxjs/toolkit';

const InforRengtingSlice = createSlice({
    name: 'inforRenting',
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
        
        fetch_addInfor:(state,action)=>{    
            
            console.log(action.payload)
            state.data=action.payload
            // return{
            //     ...state,
            //     loading:true
            // }
        },

        fetch_reset:(state,action)=>{
            return{
                ...state,
                data:undefined
            }
        }
    }
})

export const { fetch_error, fetch_request, fetch_success, fetch_addInfor } = InforRengtingSlice.actions;

export default InforRengtingSlice.reducer;