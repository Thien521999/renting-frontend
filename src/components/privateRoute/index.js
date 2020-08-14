import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from '../../pages/user';
import signIn from '../../pages/sign_in/services/sign-in';
import Home from '../../pages/home';
import SignUp from '../../pages/sign_up';
import ForgetPassword from '../../pages/forget_password';
import Changepass from '../../pages/change_password';
import Detail from '../../pages/detail';
import Admin from '../../pages/admin';
import uploadPost from '../../pages/upload-post';
import NotFound from '../../pages/notfound';

class PrivateRouter extends Component {
  render() {
    const { status } = this.props.user;
    let component;
    if (status === 200) {
      component = (
        <Route {...this.props.rest} path="/user" component={User} />
      );
    } else {
      component = <Route path="/login" component={signIn} />;
    }
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={signIn} />
        <Route path="/logup" component={SignUp} />
        <Route path="/forget_password" component={ForgetPassword} />
        <Route path="/change_password" component={Changepass} />
        <Route path="/detail/:id" component={Detail} />
        { component }
        <Route path="/admin" component={Admin} />
        <Route path="/upload_post" component={uploadPost} />
        <Route component={NotFound} />
      </Switch>

    );
  }
}
const mapStateToprops = state => ({
  user: state.user
});
export default connect(mapStateToprops)(PrivateRouter);
