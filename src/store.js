import { configureStore } from '@reduxjs/toolkit';
import userReducer from './pages/sign_in/store/signInSlice';
import signUpReducer from './pages/sign_up/store/signupSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        signup : signUpReducer
    }
})