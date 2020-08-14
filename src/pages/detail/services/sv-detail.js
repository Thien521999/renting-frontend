import axios from 'axios';
import { fetchSuccess } from '../store/detailSlice';

export default id => function (dispatch) {
  // console.log(id);
  // const link = ;
  axios.get(`http://localhost:5000/accommodation/${id}`, {
  }).then(res => {
    // console.log('lấy được dữ liệu');
    // const { data } = res;
    // console.log(data);
    dispatch(fetchSuccess(res.data));
  })
    .catch(error => {
      console.log(error);
    });
};
