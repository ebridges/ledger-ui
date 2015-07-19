import React from 'react';

let CategoryList = React.createClass({
  handleCategoryChange: function() {
      this.props.onCategoryChange(
          this.refs.categorySelector.getDOMNode().value
      );
  },

  render: function() {
    let categoryOptions = [];
    this.props.categories.forEach(function(category) {
      categoryOptions.push(<option key={category.id} value={category.id}>{category.name}</option>);
    });

    return (
      <select ref="categorySelector" value={this.props.selectedCategory} onChange={this.handleCategoryChange}>
        {categoryOptions}
      </select>
    );
  }
});

export default CategoryList;
