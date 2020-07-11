import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import './sign_in.sass'
import { Link } from 'react-router-dom'

class SigninForm extends Component {
    
    render() {
        return (
            <div className="card text-left">
                <Formik
                    initialValues={ {email: '', password: ''} }
                    onSubmit={(data)=>{
                    console.log(data);
                    this.props.signIn(data.email,data.password)
                }}>
                    
                <Form className="signinForm">
                        <div className="container">
                            <div className="row mt-4">

                                <div className="col-12" align="center">Đăng Nhập</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <div>Username</div>
                                    <Field name="email" id="email" type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div>

                            </div>
                            <div></div>
                            <div className="row mt-4">

                                <div className="col-12">
                                    <div>Password</div>
                                    <Field name="password" type="password"  className="form-control" id="inputEmail3" placeholder="password" />
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
                                    <Link to="/change_password"><button name="" id="" className="btn btn-primary">Đổi mật khẩu</button></Link>
                                </div>
                            </div>
                        </div>
                </Form>
                </Formik>
            </div>
        );
    }
}
export default SigninForm;