import { createSlice } from '@reduxjs/toolkit';

const UploadImageSlice = createSlice({
    name: 'uploadimage',
    initialState: {
        loading: false, 
        dataimage: [],
        status: undefined
    },
    reducers: {    
        fetch_addImage:(state,action)=>{    
            state.dataimage.push(action.payload)
        },

        fetch_reset:(state,action)=>
        {
            return{
                ...state,
                dataimage:[]
            }
        }
    }
})

export const {fetch_addImage, fetch_reset } = UploadImageSlice.actions;

export default UploadImageSlice.reducer;