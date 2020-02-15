import React, { useEffect } from 'react';
import Loading from '../Loading';
import User from './User';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsername } from '../../action/userAction';
import { getUsername, isLoadingUsername } from '../../selector/userSelector';
import SearchBar from '../search/SearchBar';

const UsernamePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUsername);
  const username = useSelector(getUsername);

  useEffect(() => {
    dispatch(fetchUsername());
  }, []);

  if(loading) return <Loading />;

  const usernameElements = username.map(user => (
    <li key={user.username}>
      <User {...user} />
    </li>
  ));

  return (
    <>
      <SearchBar />
      <ul>{usernameElements}</ul>
    </>
  );
};
export default UsernamePage;
