import { configureStore } from '@reduxjs/toolkit';
import userReducer from './pages/sign_in/store/signInSlice';
import signUpReducer from './pages/sign_up/store/signupSlice';
import changePassReducer from './pages/change_password/store/changePassSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        signup : signUpReducer,
        changePass: changePassReducer
    }
})