import {  fetch_success } from '../store/homeSlice';
import axios from 'axios';

export default () => {
    return function (dispatch) {
        axios.get('http://localhost:5000/accommodation', {
        }).then(res => {
            console.log("lấy được dữ liệu")
            //data = res.data;
            //console.log(data)
            dispatch(fetch_success(res.data))
        })
            .catch(error => {
                console.log("lỗi lấy dữ liệu")
            })

    }
}