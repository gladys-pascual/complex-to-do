import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../assets/logInAndSignUpForm.scss";

const LogInForm = ({ handleLogIn }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    handleLogIn(data);
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="log-in">
          <input
            id="email"
            name="email"
            aria-invalid={errors.email ? "true" : "false"}
            ref={register({
              required: "This is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format.",
              },
            })}
            type="email"
            placeholder="Email"
          />
          <div className="error-message-container">
            <p
              className={
                errors.username
                  ? "error-message"
                  : "error-message-hidden error-message"
              }
              role="alert"
            >
              {errors.username && errors.username.message}
            </p>
          </div>

          <input
            id="password"
            name="password"
            aria-invalid={errors.passward ? "true" : "false"}
            ref={register({
              required: "This is required.",
              minLength: {
                value: 5,
                message: "Minimum length is 5 characters.",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <div className="error-message-container">
            <p
              className={
                errors.password
                  ? "error-message"
                  : "error-message-hidden error-message"
              }
              role="alert"
            >
              {errors.password && errors.password.message}
            </p>
          </div>
          <button type="submit" className="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <p className="register">
        Don't have an account? <Link to="/signup">Register</Link>
      </p>
    </div>
  );
};

export default LogInForm;
