import React, { Component } from 'react';
import './sign_in.sass'
import SigninForm from './SigninForm';
//import './navigationbar.sass'
//import {Link} from 'react-router-dom'

class Sign_in extends Component {
    render() {
        return (
            <div className="container mt-5 widthform">
                <div className="row">
                    <SigninForm/>
                </div>
            </div>
        );
    }
}
export default Sign_in;