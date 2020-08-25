import axios from 'axios';
// import { fetchError, fetchRequest, fetchSuccess } from '../store/adminSlice';

export default userUpgrade => function (dispatch) {
  // fetchRequest();
  console.log('đã đến chổ gọi');
  axios.post('http://localhost:5000/user/update-role', {
    ...userUpgrade
  }).then(res => {
    // console.log('lấy được dữ liệu');
    const { data } = res;
    console.log(data);
    // alert('Nâng cấp thành công');
    // dispatch(fetchSuccess(res.data));
  })
    .catch(error => {
      // fetchError();
      console.log(error);
    });
};
