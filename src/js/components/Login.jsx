import React from 'react';
import { EmailSignInForm } from "redux-auth";

export default class Login extends React.Component {

  constructor() {
    super();
  }

  render() {
    let loginStatus;

    if(this.state.useraccount.username) {
      loginStatus = <a href="/logout">{this.state.useraccount.username}</a>
    } else {
      loginStatus = <EmailSignInForm />
    }

    return (
      <div className="login-status-region">{loginStatus}</div>
    );
  }
}
