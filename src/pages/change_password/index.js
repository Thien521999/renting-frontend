import React, { Component } from 'react';
import ChangepassForm from './ChangepassForm';
import './changepass.sass'


class ChangePassword extends Component {
    render() {
        return (
            <div class="container mt-5 widthform">
                <div class="row">
                <ChangepassForm></ChangepassForm>
                </div>
            </div>
        );
    }
}
export default ChangePassword;