import React from 'react';
import { withRouter} from 'react-router-dom';
import Registration from './Registration'
import auth from '../../services/auth';
import {Button} from 'react-bootstrap';
const classes = "btn btn-primary";

const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <Registration />;
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      <Button className={classes} onClick={logout}>Logout</Button>
    </div>
  );
});

export default AuthButton;