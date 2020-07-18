import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './sign_in.sass'
import { Link } from 'react-router-dom'

class SigninForm extends Component {
    
    render() {
        return (
            <div className="card text-left cartform">
                <Formik
                    initialValues={ {email: '', password: ''} }
                    onSubmit={(data)=>{
                    console.log(data);
                    this.props.signIn(data.email,data.password)
                            }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                    })}
                >
                    
                <Form className="signinForm">
                        <div className="container">
                            <div className="row mt-4">

                                <div className="col-12" align="center"><b>Đăng Nhập</b></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <div>Username</div>
                                    <Field name="email" id="email" type="email" className="form-control" placeholder="Email" />
                                    <ErrorMessage name='email' className="ErrorIvalidate"></ErrorMessage>
                                </div>
                            </div>
                            <div>

                            </div>
                            <div></div>
                            <div className="row mt-4">

                                <div className="col-12">
                                    <div>Password</div>
                                    <Field name="password" type="password"  className="form-control" id="inputEmail3" placeholder="password" />
                                    <ErrorMessage name="password" className="ErrorIvalidate"></ErrorMessage>
                                </div>
                            </div>
                            <div className="row mt-4 mb-5">
                                <div className="col-7 mt-2 mb-2">
                                    <Link to="/forget_password">bạn quên mật khẩu?</Link>
                                </div>
                                <div className="col-5">
                                <button name="" id="" className="btn btn-primary" type="submit">Đăng nhập</button>
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