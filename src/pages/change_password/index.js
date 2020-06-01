import React, { Component } from 'react';
import ChangepassForm from './ChangepassForm';


class ChangePassword extends Component {
    render() {
        return (
            <div class="container mt-5">
                <div class="row">
                    <div class="col-4">
                    </div>
                    <div class="col-4">
                        <div class="card text-left">
                            <ChangepassForm></ChangepassForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChangePassword;