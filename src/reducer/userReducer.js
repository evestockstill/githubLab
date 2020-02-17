import {
  SET_USER_DATA,
  START_LOADING,
  STOP_LOADING
} from '../action/userAction';

const initialState = {
  user: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case SET_USER_DATA:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
