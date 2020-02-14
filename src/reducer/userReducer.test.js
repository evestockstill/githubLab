import { FETCH_USERNAME, FETCH_USERNAME_LOADING } from '../action/userAction';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the fetch user loading action', () => {
    const action = { type: FETCH_USERNAME_LOADING };
    const initialState = { loading: false, user: [] };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      user: []
    });
  });

  
});
