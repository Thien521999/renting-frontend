import React, { Component } from 'react';
// import EditorConvertToHTML from './EditorConvertToHTML'
import {
  Formik, Field, Form
} from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { fetch_addInfor } from './store/inforRentingSlice';

class InforRengting extends Component {
    confirmInfor=data => {
      // console.log(this.props.haha)
      this.props.addInfor(data);
    }

    render() {
      return (
        <div>
          <div className="card card-infor">
            <Formik
              initialValues={{
                name: '', address: '', price: '', area: '', water: '', electric: ''
              }}
              onSubmit={data => {
                // console.log(data);
                this.confirmInfor(data);
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required(),
                address: Yup.string()
                  .required(),
                price: Yup.number()
                  .required(),
                area: Yup.string()
                  .required(),
                water: Yup.string()
                  .required(),
                electric: Yup.string()
                  .required(),
              })}
            >
              {({ errors, touched }) => (
                <Form className="signinForm">
                  <div className="container">
                    <div className="row mt-4">
                      <div className="col-12" align="center"><b>Thông tin chung</b></div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12">
                        <div>Tên</div>
                        <Field name="name" id="namepost" className="form-control" placeholder="Tên tiêu đề" />
                        {errors.name && touched.name ? (
                          <div className="errormess">
                            *
                            {errors.name}
                          </div>
                        ) : null}
                        <div className=" mt-2">Địa chỉ</div>
                        <Field name="address" id="addresspost" className="form-control" placeholder="Địa chỉ" />
                        {errors.address && touched.address ? (
                          <div className="errormess">
                            *
                            {errors.address}
                          </div>
                        ) : null}
                        <div className="mt-3">Giá thuê</div>
                        <Field name="price" id="pricepost" type="number" className="form-control" placeholder="Giá thuê" />
                        {errors.price && touched.price ? (
                          <div className="errormess">
                            *
                            {errors.price}
                          </div>
                        ) : null}
                        <div className="mt-3">Diện tích</div>
                        <Field name="area" id="areapost" type="number" className="form-control" placeholder="Diện tích" />
                        {errors.area && touched.area ? (
                          <div className="errormess">
                            *
                            {errors.area}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="mt-3">Giá nước </div>
                        <Field name="water" id="waterpost" type="number" className="form-control" placeholder="Giá nước" />
                        {errors.water && touched.water ? (
                          <div className="errormess">
                            *
                            {errors.water}
                          </div>
                        ) : null}
                        <div className="mt-3">Giá điện</div>
                        <Field name="electric" id="electricpost" type="number" className="form-control" placeholder="Giá điện" />
                        {errors.electric && touched.electric ? (
                          <div className="errormess">
                            *
                            {errors.electric}
                          </div>
                        ) : null}

                      </div>
                    </div>

                    <div className="row mt-4 mb-4">
                      <div className="col-6" />
                      <div className="col-6">
                        {/* <button className="btn btn-primary" type="submit">Xác nhận thông tin</button> */}
                      </div>
                    </div>
                  </div>

                </Form>
              )}
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

const mapDispatchToProps = dispatch => ({
  addInfor: data => {
    dispatch(fetch_addInfor(data));
  }
});

export default connect(null, mapDispatchToProps)(InforRengting);
