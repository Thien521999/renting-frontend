import { fetch_error, fetch_request, fetch_success } from '../store/uploadSlice';
import axios from 'axios';

export default (name, description,price,address,area,water,electric,owner,images) => {
    return function(dispatch) {
        dispatch(fetch_request());
        console.log("service");
        axios.post('http://localhost:5000/accommodation', {
            "name": name,
            "description": description,
            "price": price,
            "address": address,
            "area": area,
            "water": water,
            "electric": electric,
            "owner": owner,
            "images": images
        })
            .then(res =>{
                //console.log(res.data)
                dispatch(fetch_success(res.data))
            } )
                .catch(error =>{
                    console.log("lỗi đăng bài")
                    dispatch(fetch_error(error))
                } )
    }
}