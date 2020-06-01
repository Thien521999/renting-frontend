import React, { Component } from 'react';
import ForgetpasswordForm from './ForgetpasswordForm';
import './forgetpass.sass'
//import {Link} from 'react-router-dom'

class ForgetPassword extends Component {
    render() {
        return (
            <div class="container mt-5 widthform">
                <div class="row">
                    <ForgetpasswordForm></ForgetpasswordForm>
                </div>
            </div>
        );
    }
}
export default ForgetPassword;