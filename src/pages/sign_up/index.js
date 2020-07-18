
import React, { Component } from 'react';
import SignupForm from './SignupForm';
import services from './services/sv_signup';
import {connect} from  'react-redux';
import { Redirect } from 'react-router';
//const bcrypt=require('bcrypt');
//let Hash  =require('password-hash');
//import './navigationbar.sass'
//import {Link} from 'react-router-dom'

class Signup extends Component {
    signUp=(name,phone,email,password,retype,role)=>{
        
        //const myPlaintextPassword = 's0/\/\P4$$w0rD';
        
        //const saltRounds = 10;
        //let passwordHash = Hash.generate(password);
        //console.log(passwordHash);
        if(password===retype)
        {
            console.log("gọi hàm của service")
            this.props.dispatch(services(name,phone,email,password,role));
            
        }
        else
        {

        }
    }
    render() {
        let compo;
        const form = <div className="container mt-5 widthform">
                        <div className="row">
                        <SignupForm signUp={this.signUp}></SignupForm>
                        </div>
                     </div>
        const {user}=this.props;
        switch (user.status){
            case 201:
                compo = <Redirect push to='/login'></Redirect>
                break;
            default:
                compo=form;
                break;
        }
        return (
            <div>
                {compo}
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