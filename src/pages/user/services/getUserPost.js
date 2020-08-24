import axios from 'axios';
import { fetchSuccess, fetchRequest, fetchError } from '../store/UserPostSlice';

export default id => function (dispatch) {
  // console.log(id);
  // const link = ;
  dispatch(fetchRequest());
  axios.get(`http://localhost:5000/accommodation/get-by-user/${id}`, {
  }).then(res => {
    const { data } = res;
    console.log(data);
    dispatch(fetchSuccess(data));
    // console.log(data);
  })
    .catch(error => {
      dispatch(fetchError(error));
    });
};
