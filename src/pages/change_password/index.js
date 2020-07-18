import React, { Component } from 'react';
import ChangepassForm from './ChangepassForm';
import './changepass.sass'
import { connect } from 'react-redux';
import services from './services/sv-changePass'

class ChangePassword extends Component {
    changePass=(oldPass,newPass)=>
    {
        let user=this.props.user;
        console.log(user.data.email)
        this.props.dispatch(services(user.data.email,oldPass,newPass));
        
    }
    render() {
        return (
            <div className="container mt-5 widthform">
                <div className="row">
                    <ChangepassForm ChangePassword={this.changePass}></ChangepassForm>
                    
                </div>
            </div>
        );
    }
}

const MapStateToProps=state=>
    {
        return{
            user:state.user,
            check: state.changePass
        }
    }
export default connect(MapStateToProps) (ChangePassword);