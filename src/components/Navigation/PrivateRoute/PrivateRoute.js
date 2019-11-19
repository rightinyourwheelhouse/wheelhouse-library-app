import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useCookie from '../../../hooks/useCookie';

export default function PrivateRoute({ component: Component, ...rest }) {
  const [userObject] = useCookie('user');
  const isAuthenticated = userObject && JSON.parse(userObject).accessToken;

  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        ))
      }
    />
  );
}
