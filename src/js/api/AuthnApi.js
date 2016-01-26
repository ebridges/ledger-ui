import request from 'request';
import { requestLogin, receiveLogin, requestLogout, receiveLogout, loginError } from '../actions/AuthnActions';

export function loginUser(creds) {

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch( creds => requestLogin );

    request.post({
      url: "http://localhost:9000/ledger/auth/login",
      form: {
        username: creds.username,
        password: creds.password
      }},
    function (error, response, body) {
      if(response.statusCode == 200){
        localStorage.setItem('id_token', body.idToken);
        dispatch(receiveLogin(body));
      } else {
        dispatch(loginError(body.message));
      }
    });
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout());
  }
}
