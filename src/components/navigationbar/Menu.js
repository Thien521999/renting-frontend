import React, { Component } from 'react';

import './navigationbar.sass'
//import { Link } from 'react-router-dom'

class Menu extends Component {
    //this.PaymentResponse.Dis
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col10">
                        <span>Thông tin cá nhân</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col10">
                        <span>Bài đăng của tôi</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col10">
                        <span>Đăng xuất</span>
                    </div>
                </div>
            </div>
           
        );
    }
}
export default Menu;