import { configureStore } from '@reduxjs/toolkit';
import userReducer from './pages/sign_in/store/signInSlice';
import signUpReducer from './pages/sign_up/store/signupSlice';
import changePassReducer from './pages/change_password/store/changePassSlice'
import UploadImageReducer from './pages/upload-post/store/uploadSlice'
import edtStateReduce from './components/edittor/store/edtSlice'
import inforRentingRducer from './components/inforrenting/store/inforRentingSlice'
import uploadImageReducer from './components/uploadimage/store/uploadImageSlice'
import adminReducer from './pages/admin/store/adminSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        signup : signUpReducer,
        changePass: changePassReducer,
        uploadpost: UploadImageReducer,
        edtState: edtStateReduce,
        inforRenting: inforRentingRducer,
        uploadimage: uploadImageReducer,
        admin: adminReducer
    }
})