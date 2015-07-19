import React from 'react';

let CategoryList = React.createClass({
  render: function() {
    let categoryOptions = [];
    this.props.categories.forEach(function(category) {
      categoryOptions.push(<option key={category.id} value={category.id}>{category.name}</option>);
    });

    return (
      <select value={this.props.selectedCategory}>
        {categoryOptions}
      </select>
    );
  }
});

export default CategoryList;
