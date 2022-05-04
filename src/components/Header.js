import gitHubLogo from "../images/github-icon-transparent.png";
import "../styles/components/header.scss";
const Header = () => {
  return (
    <div className="header">
      <img className="github-icon" src={gitHubLogo} alt="GitHub logo" />
      <h1 className="title">Begoña Del Pozo</h1>
    </div>
  );
};

export default Header;
