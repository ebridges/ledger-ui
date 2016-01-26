import moment from 'moment';
import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS }
    from '../actions/AuthnActions';
import { START_DATE_CHANGE, END_DATE_CHANGE } from '../actions/DateRangeActions';
import { CATEGORY_CHANGED, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAILURE }
    from '../actions/CategoryListActions';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
}, action = {}) {
    switch (action.type) {
      // @todo: isFetching & isAtuthenticated should be copied from action
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        default:
            return state;
    }
}

function dateRange(state = {
  startDate: moment().subtract(6, 'months'),
  endDate: moment()}, action = {}) {
  switch (action.type) {
    case START_DATE_CHANGE:
      return Object.assign({}, state, {
        startDate: action.startDate
      });
    case END_DATE_CHANGE:
      return Object.assign({}, state, {
        endDate: action.endDate
      });
    default:
      return state;
  }
}

function categoryState(state = {
  categoryList: [],
  selectedCategory: {}
}, action = {}) {
  switch (action.type) {
    case CATEGORY_CHANGED:
      let category;
      if(state.categoryList) {
        category = state.categoryList[action.selectedCategory];
      }
      return Object.assign({}, state, {
        selectedCategory: category
      });
    case CATEGORY_LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case CATEGORY_LIST_SUCCESS:
      return Object.assign({}, state, {
        categoryList: action.categoryList,
        isFetching: action.isFetching
      });
    case CATEGORY_LIST_FAILURE:
      return Object.assign({}, state, {
        message: action.message,
        isFetching: action.isFetching
      });
    default:
      return state;
  }
}

// We combine the reducers here so that they
// can be left split apart above
const ledgerReducer = combineReducers({
  auth,
  dateRange,
  categoryState
});

export default ledgerReducer