import axios from 'axios';
import { fetchSuccess, fetchRequest, fetchError } from '../store/updatepostSlice';
import { addArrayDataImage } from '../../../components/uploadimage/store/uploadImageSlice';
// import { fetch_editorChange } from '../../../components/edittor/store/edtSlice';
// chưa sửa

export default id => function (dispatch) {
  // console.log(id);
  // const link = ;
  dispatch(fetchRequest());
  axios.get(`http://localhost:5000/accommodation/${id}`, {
  }).then(res => {
    const { data } = res;
    console.log(data.data[0].images);
    dispatch(addArrayDataImage(data.data[0].images));
    dispatch(fetchSuccess(data));
    console.log(data);
  })
    .catch(error => {
      dispatch(fetchError(error));
    });
};
