import React, { Component } from 'react';
import SignupForm from './SignupForm';
//import './navigationbar.sass'
//import {Link} from 'react-router-dom'

class Signup extends Component {
    render() {
        return (
            <div className="container mt-5 widthform">
                <div className="row">
                    <SignupForm></SignupForm>
                </div>
            </div>
        );
    }
}
export default Signup;