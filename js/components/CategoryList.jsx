import React from 'react';

let CategoryList = React.createClass({
  handleCategoryChange: function() {
      this.props.onCategoryChange(
          this.refs.categorySelector.getDOMNode().value
      );
  },

  getInitialState: function() {
    return { categories: [
      {"id": -1, "categoryName": "All categories"}
    ]};
  },


  componentDidMount: function() {
    let url = "http://localhost:9000/ledger/categories/list";
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        this.state.categories = JSON.parse(request.responseText);
        console.log("this.state: "+JSON.stringify(this.state));
      } else {
        // We reached our target server, but it returned an error
        console.log("Error response: "+request.responseText);
      }
    }.bind(this);

    request.onerror = function() {
      // There was a connection error of some sort
      console.log("Error: cannot connect"+request);
    }.bind(this);

    request.send();
  },

  render: function() {
    let categoryOptions = [];
    let categoryList = this.state.categories;

    for (var index = 0; index < categoryList.length; ++index) {
      let category = categoryList[index];
      categoryOptions.push(<option key={category.id} value={category.id}>{category.categoryName}</option>);
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
