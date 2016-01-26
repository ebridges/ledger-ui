import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {
  render() {
    const { onLogoutClick } = this.props;
    return (
      <div className="email-sign-in-form">
        <button onClick={() => onLogoutClick()} className="btn btn-primary email-sign-in-submit">
          Logout
        </button>
      </div>
    )
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
};
