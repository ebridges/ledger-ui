import React from 'react';

let LoginStatus = React.createClass({
  render: function() {
    let useraccount = this.props.useraccount;
    let loginStatus = <span/>

    if(useraccount.username) {
      loginStatus = <a href="/logout">{useraccount.username}</a>
    } else {
      loginStatus = <a href="/login">login</a>
    }

    return (
      <div className="login-status-region">{loginStatus}</div>
    );
  }
});

export default LoginStatus;
