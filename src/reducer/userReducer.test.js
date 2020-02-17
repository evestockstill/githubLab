import { FETCH_USERNAME, FETCH_USERNAME_LOADING } from '../action/userAction';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the fetch user loading action', () => {
    const action = { type: FETCH_USERNAME_LOADING };
    const initialState = { loading: false, username: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      username: null
    });
  });
  it('handles the fetch username action', () => {
    const action = {
      type: FETCH_USERNAME,
      payload: [
        {
          name: 'Eve Stockstill',
          followers: 4,
          following: 3,
          html_url: 'https://github.com/evestockstill',
          bio:
            'I am a full stack developer. Tech skills include HTML/CSS/SASS, javascript, React, node.js, mongoDB. My dog is life, and I am a recovering pool hall junkie.',
          avatar_url: 'https://avatars1.githubusercontent.com/u/51726275?v=4'
        }
      ]
    };
    const initialState = { loading: true, username: [] };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      username: [
        {
          name: 'Eve Stockstill',
          followers: 4,
          following: 3,
          html_url: 'https://github.com/evestockstill',
          bio:
            'I am a full stack developer. Tech skills include HTML/CSS/SASS, javascript, React, node.js, mongoDB. My dog is life, and I am a recovering pool hall junkie.',
          avatar_url: 'https://avatars1.githubusercontent.com/u/51726275?v=4'
        }
      ]
    });
  });
});
