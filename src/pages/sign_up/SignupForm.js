import React, { Component } from 'react';


class SignupForm extends Component {
    render() {
        return (
            <div className="card text-left">
                <form className="signinForm">
                    <div className="container">
                        <div className="row mt-4">
                            
                            <div className="col-12" align="center">Đăng kí</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <div>Email</div>
                                <input type="email" className="form-control"  placeholder="Email" />
                            </div>
                        </div>
                        <div className="row mt-4">

                            <div className="col-12">
                                <div>Password</div>
                                <input type="password" className="form-control"  placeholder="password" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div>Nhập lại Password</div>
                                <input type="password" className="form-control"  placeholder="password" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div>Họ tên</div>
                                <input type="email" className="form-control"  placeholder="Họ tên" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div>Số điện thoại</div>
                                <input type="email" className="form-control"  placeholder="sđt" />
                            </div>
                        </div>
                        <div className="row mt-4 mb-4">
                            <div className="col-6">
                                <button className="btn btn-primary" type="submit">Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignupForm;