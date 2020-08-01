import React, { Component } from 'react';

import './navigationbar.sass'
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'

class Menu extends Component {
    //this.PaymentResponse.Dis
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col10">
                        <Link to="/user">Thông tin cá nhân</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col10">
                        <Link>Bài đăng của tôi</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col10">
                        <Link>Đăng xuất</Link>
                    </div>
                </div>
            </div>
           
        );
    }
}
export default Menu;