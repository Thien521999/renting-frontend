import React, { Component } from 'react';
import ForgetpasswordForm from './ForgetpasswordForm';
//import {Link} from 'react-router-dom'

class ForgetPassword extends Component {
    render() {
        return (
            <div class="container mt-5">
                <div class="row">
                    <div class="col-4">
                    </div>
                    <div class="col-4">
                        <div class="card text-left">
                            <ForgetpasswordForm></ForgetpasswordForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgetPassword;