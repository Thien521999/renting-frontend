import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './user.sass';
import { connect } from 'react-redux';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

class User extends Component {
  render() {
    const { data } = this.props.user;
    const { status } = this.props.user;
    let main;
    if (status === 200) {
      let role = 'Admin';
      let checkpost = true;
      if (data.role === 0) {
        role = 'Người dùng';
        checkpost = false;
      }
      // console.log(data);
      main = (
        <div className="userPage">
          <div className="container mt-20">
            <div className="row">
              <div className="col-2" />
              <div className="col-8">
                <div>
                  <div className="card card-user">
                    <img className="card-img-top" alt="" id="user-img" src="data:image/jpeg;base64,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" />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <div>
                        <b>
                          <AiFillMail />
                        </b>
                        <span className="card-text">{data.email}</span>
                      </div>
                      <div>
                        <b>
                          <FiUsers />
                        </b>
                        <span>{role}</span>
                      </div>
                      <div>
                        <b>
                          <AiFillPhone />
                        </b>
                        <span>{data.phone}</span>
                      </div>
                      <div>
                        <Link className="btn btn-primary" to="/change_password" type="submit">Đổi mật khẩu</Link>
                      </div>
                    </div>
                  </div>
                  <div className="user gr-btn">
                    <Link to="#" type="button" className="btn btn-outline-primary">Phòng trọ</Link>
                    <Link to="#" type="button" className="btn btn-outline-primary">Nân cấp TK</Link>
                    <Link to="/change_password" type="button" className="btn btn-outline-primary">Đổi mật khẩu</Link>
                    {checkpost ? <Link to="upload_post" type="button" className="btn btn-outline-primary">Đăng bài</Link> : <div />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {main}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps)(User);
