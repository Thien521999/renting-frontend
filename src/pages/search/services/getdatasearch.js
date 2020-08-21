import axios from 'axios';
import { fetchError, fetchRequest, fetchSuccess } from '../store/searchSlice';

export default keyword => function (dispatch) {
  dispatch(fetchRequest());
  axios.post('http://localhost:5000/search', {
    keyword
  }).then(res => {
    console.log('lấy được dữ liệu');
    const { data } = res;
    console.log(data);
    dispatch(fetchSuccess(res.data));
  })
    .catch(error => {
      console.log(error);
      dispatch(fetchError());
    });
};
