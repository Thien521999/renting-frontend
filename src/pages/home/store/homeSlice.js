import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// let datas;
// axios.get('http://localhost:5000/accommodation',{
// }).then(res=>{
//     console.log("lấy được dữ liệu")
//     datas=res.data;
//     this.dispatch(fetch_success(res.data))
// })
// .catch(error=>{
//     console.log("lỗi lấy dữ liệu")
// })
//console.log(datas)
const homeSlice = createSlice({
    name: 'home',
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
            state.data=action.payload
        },

        fetch_error: (state, action) => {
            console.log("upload thất bại")
            // return {
            //     ...state,
            //     loading: false,
            //     status: action.payload
            // }
        },
        
    }
})

export const { fetch_error, fetch_request, fetch_success, fetch_addImage } = homeSlice.actions;

export default homeSlice.reducer;