import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.sass';

import Home from './pages/home';
import * as serviceWorker from './serviceWorker';
import Sign_in from './pages/sign_in';
import ForgetPassword from './pages/forget_password';
import ChangePassword from './pages/change_password';
import Signup from './pages/sign_up';
import Detail from './pages/detail';
//import Navigationbar from './components/navigationbar';

import store from './store';
import { Provider } from 'react-redux';
import Navigationbar from './components/navigationbar';
import Footer from './components/footer';

ReactDOM.render(
  
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Navigationbar></Navigationbar>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Sign_in}></Route>
          <Route path='/logup' component={Signup}></Route>
          <Route path="/forget_password" component={ForgetPassword}></Route>
          <Route path="/change_password" component={ChangePassword}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
        <Footer></Footer>
      </Provider>
    </React.StrictMode>
  </Router>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
