import { getUsername } from '../services/githubApi';

export const FETCH_USERNAME_LOADING = 'FETCH_USERNAME_LOADING';
export const FETCH_USERNAME = 'FETCH_USERNAME';
export const fetchUsername = (username) => dispatch => {
  dispatch({ type: FETCH_USERNAME_LOADING });
  return getUsername(username).then(username =>
    dispatch({
      type: FETCH_USERNAME,
      payload: username
    })
  );
};
