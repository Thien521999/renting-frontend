import React, { Component } from 'react'
// import EditorConvertToHTML from './EditorConvertToHTML'
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

class InforRengting extends Component {
    render() {
        return (
            <div>
                <div className="card card-infor">
                
                    <form className="signinForm">
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col-12" align="center"><b>Thông tin chung</b></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <div>Địa chỉ</div>
                                    <input name="email" className="form-control" placeholder="Địa chỉ" />
                                    <div className='mt-3'>Giá thuê</div>
                                    <input name="password"  className="form-control" placeholder="Giá thuê" />
                                    <div className='mt-3'>Giá nước </div>
                                    <input name="" className="form-control" placeholder="Giá nước" />
                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className='mt-3'>Giá điện</div>
                                    <input name="name" className="form-control" placeholder="Giá điện" />
                                    <div className='mt-3'>Chủ trọ</div>
                                    <input name="phone" className="form-control" placeholder="Chủ trọ" />
                                    <div className='mt-3'>Liên hệ</div>
                                    <input name="phone" className="form-control" placeholder="Liên hệ" />
                                </div>
                            </div>
                            
                            <div className="row mt-4 mb-4">
                                <div className="col-6">
                                    <button className="btn btn-primary" type="submit">Đăng bài</button>
                                </div>
                            </div>
                        </div>
                        
                    </form>

                </div>
            </div>
        );
    }
}
export default InforRengting;