import axios from 'axios';
import { fetchError, fetchRequest, fetchGetRequestSC } from '../store/adminSlice';

export default () => function (dispatch) {
  fetchRequest();
  axios.get('http://localhost:5000/user/get-update-role', {
  }).then(res => {
    // console.log('lấy được dữ liệu');
    const { data } = res;
    console.log(data);
    dispatch(fetchGetRequestSC(res.data));
  })
    .catch(error => {
      fetchError();
      // console.log(error);
    });
};
