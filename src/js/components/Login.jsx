import React, { Component, PropTypes } from 'react';

export default class Login extends Component {

  render() {
    const { errorMessage } = this.props;

    return (<div className="email-sign-in-form">
      <input type='text' ref='username' className="form-control email-sign-in-email" placeholder='Username'/>
      <input type='password' ref='password' className="form-control email-sign-in-password" placeholder='Password'/>
      <button onClick={(event) => this.handleClick(event)} className="btn btn-primary email-sign-in-submit">
        Login
      </button>

      {errorMessage &&
      <p className='email-sign-in-error'>{errorMessage}</p>
      }
    </div>);
  }

  handleClick(event) {
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = {username: username.value.trim(), password: password.value.trim()};
    this.props.onLoginClick(creds);
  }
}

// @ToDo connect this to the state using mapStateToProps
// @Todo what about isFetching?
//Login.propTypes = {
//  onLoginClick: PropTypes.func.isRequired,
//  errorMessage: PropTypes.string
//};
