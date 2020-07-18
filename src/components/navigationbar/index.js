import React, { Component } from 'react';
import 'bootstrap'
import './navigationbar.sass'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetch_exit, fetch_displayMenu} from './../../pages/sign_in/store/signInSlice'
import Menu from './Menu';

class Navigationbar extends Component {

    logout = ()=>
    {
        this.props.exit(); 
    }
    clickMenu=()=>{
        
        this.props.setDisPlayMenu();
    }
    render() {
        const isNotLogin = <span>
                            <Link to="/login"><button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Đăng nhập</button></Link>
                            <Link to="/logup"><button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Đăng kí</button></Link>
                            </span>
        const islogin = <span>
            <span>
                <Link to="/change_password"><button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Đổi mật khẩu</button></Link>
                <button className="btn btn-outline-light my-2 my-sm-0 mr-2" onClick={this.logout}>Đăng xuất</button>
                <button className="btn btn-outline-light my-2 my-sm-0 mr-2 btn_user" onClick={this.clickMenu}></button>
            </span>
        </span>
        const { user } = this.props;
        //console.log(user);
        let compo;
        switch (user.status){
            case 200:
                compo = islogin;
                break;

            //chưa sửa lỗi
            case 404:
                compo=isNotLogin;
                break;
            default:
                compo=isNotLogin;
                break;
        }
        let {displayMenu}=this.props.user;
        let menu;
        if(displayMenu)
        {
            menu=<div id="menu">
                        <Menu></Menu>
                    </div>
        }
        else
        {
            menu=<div></div>
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary navigation">
                <Link className="navbar-brand" to="/">Trang chủ</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Đăng nhập</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0 mr-5" type="submit">Search</button>
                    </form>
                    {compo}
                    
                </div>
            </nav>
            {menu}
            
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        exit:()=>
        {
            dispatch(fetch_exit());
        },
        setDisPlayMenu:()=>
        {
            dispatch(fetch_displayMenu());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigationbar);