import { fetch_error, fetch_request, fetch_success } from '../store/signupSlice';
import axios from'axios';


export default (name,phone,email,password,role) => {
    return function(dispatch) {
        dispatch(fetch_request());
        console.log("service signup");

        //chưa sửa
        axios.post('http://localhost:5000/user/', {
            "name":name,
            "phone":phone,
            "email": email,
            "password": password,
            "role":role
        })
            .then(res => dispatch(fetch_success(res.data)))
                .catch(error => dispatch(fetch_error(error)))
    }
}