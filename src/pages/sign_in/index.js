import React, { Component } from 'react';
import './sign_in.sass';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import SigninForm from './SigninForm';
import services from './services/sign-in';
// import Home from './../home';
// import Post from './../../components/post'

class Sign_in extends Component {
    signIn=(email, password) => {
      // this.props.password=password;
      // console.log('goi ham signIn ở lớp index');
      // let PassWord = Hash.generate(password);
      // console.log(PassWord);
      this.props.dispatch(services(email, password));
    }

    render() {
      let compo;
      // const ele=<Home></Home>;
      const form = (
        <div className="container widthform SigninPage">
          <div className="row">
            <SigninForm signIn={this.signIn} />
          </div>
        </div>
      );

      const errorSignIn = (
        <div className="container mt-5 widthform mt-20">
          <div className="row">
            <SigninForm signIn={this.signIn} />
            <div>sai user name hoặc mật khẩu</div>
          </div>
        </div>
      );
      const { user } = this.props;
      // console.log(user);
      switch (user.status) {
        case 200:
          compo = <Redirect push to="/" />;
          break;

          // nếu không tìm đc user
        case 400:
          compo = errorSignIn;
          break;
        default:
          compo = form;
          break;
      }
      return (
        <div>

          {compo}
        </div>
      );
    }
}

const MapStateToProps = state => ({
  user: state.user
});
export default connect(MapStateToProps)(Sign_in);
