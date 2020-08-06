import axios from 'axios';
import { fetchSuccess } from '../store/homeSlice';

export default () => function (dispatch) {
  axios.get('http://localhost:5000/accommodation', {
  }).then(res => {
    // console.log('lấy được dữ liệu');
    const { data } = res;
    console.log(data);
    dispatch(fetchSuccess(res.data));
  })
    .catch(error => {
      console.log(error);
    });
};
