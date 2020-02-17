import { getUsername } from '../services/githubApi';

export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const SET_USER_DATA = 'SET_USER_DATA';

const startLoading = () => ({
  type: START_LOADING
});

const stopLoading = () => ({
  type: STOP_LOADING
});

const setUserData = userData => ({
  type: SET_USER_DATA,
  payload: userData
});

export const fetchUsername = username => {
  return dispatch => {
    dispatch(startLoading());

    // Call API
    // do something success
    // do something error
    getUsername(username)
      .then(userData => {
        dispatch(setUserData(userData));
        dispatch(stopLoading());
      })
      .then(err => console.log('ERROR HERE:', err));
  };
};
