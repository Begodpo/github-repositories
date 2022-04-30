const callToApi = () => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((user) => {
        return {
          image: user.avatar_url,
          name: user.name,
          login: user.login,
          id: user.id,
          followers: user.followers,
          following: user.following,
          email: user.email,
          repos: user.public_repos,
        };
      });

      return cleanData;
    });
};

export default callToApi;
