import { useEffect, useState } from 'react';
import { getUsername } from '../services/githubApi';

export const useUsername = () => {
  const [username, setUsername] = useState([]);
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleQueryChange = searchInput => {
    setQuery(searchInput);
  };
  const handleSubmit = () => {
    event.preventDefault();
    setSearchTerm(query);
    return username;
  };

  return {
    username,
    handleQueryChange,
    handleSubmit,
  };
};
