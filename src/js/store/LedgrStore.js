
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { authStateReducer } from "redux-auth";
import Thunk from 'redux-thunk';

const LedgrStore = {
    store() {
        const reducer = combineReducers({
            auth: authStateReducer
        });

        return compose(
            applyMiddleware(Thunk)
            // ... add additional middleware here (router, etc.)
        )(createStore)(reducer);
    }
};

export default LedgrStore;
