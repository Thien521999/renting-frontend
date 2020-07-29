import { createSlice } from '@reduxjs/toolkit';

const UploadImageSlice = createSlice({
    name: 'uploadimage',
    initialState: {
        loading: false, 
        data: [],
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
        
        fetch_addImage:(state,action)=>{
            //console.log("chạy tới đây chưa")
            //console.log(state)
            console.log(action.payload)
            // let listimg=state.data;
            // listimg.push(action.payload);
            // console.log(listimg[0])
            state.data.push(action.payload)
            //let img=state.data;
            //console.log(img)
        }
    }
})

export const { fetch_error, fetch_request, fetch_success, fetch_addImage } = UploadImageSlice.actions;

export default UploadImageSlice.reducer;