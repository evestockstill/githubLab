import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';

const User = ({
  user: { name, followers, following, html_url, bio, avatar_url }
}) => (
  <article key={name} className={styles.user}>
    <h2 className={styles.username}>{name}</h2>
    <p>{followers}</p>
    <p>{following}</p>
    <p>{html_url}</p>
    <p>{bio}</p>
    <img src={avatar_url}></img>
  </article>
);

// User.propTypes = {
//   user: PropTypes.object.shape({
//     name: PropTypes.string.isRequired,
//     followers: PropTypes.string.isRequired,
//     following: PropTypes.string.isRequired,
//     html_url: PropTypes.string.isRequired,
//     bio: PropTypes.string.isRequired,
//     avatar_url: PropTypes.string.isRequired
//   })
// };

export default User;
