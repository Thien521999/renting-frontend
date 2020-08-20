import React, { Component } from 'react';
import './guide.sass';
import { BsFillHouseFill, BsFillPersonFill } from 'react-icons/bs';

import { IoIosPaper } from 'react-icons/io';
import { AiFillMail } from 'react-icons/ai';
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Displayusers, Displayrequest } from '../../pages/admin/store/adminSlice';

class GuideContent extends Component {
    displayUsers=() => {
      console.log('hiện usêr');
      this.props.displayUsers();
    }

    render() {
      return (
        <div className="guide-content">
          <div className="guide-body">
            <div className="head-gui-content">
              <div>
                QUẢN LÝ THUÊ TRỌ
              </div>
            </div>
            <hr />
            <div className="guide-item">
              <div>
                <BsFillHouseFill />
                <span>TRANG CHỦ</span>
              </div>
              <div onClick={this.displayUsers}>
                <BsFillPersonFill />
                <span>NGƯỜI DÙNG</span>
              </div>
            </div>
            <hr />
            <div className="guide-item">
              <div>
                <IoIosPaper />
                <span>
                  BÀI ĐĂNG
                </span>
              </div>
              <div onClick={this.props.displayRequest}>
                <AiFillMail className="icon" />
                <span>YÊU CẦU NÂN CẤP</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  displayUsers: () => {
    dispatch(Displayusers());
  },
  displayRequest: () => {
    dispatch(Displayrequest());
  }
});
export default connect(null, mapDispatchToProps)(GuideContent);
