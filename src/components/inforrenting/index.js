import React, { Component } from 'react'
// import EditorConvertToHTML from './EditorConvertToHTML'
import {fetch_addInfor} from './store/inforRentingSlice';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import {connect} from 'react-redux'
import * as Yup from 'yup';

class InforRengting extends Component {
    confirmInfor=(data)=>{
        //console.log(this.props.haha)
        this.props.addInfor(data);
        
    }
    render() {
        return (
            <div>
                <div className="card card-infor">
                <Formik
                    initialValues={ {name:'',address: '', price: '',area:'', water:'',electric:''} }
                    onSubmit={(data)=>{
                    //console.log(data);
                    this.confirmInfor(data);
                    }}
                    validationSchema={Yup.object({
                        name:Yup.string()
                            .required(),
                        address: Yup.string()
                            .required('requied'),
                        price:Yup.number()
                            .required('requied'),
                        area: Yup.string()
                            .required('requied'),
                        water: Yup.string()
                            .required('requied'),
                        electric: Yup.string()
                            .required('requied'),
                    })}
                >
                    <Form className="signinForm">
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col-12" align="center"><b>Thông tin chung</b></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <div>Tên</div>
                                    <Field name="name" className="form-control" placeholder="Địa chỉ" />
                                    <ErrorMessage name="name"></ErrorMessage>
                                    <div>Địa chỉ</div>
                                    <Field name="address" className="form-control" placeholder="tên bài đăng" />
                                    <ErrorMessage name="address"></ErrorMessage>
                                    <div className='mt-3'>Giá thuê</div>
                                    <Field name="price" type='number'  className="form-control" placeholder="Giá thuê" />
                                    <ErrorMessage name="price"></ErrorMessage>
                                    <div className='mt-3'>Diện tích</div>
                                    <Field name="area" type='number' className="form-control" placeholder="Diện tích" />
                                    <ErrorMessage name="area"></ErrorMessage>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <div className='mt-3'>Giá nước </div>
                                    <Field name="water" type='number' className="form-control" placeholder="Giá nước" />
                                    <ErrorMessage name="water"></ErrorMessage>
                                    <div className='mt-3'>Giá điện</div>
                                    <Field name="electric" type='number' className="form-control" placeholder="Giá điện" />
                                    <ErrorMessage name="electric"></ErrorMessage>
                                    
                                </div>
                            </div>
                            
                            <div className="row mt-4 mb-4">
                                <div className="col-6"></div>
                                <div className="col-6">
                                    <button className="btn btn-primary" type="submit">Xác nhận thông tin</button>
                                </div>
                            </div>
                        </div>
                        
                    </Form>
                    </Formik>
                </div>
            </div>
        );
    }
}

// const mapStateToProps=state=>{
//     return{
//         haha: state.inforRengting
//     }
// }

const mapDispatchToProps=dispatch=>{
    return{
        addInfor:(data)=>{
            dispatch(fetch_addInfor(data))
        }
    }
}

 export default connect(null,mapDispatchToProps)(InforRengting);