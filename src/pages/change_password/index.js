import React, { Component } from 'react';
import ChangepassForm from './ChangepassForm';
import './changepass.sass'


class ChangePassword extends Component {
    render() {
        return (
            <div className="container mt-5 widthform">
                <div className="row">
                    <ChangepassForm></ChangepassForm>
                </div>
            </div>
        );
    }
}
export default ChangePassword;