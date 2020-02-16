import React, { useState } from 'react';
import Loading from '../Loading';
import User from './User';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUsername } from '../../action/userAction';
import { getUsername } from '../../services/githubApi';
// import { getUsername, isLoadingUsername } from '../../selector/userSelector';

const UsernamePage = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  const populateUser = () => {
    setLoading(true);
    getUsername(username)
      .then(user => {
        setUser(user);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        // Show(err)
        console.log(err);
      });
  };

  const handleClick = e => {
    e.preventDefault();
    populateUser();
  };

  // name, followers, following, html_url, bio, avatar_url
  return loading ? (
    <Loading />
  ) : (
    <>
      <form onSubmit={handleClick}>
        <input
          type='text'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <button>Search</button>
      </form>
      {user ? <User user={user} /> : null}
    </>
  );
};
export default UsernamePage;
