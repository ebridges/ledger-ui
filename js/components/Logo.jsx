import React from 'react';

let Logo = React.createClass({
  render: function() {
    let applicationName = this.props.applicationname;
    return (
      <div className="logo-region">{applicationName}</div>
    );
  }
});

export default Logo;
