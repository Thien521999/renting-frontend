import axios from 'axios';
import { fetch_error, fetch_request, fetch_success } from '../store/signInSlice';

export default (email, password) => function (dispatch) {
  dispatch(fetch_request());
  console.log(email);
  console.log(password);
  axios.post('http://localhost:5000/user/get', {
    email,
    password
  })
    .then(res => {
      // console.log(res.data)
      dispatch(fetch_success(res.data));
    })
    .catch(error => {
      dispatch(fetch_error(error));
    });
};
