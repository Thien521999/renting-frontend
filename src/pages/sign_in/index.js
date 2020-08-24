import React, { Component } from 'react';
import './sign_in.sass';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import SigninForm from './SigninForm';
import services from './services/sign-in';
import Loading from '../../components/loading';
// import Notify from '../../components/notify';
// import Home from './../home';
// import Post from './../../components/post'

toast.configure();
class Sign_in extends Component {
    signIn=(email, password) => {
      // this.props.password=password;
      // console.log('goi ham signIn ở lớp index');
      // let PassWord = Hash.generate(password);
      // console.log(PassWord);
      this.props.dispatch(services(email, password));
    }

    notify=() => {
      toast.success('đăng nhập thành công !', {
        position: toast.POSITION.TOP_CENTER
      });
    }

    render() {
      let compo;
      // const ele=<Home></Home>;
      const form = (
        <div className="container widthform">
          <div className="row">
            <SigninForm signIn={this.signIn} />
          </div>
        </div>
      );

      const errorSignIn = (
        <div className="container widthform">
          <div className="row">
            <SigninForm signIn={this.signIn} />
            <div className="errormess">* sai user name hoặc mật khẩu</div>
          </div>
        </div>
      );
      const { user } = this.props;
      // console.log(user);
      // if (user.status === 200) {
      //   this.notify();
      // }
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
        <div className="SignInPage">
          {this.props.user.loading ? <Loading /> : <div> </div>}
          {compo}

        </div>
      );
    }
}

const MapStateToProps = state => ({
  user: state.user
});
export default connect(MapStateToProps)(Sign_in);
