import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "../../assets/logInAndSignUpForm.scss";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const handleSignUp = (data) => {
    console.log(data);
    const userInfo = data;
    localStorage.setItem("sign up user info", JSON.stringify(userInfo));
    history.push(`/aftersignup`);
  };

  return (
    <section className="sign-up-page">
      <SignUpForm handleSignUp={handleSignUp} />
    </section>
  );
};

export default SignUp;
