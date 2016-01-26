import request from 'request';

export const CATEGORY_CHANGED = 'CATEGORY_CHANGED';
export const CATEGORY_LIST_REQUEST = 'CATEGORY_LIST_REQUEST';
export const CATEGORY_LIST_SUCCESS = 'CATEGORY_LIST_SUCCESS';
export const CATEGORY_LIST_FAILURE = 'CATEGORY_LIST_FAILURE';

function categoryListRequest() {
  return {
    type: CATEGORY_LIST_REQUEST,
    isFetching: true
  }
}

function categoryListSuccess(categoryList) {
  return {
    type: CATEGORY_LIST_SUCCESS,
    isFetching: false,
    categoryList: categoryList
  }
}

function categoryListFailure(message) {
  return {
    type: CATEGORY_LIST_FAILURE,
    isFetching: false,
    message: message
  }
}

export function categoryChanged(selectedCategory) {
  return {
    type: CATEGORY_CHANGED,
    selectedCategory: selectedCategory
  };
}

export function loadCategories() {
  return dispatch => {
    dispatch( () => categoryListRequest );
    request.get(
        {url: "http://localhost:9000/ledger/categories/list"},
        function (error, response, body) {
          if(response.statusCode == 200) {
            var reqBody = body.toString();
            let categoryList = JSON.parse(reqBody);
            dispatch(categoryListSuccess(categoryList));
          } else {
            dispatch(categoryListFailure(body.message));
          }
        }
    );
  }
}


