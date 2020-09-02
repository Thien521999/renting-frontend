import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.sass';

import { Provider } from 'react-redux';
import Home from './pages/home';
import * as serviceWorker from './serviceWorker';
import Signin from './pages/sign_in';
import ForgetPassword from './pages/forget_password';
import ChangePassword from './pages/change_password';
import Signup from './pages/sign_up';
import Detail from './pages/detail';
// import Navigationbar from './components/navigationbar';

import store from './store';
import Navigationbar from './components/navigationbar';
import Footer from './components/footer';
// import Header from './components/Header';
import User from './pages/user';
import Admin from './pages/admin';
import UploadPost from './pages/upload-post';
import NotFound from './pages/notfound';
import PrivateRouter from './components/privateRoute';

import 'react-toastify/dist/ReactToastify.css';
import Search from './pages/search';
import UpdatePost from './pages/updatepost';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        {/* <Header></Header> */}
        <Navigationbar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Signin} />
          <Route path="/logup" component={Signup} />
          <Route path="/forget_password" component={ForgetPassword} />
          <PrivateRouter path="/change_password" component={ChangePassword} />
          <Route path="/detail/id=:id" component={Detail} />
          <PrivateRouter path="/user" component={User} />
          <Route path="/admin" component={Admin} />
          <PrivateRouter path="/upload_post" component={UploadPost} />
          <PrivateRouter path="/update_post" component={UpdatePost} />
          <Route path="/search?keyword=:keyword" component={Search} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
