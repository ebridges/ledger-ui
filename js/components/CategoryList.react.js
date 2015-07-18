import React from 'react';

let CategoryList = React.createClass({
  let categoryOptions = [];
  this.props.categories.forEach(function(category) {
    categoryOptions.push(<option>{category}</option>);
  });

  render: function() {
  return (
    <select>
      {categoryOptions}
    </select>
  );
});

export default CategoryList;
