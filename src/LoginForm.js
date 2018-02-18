import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'react-redux-form';
import { Button } from 'react-bootstrap';

const LoginForm = ({ user }) => (
  <form>
    <Field model="user.username">
      <label>Username</label>
      <input type="text"/>
    </Field>

    <Field model="user.password">
      <label>Password</label>
      <input type="password"/>
    </Field>

    <Button bsStyle="success">
      Log in as {user.username}
    </Button>
  </form>
);

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps)(LoginForm);
