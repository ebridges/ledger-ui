import React from 'react';

let LoginStatus = React.createClass({
  render: function() {
    username = this.props.username;
    return (
      if(username) {
        <div>logged in as {username}</div>
      } else {
        <div><a href="/login">login</a></div>
      }
    );
  }
});

export default LoginStatus;
