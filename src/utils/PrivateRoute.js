import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, level, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )}
    />
  );
};

export default PrivateRoute;
