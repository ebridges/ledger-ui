import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

export default class CategoryList extends Component {
  render() {
    const { onCategoryChange, selectedCategory, categoryList } = this.props;
    let categoryOptions = [];
    if(categoryList) {
      for (var index = 0; index < categoryList.length; ++index) {
        let category = categoryList[index];
        categoryOptions.push(<option key={category.id} value={category.id}>{category.categoryName}</option>);
      }
    }
    return (
      <div className="category-selector-region">
        <select className="category-selector"
                value={selectedCategory}
                onChange={(category) => onCategoryChange(category.target.selectedIndex)}>
          {categoryOptions}
        </select>
      </div>
    );
  }
}

CategoryList.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object,
  categoryList: PropTypes.array
};

function mapStateToProps(state) {
  //noinspection UnnecessaryLocalVariableJS
  const { categoryState } = state;
//noinspection UnnecessaryLocalVariableJS
  const { selectedCategory, categoryList } = categoryState;

  return {
    selectedCategory,
    categoryList
  }
}

export default connect(mapStateToProps)(CategoryList);
