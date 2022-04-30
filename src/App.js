import "../src/styles/App.scss";
import gitHubLogo from "../src/images/github-icon-transparent.png";
import userImage from "../src/images/foto-bego.jpg";

function App() {
  return (
    <>
      <header>
        <div className="header">
          <img className="github-icon" src={gitHubLogo} alt="GitHub logo" />
          <form className="form-user">
            <input
              className="form-user__input"
              type="text"
              placeholder="search user"
            />
            <button className="form-user__btn">Buscar</button>
          </form>
        </div>
      </header>
      <main>
        <div className="results-container">
          <section className="user">
            <img className="user__image" src={userImage} alt="User" />
            <div className="user__dates">
              <h2 className="user__dates--name">Begoña Del Pozo</h2>
              <h3 className="user__dates--login">Begodpo</h3>
              <p className="user__dates--follow">
                <span class="span">17</span> followers
              </p>
              <p className="user__dates--follow">
                <span class="span">16</span> following
              </p>
            </div>
          </section>
          <section className="repo-container">
            <form>
              <input
                className="repo-input"
                type="text"
                placeholder="Find a repository"
              />
            </form>
            <p className="text-repos">public repos: 144</p>
            <ul className="repos">
              <li className="repos-list">
                <h2 className="repos-list__name">accordion-menu</h2>
                <p className="repos-list__description">
                  Ejercicio Frontend con la creación de un menú acordeón
                </p>
                <p className="repos-list__language">JavaScript</p>
                <p className="repos-list__update">
                  Updated <span>29 abr 2022</span>
                </p>
              </li>
              <li className="repos-list">
                <h2 className="repos-list__name">accordion-menu</h2>
                <p className="repos-list__description">
                  Ejercicio Frontend con la creación de un menú acordeón
                </p>
                <p className="repos-list__language">JavaScript</p>
                <p className="repos-list__update">
                  Updated <span>29 abr 2022</span>
                </p>
              </li>
              <li className="repos-list">
                <h2 className="repos-list__name">accordion-menu</h2>
                <p className="repos-list__description">
                  Ejercicio Frontend con la creación de un menú acordeón
                </p>
                <p className="repos-list__language">JavaScript</p>
                <p className="repos-list__update">
                  Updated <span>29 abr 2022</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
