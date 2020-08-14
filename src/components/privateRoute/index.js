import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (

  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  // console.log(this.props.user)
  <Route
    {...rest}
    render={props => (
      JSON.parse(localStorage.getItem('stateUser'))
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);

export default (PrivateRoute);
