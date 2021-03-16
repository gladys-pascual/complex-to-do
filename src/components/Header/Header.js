import { useLocation, useHistory } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  // use the first part of the email as a username
  const email = JSON.parse(window.localStorage.getItem("log in user info"))
    .email;
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
        {location.pathname === "/todo" && (
          <button
            className="add-todo"
            // onClick={() => openAddTransactionModal()}
          >
            {" "}
            + Add a to-do list{" "}
          </button>
        )}
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
