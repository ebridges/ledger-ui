import React from 'react';

let CategoryList = React.createClass({
  handleCategoryChange: function() {
      this.props.onCategoryChange(
          this.refs.categorySelector.getDOMNode().value
      );
  },

  render: function() {
    let categoryOptions = [];
    let categoryList = this.props.categories;

    for (var index = 0; index < categoryList.length; ++index) {
      let category = categoryList[index];
      categoryOptions.push(<option key={category.id} value={category.id}>{category.name}</option>);
    }

    return (
      <div className="category-selector-region">
        <select className="category-selector" ref="categorySelector" value={this.props.selectedCategory} onChange={this.handleCategoryChange}>
          {categoryOptions}
        </select>
      </div>
    );
  }
});

export default CategoryList;
