import axios from 'axios';
import { fetch_error, fetch_request, fetch_success } from '../store/signupSlice';

export default (name, phone, email, password, role) => function (dispatch) {
  dispatch(fetch_request());
  console.log('service signup');
  // chưa sửa
  axios.post('http://localhost:5000/user/', {
    name,
    phone,
    email,
    password,
    role
  })
    .then(res => dispatch(fetch_success(res.data)))
    .catch(error => dispatch(fetch_error(error)));
};
