import { useEffect, useState } from "react";
import gitHubLogo from "../src/images/github-icon-transparent.png";
import userImage from "../src/images/foto-bego.jpg";
import getApiData from "./services/api";
import "../src/styles/App.scss";
import ReposList from "./components/ReposList";
import Filters from "./components/Filters";

function App() {
  // state
  const [repos, setRepos] = useState([]);
  const [filterName, setFilterName] = useState("");

  // effects
  useEffect(() => {
    getApiData().then((reposData) => {
      setRepos(reposData);
    });
  }, []); // Poner el estado

  const handleFilter = (data) => {
    setFilterName(data);
  };

  const filteredRepos = repos.filter((repo) => {
    return repo.name.toLowerCase().includes(filterName.toLocaleLowerCase());
  });

  // render helpers

  const renderHeader = () => {
    return (
      <header>
        <div className="header">
          <img className="github-icon" src={gitHubLogo} alt="GitHub logo" />
          <form className="form-user">
            <input
              className="form-user__input"
              type="text"
              placeholder="search user"
            />
            <button className="form-user__btn">Search</button>
          </form>
        </div>
      </header>
    );
  };

  const renderUsers = () => {
    return (
      <section className="user">
        <img className="user__image" src={userImage} alt="avatar del usuario" />
        <div className="user__dates">
          <h2 className="user__dates--name">Begoña del Pozo</h2>
          <h3 className="user__dates--login">Begodpo</h3>
          <p className="user__dates--follow">
            <span className="span">15</span> followers
          </p>
          <p className="user__dates--follow">
            <span className="span">12</span> following
          </p>
        </div>
      </section>
    );
  };

  const renderPubliRepos = () => {
    return <p className="text-repos">public repos: 144</p>;
  };

  return (
    <>
      {renderHeader()}
      <main>
        <div className="results-container">
          {renderUsers()}
          <section className="repo-container">
            <Filters handleFilter={handleFilter} fiterName={filterName} />

            {renderPubliRepos()}

            <ReposList repos={filteredRepos} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
