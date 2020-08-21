import axios from 'axios';
import { fetch_error, fetch_request, fetch_success } from '../store/changePassSlice';

export default (email, password, newpassword) => function (dispatch) {
  dispatch(fetch_request());
  console.log('service changge pass');
  axios.post('http://localhost:5000/user/change-password', {
    'email': email,
    'oldPass': password,
    'newPass': newpassword
  })
    .then(res => {
      console.log(res.data);
      dispatch(fetch_success(res.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetch_error(error));
    });
};
