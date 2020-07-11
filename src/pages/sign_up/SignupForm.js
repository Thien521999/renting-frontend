import React, { Component } from 'react';
import { Formik, Field ,Form} from 'formik';


class SignupForm extends Component {
    render() {
        return (
            <div className="card text-left">
                <Formik
                    initialValues={{email: "",password: "",retype: "",phone:"",name:"",role:"0"}}
                    onSubmit={(data)=>
                    {
                        console.log("submit form sign up")
                        this.props.signUp(data.name,data.phone,data.email,data.password,data.role);
                    }}
                >
                <Form className="signinForm">
                    <div className="container">
                        <div className="row mt-4">
                            
                            <div className="col-12" align="center">Đăng kí</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <div>Email</div>
                                <Field type="email" name="email" className="form-control"  placeholder="Email" />
                            </div>
                        </div>
                        <div className="row mt-4">

                            <div className="col-12">
                                <div>Password</div>
                                <Field name="password" type="password" className="form-control"  placeholder="password" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div>Nhập lại Password</div>
                                <Field name="retype" type="password" className="form-control"  placeholder="password" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div>Họ tên</div>
                                <Field name="name" className="form-control"  placeholder="Họ tên" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div>Số điện thoại</div>
                                <Field name="phone" className="form-control"  placeholder="sđt" />
                            </div>
                        </div>
                        
                        <div className="row mt-4 mb-4">
                            <div className="col-6">
                                <button className="btn btn-primary" type="submit">Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </Form>
                </Formik>
            </div>
        );
    }
}
export default SignupForm;