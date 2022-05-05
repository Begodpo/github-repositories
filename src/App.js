import { useEffect, useState } from "react";
import getApiData from "./services/api";
import "../src/styles/App.scss";
import Header from "./components/Header";
import User from "./components/User";
import Filters from "./components/Filters";
import ReposList from "./components/ReposList";

function App() {
  const [repos, setRepos] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getApiData().then((response) => {
      setRepos(response);
    });
  }, []);

  const handleFilter = (data) => {
    setFilterName(data);
  };

  const filteredRepos = repos.filter((repo) => {
    return repo.name.toLowerCase().includes(filterName.toLocaleLowerCase());
  });

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="results-container">
          <section className="user">
            <User />
          </section>
          <section className="repo-container">
            <Filters handleFilter={handleFilter} fiterName={filterName} />
            <ReposList repos={filteredRepos} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
