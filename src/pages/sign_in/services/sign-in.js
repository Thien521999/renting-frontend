import { fetch_error, fetch_request, fetch_success } from '../store/signInSlice';
import axios from 'axios';

export default (email, password) => {
    return function(dispatch) {
        dispatch(fetch_request());
        //console.log("service");
        axios.post('http://localhost:5000/user/get', {
            "email": email,
            "password": password
        })
            .then(res =>{
                //console.log(res.data)
                dispatch(fetch_success(res.data))
            } )
                .catch(error =>{
                    dispatch(fetch_error(error))
                } )
    }
}