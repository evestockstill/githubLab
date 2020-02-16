const request = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};

export const getUsername = (username) => request(username);
// export const getUserRepo = repos => request(`/username${repos}`);
