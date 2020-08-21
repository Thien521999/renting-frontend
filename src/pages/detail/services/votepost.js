import axios from 'axios';
// import { fetchSuccess } from '../store/detailSlice';

export default dataupdate => function (dispatch) {
  // console.log(id);
  // const link = ;
  axios.post('http://localhost:5000/accommodation/update', {
    ...dataupdate
  }).then(res => {
    console.log('lấy được dữ liệu');
    const { data } = res;
    console.log(data);
    // dispatch(fetchSuccess(res.data));
  })
    .catch(error => {
      console.log(error);
    });
};
