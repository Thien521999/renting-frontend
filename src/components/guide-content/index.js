import React, { Component } from "react"
import './guide.sass'
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { AiFillMail } from "react-icons/ai"
//import { Link } from "react-router-dom";
import {fetch_displayusers,fetch_displayrequest} from './../../pages/admin/store/adminSlice'
import { connect } from "react-redux";

class GuideContent extends Component {
    displayUsers=()=>{
        console.log("hiện usêr")
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
                    <hr></hr>
                    <div className="guide-item">
                        <div>
                            <BsFillHouseFill></BsFillHouseFill>
                            <span>TRANG CHỦ</span>
                        </div>
                        <div onClick={this.displayUsers}>
                            <BsFillPersonFill></BsFillPersonFill>
                            <span>NGƯỜI DÙNG</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="guide-item">
                        <div>
                            <IoIosPaper></IoIosPaper>
                            <span>
                                BÀI ĐĂNG
                            </span>
                        </div>
                        <div onClick={this.props.displayRequest}>
                            <AiFillMail className="icon"></AiFillMail>
                            <span>YÊU CẦU NÂN CẤP</span>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        displayUsers:()=>{
            dispatch(fetch_displayusers());
        },
        displayRequest:()=>{
            dispatch(fetch_displayrequest());
        }
    }
}
export default connect(null,mapDispatchToProps)(GuideContent);