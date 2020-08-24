import axios from 'axios';
// import { fetch_error, fetch_request, fetch_success } from '../store/uploadSlice';

export default information => function (dispatch) {
  // dispatch(fetch_request());
  console.log('service');
  axios.post('http://localhost:5000/accommodation/update', {
    ...information
  })
    .then(res => {
      alert('update thành công');
      console.log(res.data);
    })
    .catch(error => {
      alert(error);
      // dispatch(fetch_error(error));
    });
};
