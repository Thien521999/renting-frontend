import React, { Component } from 'react';

import './sign_in.sass'
import { Link } from 'react-router-dom'

class SigninForm extends Component {
    render() {
        return (
            <div className="card text-left">
                <form className="signinForm">
                    <div className="container">
                        <div className="row mt-4">
                            
                            <div className="col-12" align="center">Đăng Nhập</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <div>Username</div>
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                        </div>
                        <div>

                        </div>
                        <div></div>
                        <div className="row mt-4">

                            <div className="col-12">
                                <div>Password</div>
                                <input type="password" className="form-control" id="inputEmail3" placeholder="password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-2 mb-2">
                                <Link to="/forget_password">bạn quên mật khẩu?</Link>
                            </div>
                        </div>
                        <div className="row mt-4 mb-4">
                            <div className="col-6">
                                <button name="" id="" className="btn btn-primary" type="submit">Đăng nhập</button>
                            </div>
                            <div className="col-6">
                                <Link to="/change_password"><button name="" id="" className="btn btn-primary" type="submit">Đổi mật khẩu</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default SigninForm;