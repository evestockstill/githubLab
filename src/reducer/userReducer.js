import { FETCH_USERNAME, FETCH_USERNAME_LOADING } from '../action/userAction';

const initialState = {
  username: null,
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERNAME_LOADING:
      return { ...state, loading: true };
    case FETCH_USERNAME:
      return { ...state, loading: false, username: action.payload };
    default:
      return state;
  }
}
