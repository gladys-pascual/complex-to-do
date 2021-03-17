import LogInForm from "../../components/LogInForm/LogInForm";
import "../../assets/logInAndSignUpForm.scss";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const history = useHistory();
  const handleLogIn = (data) => {
    const userInfo = data;
    localStorage.setItem("log in user info", JSON.stringify(userInfo));
    history.push(`/todo`);
  };

  return (
    <section className="log-in-page">
      <LogInForm handleLogIn={handleLogIn} />
    </section>
  );
};

export default LogIn;
