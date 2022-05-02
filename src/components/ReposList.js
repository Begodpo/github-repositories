import Repo from "./Repo";
function ReposList(props) {
  const repoElements = props.repos.map((repo) => {
    return (
      <li className="repos-list" key={repo.id}>
        <Repo repo={repo} />
      </li>
    );
  });
  return <ul className="repos">{repoElements}</ul>;
}
export default ReposList;
