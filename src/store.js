import { configureStore } from '@reduxjs/toolkit';
import userReducer from './pages/sign_in/store/signInSlice';

export default configureStore({
    reducer: {
        user: userReducer
    }
})