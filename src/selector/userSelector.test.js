import { isLoadingUser, getUser } from './userSelector';

describe('username selectors', () => {
  const state = {
    username: {
      loading: true,
      username: []
    }
  };
  const loading = isLoadingUser(state);

  expect(loading).toEqual(true);
});
it('selects the username state', () => {
  const state = {
    username: {
      loading: true,
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
    }
  };
  const username = getUser(state);
  expect(username).toEqual([
    {
      name: 'Eve Stockstill',
      followers: 4,
      following: 3,
      html_url: 'https://github.com/evestockstill',
      bio:
        'I am a full stack developer. Tech skills include HTML/CSS/SASS, javascript, React, node.js, mongoDB. My dog is life, and I am a recovering pool hall junkie.',
      avatar_url: 'https://avatars1.githubusercontent.com/u/51726275?v=4'
    }
  ]);
});
