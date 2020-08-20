import axios from 'axios';
import { fetchError, fetchRequest, fetchSuccess } from '../store/adminSlice';

export default () => function (dispatch) {
  fetchRequest();
  axios.post('http://localhost:5000/user/get-all', {
  }).then(res => {
    // console.log('lấy được dữ liệu');
    const { data } = res;
    console.log(data);
    dispatch(fetchSuccess(res.data));
  })
    .catch(error => {
      fetchError();
      console.log(error);
    });
};
