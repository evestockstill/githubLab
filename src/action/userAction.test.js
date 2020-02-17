import { fetchUsername, FETCH_USERNAME } from './userAction';

jest.mock('../services/githubApi.js');

describe('username actions', () => {
  it('creates fetch username action', () => {
    const dispatch = jest.fn();
    const action = fetchUsername('evestockstill');

    return action(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_USERNAME_LOADING'
      });
      expect(dispatch).toHaveBeenCalledWith({
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
      });
    });
  });
});
