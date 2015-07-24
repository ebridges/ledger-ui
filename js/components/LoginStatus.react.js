import React from 'react';

let LoginStatus = React.createClass({
  render: function() {
    let useraccount = this.props.useraccount;
    let loginStatus = <div/>

    if(username) {
      loginStatus = <div>logged in as {useraccount.username}</div>
    } else {
      loginStatus = <div><a href="/login">login</a></div>
    }

    return (
      <div>{loginStatus}</div>
    );
  }
});

export default LoginStatus;
