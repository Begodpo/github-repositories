import userImage from "../images/foto-bego.jpg";
import "../styles/components/user.scss";

const User = () => {
  return (
    <>
      <img className="user__image" src={userImage} alt="avatar del usuario" />
      <div className="user__dates">
        <h2 className="user__dates--name">Begoña del Pozo</h2>
        <h3 className="user__dates--login">Begodpo</h3>
        <p className="user__dates--follow">
          <span className="span">15</span> followers
        </p>
        <p className="user__dates--follow">
          <span className="span">16</span> following
        </p>
        <p className="text-repos">
          public repos: <span className="span">19</span>
        </p>
      </div>
    </>
  );
};
export default User;
