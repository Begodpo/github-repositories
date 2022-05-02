function Repo(props) {
  return (
    <>
      <h2 className="repos-list__name">{props.repo.name}</h2>
      <p className="repos-list__description">{props.repo.description}</p>
      <p className="repos-list__language">{props.repo.language}</p>
      <p className="repos-list__update">Updated {props.repo.updated}</p>
    </>
  );
}

export default Repo;
