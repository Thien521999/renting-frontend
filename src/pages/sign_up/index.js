import React, { Component } from 'react';
import SignupForm from './SignupForm';
import services from './services/sv_signup';
import {connect} from  'react-redux';
//import './navigationbar.sass'
//import {Link} from 'react-router-dom'

class Signup extends Component {
    signUp=(name,phone,email,password,role)=>{
        console.log("gọi hàm của service")
        this.props.dispatch(services(name,phone,email,password,role));
    }
    render() {
        return (
            <div className="container mt-5 widthform">
                <div className="row">
                    <SignupForm signUp={this.signUp}></SignupForm>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        user: state.signup
    }
}
export default connect(mapStateToProps)(Signup);