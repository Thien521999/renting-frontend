import React, { Component } from 'react';
import './sign_in.sass'
import SigninForm from './SigninForm';
import services from './services/sign-in';
import {connect} from  'react-redux';
//import Home from './../home';
import { Redirect } from 'react-router';
//import './navigationbar.sass'
//import {Link} from 'react-router-dom'

class Sign_in extends Component {
    signIn=(email,password)=>
    {
        //this.props.password=password;
        console.log("goi ham signIn ở lớp index")
        this.props.dispatch(services(email,password))
    }
    render() {
        let compo;
        //const ele=<Home></Home>;
        const form = <div className="container mt-5 widthform">
            <div className="row">
                <SigninForm signIn={this.signIn} />
            </div>
        </div>;
        const {user}=this.props;
        switch(user.status)
            {
                case 200:
                    compo = <Redirect push to="/"></Redirect>
                    break;
                default:
                    compo = form
                    break;
            }
        return (
            <div>
                {compo}
            </div>
        );
    }

}

const MapStateToProps=state=>
    {
        return{
            user:state.user
        }
    }
export default connect(MapStateToProps)(Sign_in);