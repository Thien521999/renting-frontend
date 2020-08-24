import axios from 'axios';
import { fetch_error, fetch_request, fetch_success } from '../store/uploadSlice';

export default information => function (dispatch) {
  dispatch(fetch_request());
  console.log('service');
  axios.post('http://localhost:5000/accommodation', {
    ...information
  })
    .then(res => {
      console.log(res.data);
      dispatch(fetch_success(res.data));
    })
    .catch(error => {
      console.log('lỗi đăng bài');
      dispatch(fetch_error(error));
    });
};
