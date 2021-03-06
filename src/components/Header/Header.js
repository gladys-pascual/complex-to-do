import { useHistory } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const history = useHistory();

  const loginInfo = localStorage.getItem("log_in_user_info");

  if (!loginInfo) {
    return null;
  }

  // use the first part of the email as a username
  const email = JSON.parse(loginInfo).email;
  const getUsername = (email) => {
    const emailSplit = email.split("@");
    return emailSplit[0];
  };
  const username = getUsername(email);

  // Log out
  const handleLogOut = () => {
    localStorage.clear();
    history.push(`/login`);
  };

  return (
    <header>
      <div className="username-and-add-list">
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="username dropbtn">
              <span>Welcome {username}</span>
              <span className="material-icons">arrow_drop_down</span>
            </button>
            <div className="dropdown-content">
              <button className="logout" onClick={() => handleLogOut()}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
