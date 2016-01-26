import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Logo from './Logo.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import DateRangeCriteria from './DateRangeCriteria.jsx';
import CategoryList from './CategoryList.jsx';
import TransactionTable from './TransactionTable.jsx';
import { loginUser, logoutUser } from '../api/AuthnApi';
import { categoryChanged, loadCategories } from '../actions/CategoryListActions'

// https://facebook.github.io/react/tips/initial-ajax.html
export default class Ledger extends Component {
  constructor() {
    super();
    this.state = {
      application_name: "Ledger",
      column_labels: ["Txn Date", "Category", "Description", "Description (orig)", "Amount"],
      transactions: [
        {
          "id": 1,
          "txnDate": "2010-01-01",
          "categoryName": "Fruit",
          "description": "Apple purchase",
          "originalDescription": "Apple purchase 0x1212",
          "amount": "$10.00"
        },
        {
          "id": 2,
          "txnDate": "2010-01-02",
          "categoryName": "Fruit",
          "description": "Orange purchase",
          "originalDescription": "Orange purchase 0x1212",
          "amount": "$20.00"
        }
      ]
    };
  }

  componentWillMount() {
    this.props.dispatch(loadCategories())
  }

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    return (
      <div className="ledger">
        <div id="header">
          <Logo applicationname={this.state.application_name}/>
          {isAuthenticated && <Logout onLogoutClick={() => dispatch(logoutUser())}/>}
          {!isAuthenticated &&
          <Login onLoginClick={(creds) => dispatch(loginUser(creds))}
                 onErrorMessage={errorMessage}/>}
        </div>
        <div id="body">
          <div id="navigation">
            <CategoryList onCategoryChange={ (selectedCategory) => dispatch(categoryChanged(selectedCategory)) } />
            <DateRangeCriteria />
          </div>
          <div id="content">
            <TransactionTable columnLabels={this.state.column_labels}
                              transactions={this.state.transactions}/>
          </div>
        </div>
      </div>
    );
  }
}

Ledger.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state) {
  //noinspection UnnecessaryLocalVariableJS
  const { authState } = state;
//noinspection UnnecessaryLocalVariableJS
  const { isAuthenticated, errorMessage } = authState;

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(Ledger);
