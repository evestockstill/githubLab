import React, { useState } from 'react';
import Loading from '../Loading';
import User from './User';
import { useSelector, useDispatch } from 'react-redux';
import { isLoading, getUser } from '../../selector/userSelector';
import { fetchUsername } from '../../action/userAction';

const UsernamePage = () => {
  const loading = useSelector(isLoading);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  const handleClick = e => {
    e.preventDefault();
    dispatch(fetchUsername(username));
  };

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
