import React from 'react';

let LoginStatus = React.createClass({
  render: function() {
    let useraccount = this.props.useraccount;
    let loginStatus = <div/>

    if(useraccount.username) {
      loginStatus = <span>logged in as {useraccount.username}</span>
    } else {
      loginStatus = <span><a href="/login">login</a></span>
    }

    return (
      <span className="login-status-region">{loginStatus}</span>
    );
  }
});

export default LoginStatus;
