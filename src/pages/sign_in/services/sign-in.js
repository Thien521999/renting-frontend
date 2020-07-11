import { fetch_error, fetch_request, fetch_success } from '../store/signInSlice';
import axios from'axios';

export default (email, password) => {
    return function(dispatch) {
        dispatch(fetch_request());
        axios.post('localhost/user', {
            "email": email,
            "password": password
        })
            .then(res => dispatch(fetch_success(res.data)))
                .catch(error => dispatch(fetch_error(error.response.status)))
    }
}