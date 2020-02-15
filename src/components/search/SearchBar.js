import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.css';

const SearchBar = ({ username, onQueryChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={username}
        onChange={({ target }) => onQueryChange(target.value)}
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};
SearchBar.propTypes = {
  username: PropTypes.string,
  onQueryChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default SearchBar;
