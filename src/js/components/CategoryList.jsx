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
    let doAsync = true;
    request.open('GET', url, doAsync);

    let localState = {};
    request.onload = function() {
      if (this.isMounted()) {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            localState["categories"] = JSON.parse(request.responseText);
            this.setState(localState);
          } else {
            // We reached our target server, but it returned an error
            console.error("Error response: "+request.responseText);
          }
        }
      }
    }.bind(this);

    request.onerror = function() {
      // There was a connection error of some sort
      console.error("Error: cannot connect"+request);
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
