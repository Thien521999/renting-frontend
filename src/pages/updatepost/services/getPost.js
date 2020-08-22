import axios from 'axios';
import { fetchSuccess, fetchRequest, fetchError } from '../store/updatepostSlice';
// import { fetch_editorChange } from '../../../components/edittor/store/edtSlice';
// chưa sửa
export default id => function (dispatch) {
  // console.log(id);
  // const link = ;
  dispatch(fetchRequest());
  axios.get(`http://localhost:5000/accommodation/${id}`, {
  }).then(res => {
    const { data } = res;
    dispatch(fetchSuccess(data));
  })
    .catch(error => {
      dispatch(fetchError(error));
    });
};
