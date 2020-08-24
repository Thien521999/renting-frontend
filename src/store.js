import { configureStore } from '@reduxjs/toolkit';
import userReducer from './pages/sign_in/store/signInSlice';
import signUpReducer from './pages/sign_up/store/signupSlice';
import changePassReducer from './pages/change_password/store/changePassSlice';
import UploadImageReducer from './pages/upload-post/store/uploadSlice';
import inforRentingRducer from './components/inforrenting/store/inforRentingSlice';
import uploadImageReducer from './components/uploadimage/store/uploadImageSlice';
import adminReducer from './pages/admin/store/adminSlice';
import homeReducer from './pages/home/store/homeSlice';
import detailReducer from './pages/detail/store/detailSlice';
import searchReducer from './pages/search/store/searchSlice';
import updatepostReducer from './pages/updatepost/store/updatepostSlice';
import editorUpdateReducer from './components/editorupdate/store/edittorupdateSlice';
import UserPostRecucer from './pages/user/store/UserPostSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    signup: signUpReducer,
    changePass: changePassReducer,
    uploadpost: UploadImageReducer,
    inforRenting: inforRentingRducer,
    uploadimage: uploadImageReducer,
    admin: adminReducer,
    home: homeReducer,
    detail: detailReducer,
    search: searchReducer,
    updatePost: updatepostReducer,
    editorupdate: editorUpdateReducer,
    userpost: UserPostRecucer
  }
});
