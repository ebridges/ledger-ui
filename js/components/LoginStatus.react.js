import React from 'react';

let LoginStatus = React.createClass({
  render: function() {
    let username = this.props.username;
    let loginStatus = <div/>

    if(username) {
      loginStatus = <div>logged in as {username}</div>
    } else {
      loginStatus = <div><a href="/login">login</a></div>
    }

    return (
      <div>{loginStatus}</div>
    );
  }
});

export default LoginStatus;
