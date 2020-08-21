import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage
} from 'formik';
import * as Yup from 'yup';

class ChangepassForm extends Component {
  render() {
    return (
      <div className="card text-left cartform">
        <Formik
          initialValues={{ oldPass: '', newPass: '', retypePass: '' }}
          onSubmit={data => {
            this.props.ChangePassword(data.oldPass, data.newPass);
          }}

          validationSchema={
            Yup.object({
              oldPass: Yup.string()
                .required(),
              newPass: Yup.string()
                .required(),
              retypePass: Yup.string()
                .required()
                .oneOf([Yup.ref('newPass'), null], 'not true newpass')
            })
          }
        >

          <Form>
            <div className="container">
              <div className="row mt-4">
                <div className="col-12">
                  <div align="center"><b>Đổi mật khẩu</b></div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div>Password cũ</div>
                  <Field type="password" name="oldPass" className="form-control" placeholder="password" />
                  <div className="errormess">
                    *
                    <ErrorMessage name="oldPass" />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div>Password mới</div>
                  <Field type="password" name="newPass" className="form-control" placeholder="password" />
                  <div className="errormess">
                    *
                    <ErrorMessage name="newPass" />
                  </div>
                </div>
              </div>
              <div className="row mt-4">

                <div className="col-12">
                  <div>Retype password</div>
                  <Field type="password" name="retypePass" className="form-control" placeholder="password" />
                  <div className="errormess">
                    *
                    <ErrorMessage name="retypePass" />
                  </div>
                </div>
              </div>
              <div className="row mt-4 mb-5">
                <div className="col-6">
                  <Link to="/forget_password">Bạn quên mật khẩu?</Link>
                </div>
                <div className="col-6">
                  <button name="" id="" className="btn btn-primary" type="submit">Đổi mật khẩu</button>
                </div>
              </div>

            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}
export default ChangepassForm;
