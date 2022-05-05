const getApiData = () => {
  return fetch(`https://api.github.com/users/Begodpo/repos`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((repo) => {
        return {
          id: repo.id,
          name: repo.name,
          avatar: repo.owner.avatar_url,
          userName: repo.owner.login,
          description: repo.description,
          language: repo.language,
          updated: repo.updated_at,
        };
      });

      return cleanData;
    });
};

export default getApiData;
