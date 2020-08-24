import React, { Component } from 'react';
import ForgetpasswordForm from './ForgetpasswordForm';
import './forgetpass.sass';
// import {Link} from 'react-router-dom'

class ForgetPassword extends Component {
  render() {
    return (
      <div className="container mt-5 widthform forgetpass">
        <div className="row">
          <ForgetpasswordForm />
        </div>
      </div>
    );
  }
}
export default ForgetPassword;
