import React, { Component } from 'react';
import ChangepassForm from './ChangepassForm';
import './changepass.sass';
import { connect } from 'react-redux';
import services from './services/sv-changePass';
import { fetch_exit } from '../sign_in/store/signInSlice';
import { Redirect } from 'react-router';
// import { Redirect } from 'react-router';

class ChangePassword extends Component {
    changePass=(oldPass, newPass) => {
      const { user } = this.props;
      console.log(user.data.email);
      this.props.dispatch(services(user.data.email, oldPass, newPass));
    }

    render() {
      const component = null;
      if (this.props.check === 200) {
        alert('đổi mật khẩu thành công');
        this.props.dispatch(fetch_exit());
        return <Redirect push to="/login" />;
      }
      // console.log(this.props.check);

      return (
        <div className="container mt-5 widthform">
          <div className="row">
            <ChangepassForm ChangePassword={this.changePass} />
            {component}
            {this.props.check === 400 ? <div className="errormess">* sai mật khẩu</div> : null}
          </div>
        </div>
      );
    }
}

const MapStateToProps = state => ({
  user: state.user,
  check: state.changePass.status
});
export default connect(MapStateToProps)(ChangePassword);
