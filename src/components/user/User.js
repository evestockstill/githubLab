import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';

const User = ({ name, followers, following, html_url, bio, avatar_url }) => (
  <article className={styles.user}>
    <h2 className={styles.username}>{name}</h2>
    <p>{followers}</p>
    <p>{following}</p>
    <p>{html_url}</p>
    <p>{bio}</p>
    <img src={avatar_url}></img>
  </article>
);

export default User;
